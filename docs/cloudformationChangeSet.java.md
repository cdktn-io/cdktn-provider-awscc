# `cloudformationChangeSet` Submodule <a name="`cloudformationChangeSet` Submodule" id="@cdktn/provider-awscc.cloudformationChangeSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationChangeSet <a name="CloudformationChangeSet" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set awscc_cloudformation_change_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_change_set.CloudformationChangeSet;

CloudformationChangeSet.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .changeSetName(java.lang.String)
    .stackName(java.lang.String)
//  .capabilities(java.util.List<java.lang.String>)
//  .changeSetType(java.lang.String)
//  .deploymentMode(java.lang.String)
//  .description(java.lang.String)
//  .importExistingResources(java.lang.Boolean|IResolvable)
//  .includeNestedStacks(java.lang.Boolean|IResolvable)
//  .notificationArNs(java.util.List<java.lang.String>)
//  .onStackFailure(java.lang.String)
//  .roleArn(java.lang.String)
//  .tags(IResolvable|java.util.List<CloudformationChangeSetTags>)
//  .templateBody(java.lang.String)
//  .templateUrl(java.lang.String)
//  .usePreviousTemplate(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.changeSetName">changeSetName</a></code> | <code>java.lang.String</code> | The name of the change set. Must be unique among all change sets associated with the specified stack. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.stackName">stackName</a></code> | <code>java.lang.String</code> | The name or unique ID of the stack for which you are creating a change set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | The capabilities that are allowed in the stack. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.changeSetType">changeSetType</a></code> | <code>java.lang.String</code> | The type of change set operation. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.deploymentMode">deploymentMode</a></code> | <code>java.lang.String</code> | Determines how CloudFormation handles configuration drift during deployment. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description to help you identify this change set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.importExistingResources">importExistingResources</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates if the change set imports resources that already exist. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.includeNestedStacks">includeNestedStacks</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Creates a change set for all nested stacks specified in the template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.notificationArNs">notificationArNs</a></code> | <code>java.util.List<java.lang.String></code> | The ARNs of Amazon SNS topics that CloudFormation associates with the stack. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.onStackFailure">onStackFailure</a></code> | <code>java.lang.String</code> | Determines what action will be taken if stack creation fails. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The ARN of an IAM role that CloudFormation assumes when executing the change set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>></code> | Key-value pairs to associate with the change set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.templateBody">templateBody</a></code> | <code>java.lang.String</code> | A structure that contains the body of the revised template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.templateUrl">templateUrl</a></code> | <code>java.lang.String</code> | The URL of the file that contains the revised template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.usePreviousTemplate">usePreviousTemplate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to reuse the template associated with the stack to create the change set. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `changeSetName`<sup>Required</sup> <a name="changeSetName" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.changeSetName"></a>

- *Type:* java.lang.String

The name of the change set. Must be unique among all change sets associated with the specified stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#change_set_name CloudformationChangeSet#change_set_name}

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.stackName"></a>

- *Type:* java.lang.String

The name or unique ID of the stack for which you are creating a change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#stack_name CloudformationChangeSet#stack_name}

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.capabilities"></a>

- *Type:* java.util.List<java.lang.String>

The capabilities that are allowed in the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#capabilities CloudformationChangeSet#capabilities}

---

##### `changeSetType`<sup>Optional</sup> <a name="changeSetType" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.changeSetType"></a>

- *Type:* java.lang.String

The type of change set operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#change_set_type CloudformationChangeSet#change_set_type}

---

##### `deploymentMode`<sup>Optional</sup> <a name="deploymentMode" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.deploymentMode"></a>

- *Type:* java.lang.String

Determines how CloudFormation handles configuration drift during deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#deployment_mode CloudformationChangeSet#deployment_mode}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description to help you identify this change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#description CloudformationChangeSet#description}

---

##### `importExistingResources`<sup>Optional</sup> <a name="importExistingResources" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.importExistingResources"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates if the change set imports resources that already exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#import_existing_resources CloudformationChangeSet#import_existing_resources}

---

##### `includeNestedStacks`<sup>Optional</sup> <a name="includeNestedStacks" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.includeNestedStacks"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Creates a change set for all nested stacks specified in the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#include_nested_stacks CloudformationChangeSet#include_nested_stacks}

---

##### `notificationArNs`<sup>Optional</sup> <a name="notificationArNs" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.notificationArNs"></a>

- *Type:* java.util.List<java.lang.String>

The ARNs of Amazon SNS topics that CloudFormation associates with the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#notification_ar_ns CloudformationChangeSet#notification_ar_ns}

---

##### `onStackFailure`<sup>Optional</sup> <a name="onStackFailure" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.onStackFailure"></a>

- *Type:* java.lang.String

Determines what action will be taken if stack creation fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#on_stack_failure CloudformationChangeSet#on_stack_failure}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

The ARN of an IAM role that CloudFormation assumes when executing the change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#role_arn CloudformationChangeSet#role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>>

Key-value pairs to associate with the change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#tags CloudformationChangeSet#tags}

---

##### `templateBody`<sup>Optional</sup> <a name="templateBody" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.templateBody"></a>

- *Type:* java.lang.String

A structure that contains the body of the revised template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#template_body CloudformationChangeSet#template_body}

---

##### `templateUrl`<sup>Optional</sup> <a name="templateUrl" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.templateUrl"></a>

- *Type:* java.lang.String

The URL of the file that contains the revised template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#template_url CloudformationChangeSet#template_url}

---

##### `usePreviousTemplate`<sup>Optional</sup> <a name="usePreviousTemplate" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.usePreviousTemplate"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to reuse the template associated with the stack to create the change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#use_previous_template CloudformationChangeSet#use_previous_template}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetCapabilities">resetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetChangeSetType">resetChangeSetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetDeploymentMode">resetDeploymentMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetImportExistingResources">resetImportExistingResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetIncludeNestedStacks">resetIncludeNestedStacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetNotificationArNs">resetNotificationArNs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetOnStackFailure">resetOnStackFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetTemplateBody">resetTemplateBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetTemplateUrl">resetTemplateUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetUsePreviousTemplate">resetUsePreviousTemplate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CloudformationChangeSetTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>>

---

##### `resetCapabilities` <a name="resetCapabilities" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetCapabilities"></a>

```java
public void resetCapabilities()
```

##### `resetChangeSetType` <a name="resetChangeSetType" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetChangeSetType"></a>

```java
public void resetChangeSetType()
```

##### `resetDeploymentMode` <a name="resetDeploymentMode" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetDeploymentMode"></a>

```java
public void resetDeploymentMode()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetImportExistingResources` <a name="resetImportExistingResources" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetImportExistingResources"></a>

```java
public void resetImportExistingResources()
```

##### `resetIncludeNestedStacks` <a name="resetIncludeNestedStacks" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetIncludeNestedStacks"></a>

```java
public void resetIncludeNestedStacks()
```

##### `resetNotificationArNs` <a name="resetNotificationArNs" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetNotificationArNs"></a>

```java
public void resetNotificationArNs()
```

##### `resetOnStackFailure` <a name="resetOnStackFailure" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetOnStackFailure"></a>

```java
public void resetOnStackFailure()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetTags"></a>

```java
public void resetTags()
```

##### `resetTemplateBody` <a name="resetTemplateBody" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetTemplateBody"></a>

```java
public void resetTemplateBody()
```

##### `resetTemplateUrl` <a name="resetTemplateUrl" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetTemplateUrl"></a>

```java
public void resetTemplateUrl()
```

##### `resetUsePreviousTemplate` <a name="resetUsePreviousTemplate" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetUsePreviousTemplate"></a>

```java
public void resetUsePreviousTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudformationChangeSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cloudformation_change_set.CloudformationChangeSet;

CloudformationChangeSet.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cloudformation_change_set.CloudformationChangeSet;

CloudformationChangeSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cloudformation_change_set.CloudformationChangeSet;

CloudformationChangeSet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cloudformation_change_set.CloudformationChangeSet;

CloudformationChangeSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudformationChangeSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudformationChangeSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudformationChangeSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudformationChangeSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationChangeSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetId">changeSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.stackId">stackId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList">CloudformationChangeSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.capabilitiesInput">capabilitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetNameInput">changeSetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetTypeInput">changeSetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.deploymentModeInput">deploymentModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.importExistingResourcesInput">importExistingResourcesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.includeNestedStacksInput">includeNestedStacksInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.notificationArNsInput">notificationArNsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.onStackFailureInput">onStackFailureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.stackNameInput">stackNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateBodyInput">templateBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateUrlInput">templateUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.usePreviousTemplateInput">usePreviousTemplateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetName">changeSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetType">changeSetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.deploymentMode">deploymentMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.importExistingResources">importExistingResources</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.includeNestedStacks">includeNestedStacks</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.notificationArNs">notificationArNs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.onStackFailure">onStackFailure</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.stackName">stackName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateBody">templateBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateUrl">templateUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.usePreviousTemplate">usePreviousTemplate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `changeSetId`<sup>Required</sup> <a name="changeSetId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetId"></a>

```java
public java.lang.String getChangeSetId();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.stackId"></a>

```java
public java.lang.String getStackId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.tags"></a>

```java
public CloudformationChangeSetTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList">CloudformationChangeSetTagsList</a>

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.capabilitiesInput"></a>

```java
public java.util.List<java.lang.String> getCapabilitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `changeSetNameInput`<sup>Optional</sup> <a name="changeSetNameInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetNameInput"></a>

```java
public java.lang.String getChangeSetNameInput();
```

- *Type:* java.lang.String

---

##### `changeSetTypeInput`<sup>Optional</sup> <a name="changeSetTypeInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetTypeInput"></a>

```java
public java.lang.String getChangeSetTypeInput();
```

- *Type:* java.lang.String

---

##### `deploymentModeInput`<sup>Optional</sup> <a name="deploymentModeInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.deploymentModeInput"></a>

```java
public java.lang.String getDeploymentModeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `importExistingResourcesInput`<sup>Optional</sup> <a name="importExistingResourcesInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.importExistingResourcesInput"></a>

```java
public java.lang.Boolean|IResolvable getImportExistingResourcesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeNestedStacksInput`<sup>Optional</sup> <a name="includeNestedStacksInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.includeNestedStacksInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeNestedStacksInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `notificationArNsInput`<sup>Optional</sup> <a name="notificationArNsInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.notificationArNsInput"></a>

```java
public java.util.List<java.lang.String> getNotificationArNsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `onStackFailureInput`<sup>Optional</sup> <a name="onStackFailureInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.onStackFailureInput"></a>

```java
public java.lang.String getOnStackFailureInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `stackNameInput`<sup>Optional</sup> <a name="stackNameInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.stackNameInput"></a>

```java
public java.lang.String getStackNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CloudformationChangeSetTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>>

---

##### `templateBodyInput`<sup>Optional</sup> <a name="templateBodyInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateBodyInput"></a>

```java
public java.lang.String getTemplateBodyInput();
```

- *Type:* java.lang.String

---

##### `templateUrlInput`<sup>Optional</sup> <a name="templateUrlInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateUrlInput"></a>

```java
public java.lang.String getTemplateUrlInput();
```

- *Type:* java.lang.String

---

##### `usePreviousTemplateInput`<sup>Optional</sup> <a name="usePreviousTemplateInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.usePreviousTemplateInput"></a>

```java
public java.lang.Boolean|IResolvable getUsePreviousTemplateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.capabilities"></a>

```java
public java.util.List<java.lang.String> getCapabilities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `changeSetName`<sup>Required</sup> <a name="changeSetName" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetName"></a>

```java
public java.lang.String getChangeSetName();
```

- *Type:* java.lang.String

---

##### `changeSetType`<sup>Required</sup> <a name="changeSetType" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetType"></a>

```java
public java.lang.String getChangeSetType();
```

- *Type:* java.lang.String

---

##### `deploymentMode`<sup>Required</sup> <a name="deploymentMode" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.deploymentMode"></a>

```java
public java.lang.String getDeploymentMode();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `importExistingResources`<sup>Required</sup> <a name="importExistingResources" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.importExistingResources"></a>

```java
public java.lang.Boolean|IResolvable getImportExistingResources();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeNestedStacks`<sup>Required</sup> <a name="includeNestedStacks" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.includeNestedStacks"></a>

```java
public java.lang.Boolean|IResolvable getIncludeNestedStacks();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `notificationArNs`<sup>Required</sup> <a name="notificationArNs" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.notificationArNs"></a>

```java
public java.util.List<java.lang.String> getNotificationArNs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `onStackFailure`<sup>Required</sup> <a name="onStackFailure" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.onStackFailure"></a>

```java
public java.lang.String getOnStackFailure();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.stackName"></a>

```java
public java.lang.String getStackName();
```

- *Type:* java.lang.String

---

##### `templateBody`<sup>Required</sup> <a name="templateBody" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateBody"></a>

```java
public java.lang.String getTemplateBody();
```

- *Type:* java.lang.String

---

##### `templateUrl`<sup>Required</sup> <a name="templateUrl" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateUrl"></a>

```java
public java.lang.String getTemplateUrl();
```

- *Type:* java.lang.String

---

##### `usePreviousTemplate`<sup>Required</sup> <a name="usePreviousTemplate" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.usePreviousTemplate"></a>

```java
public java.lang.Boolean|IResolvable getUsePreviousTemplate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationChangeSetConfig <a name="CloudformationChangeSetConfig" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_change_set.CloudformationChangeSetConfig;

CloudformationChangeSetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .changeSetName(java.lang.String)
    .stackName(java.lang.String)
//  .capabilities(java.util.List<java.lang.String>)
//  .changeSetType(java.lang.String)
//  .deploymentMode(java.lang.String)
//  .description(java.lang.String)
//  .importExistingResources(java.lang.Boolean|IResolvable)
//  .includeNestedStacks(java.lang.Boolean|IResolvable)
//  .notificationArNs(java.util.List<java.lang.String>)
//  .onStackFailure(java.lang.String)
//  .roleArn(java.lang.String)
//  .tags(IResolvable|java.util.List<CloudformationChangeSetTags>)
//  .templateBody(java.lang.String)
//  .templateUrl(java.lang.String)
//  .usePreviousTemplate(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.changeSetName">changeSetName</a></code> | <code>java.lang.String</code> | The name of the change set. Must be unique among all change sets associated with the specified stack. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.stackName">stackName</a></code> | <code>java.lang.String</code> | The name or unique ID of the stack for which you are creating a change set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | The capabilities that are allowed in the stack. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.changeSetType">changeSetType</a></code> | <code>java.lang.String</code> | The type of change set operation. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.deploymentMode">deploymentMode</a></code> | <code>java.lang.String</code> | Determines how CloudFormation handles configuration drift during deployment. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description to help you identify this change set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.importExistingResources">importExistingResources</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates if the change set imports resources that already exist. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.includeNestedStacks">includeNestedStacks</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Creates a change set for all nested stacks specified in the template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.notificationArNs">notificationArNs</a></code> | <code>java.util.List<java.lang.String></code> | The ARNs of Amazon SNS topics that CloudFormation associates with the stack. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.onStackFailure">onStackFailure</a></code> | <code>java.lang.String</code> | Determines what action will be taken if stack creation fails. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The ARN of an IAM role that CloudFormation assumes when executing the change set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>></code> | Key-value pairs to associate with the change set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.templateBody">templateBody</a></code> | <code>java.lang.String</code> | A structure that contains the body of the revised template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.templateUrl">templateUrl</a></code> | <code>java.lang.String</code> | The URL of the file that contains the revised template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.usePreviousTemplate">usePreviousTemplate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to reuse the template associated with the stack to create the change set. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `changeSetName`<sup>Required</sup> <a name="changeSetName" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.changeSetName"></a>

```java
public java.lang.String getChangeSetName();
```

- *Type:* java.lang.String

The name of the change set. Must be unique among all change sets associated with the specified stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#change_set_name CloudformationChangeSet#change_set_name}

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.stackName"></a>

```java
public java.lang.String getStackName();
```

- *Type:* java.lang.String

The name or unique ID of the stack for which you are creating a change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#stack_name CloudformationChangeSet#stack_name}

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.capabilities"></a>

```java
public java.util.List<java.lang.String> getCapabilities();
```

- *Type:* java.util.List<java.lang.String>

The capabilities that are allowed in the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#capabilities CloudformationChangeSet#capabilities}

---

##### `changeSetType`<sup>Optional</sup> <a name="changeSetType" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.changeSetType"></a>

```java
public java.lang.String getChangeSetType();
```

- *Type:* java.lang.String

The type of change set operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#change_set_type CloudformationChangeSet#change_set_type}

---

##### `deploymentMode`<sup>Optional</sup> <a name="deploymentMode" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.deploymentMode"></a>

```java
public java.lang.String getDeploymentMode();
```

- *Type:* java.lang.String

Determines how CloudFormation handles configuration drift during deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#deployment_mode CloudformationChangeSet#deployment_mode}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description to help you identify this change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#description CloudformationChangeSet#description}

---

##### `importExistingResources`<sup>Optional</sup> <a name="importExistingResources" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.importExistingResources"></a>

```java
public java.lang.Boolean|IResolvable getImportExistingResources();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates if the change set imports resources that already exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#import_existing_resources CloudformationChangeSet#import_existing_resources}

---

##### `includeNestedStacks`<sup>Optional</sup> <a name="includeNestedStacks" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.includeNestedStacks"></a>

```java
public java.lang.Boolean|IResolvable getIncludeNestedStacks();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Creates a change set for all nested stacks specified in the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#include_nested_stacks CloudformationChangeSet#include_nested_stacks}

---

##### `notificationArNs`<sup>Optional</sup> <a name="notificationArNs" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.notificationArNs"></a>

```java
public java.util.List<java.lang.String> getNotificationArNs();
```

- *Type:* java.util.List<java.lang.String>

The ARNs of Amazon SNS topics that CloudFormation associates with the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#notification_ar_ns CloudformationChangeSet#notification_ar_ns}

---

##### `onStackFailure`<sup>Optional</sup> <a name="onStackFailure" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.onStackFailure"></a>

```java
public java.lang.String getOnStackFailure();
```

- *Type:* java.lang.String

Determines what action will be taken if stack creation fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#on_stack_failure CloudformationChangeSet#on_stack_failure}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The ARN of an IAM role that CloudFormation assumes when executing the change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#role_arn CloudformationChangeSet#role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.tags"></a>

```java
public IResolvable|java.util.List<CloudformationChangeSetTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>>

Key-value pairs to associate with the change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#tags CloudformationChangeSet#tags}

---

##### `templateBody`<sup>Optional</sup> <a name="templateBody" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.templateBody"></a>

```java
public java.lang.String getTemplateBody();
```

- *Type:* java.lang.String

A structure that contains the body of the revised template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#template_body CloudformationChangeSet#template_body}

---

##### `templateUrl`<sup>Optional</sup> <a name="templateUrl" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.templateUrl"></a>

```java
public java.lang.String getTemplateUrl();
```

- *Type:* java.lang.String

The URL of the file that contains the revised template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#template_url CloudformationChangeSet#template_url}

---

##### `usePreviousTemplate`<sup>Optional</sup> <a name="usePreviousTemplate" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.usePreviousTemplate"></a>

```java
public java.lang.Boolean|IResolvable getUsePreviousTemplate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to reuse the template associated with the stack to create the change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#use_previous_template CloudformationChangeSet#use_previous_template}

---

### CloudformationChangeSetTags <a name="CloudformationChangeSetTags" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_change_set.CloudformationChangeSetTags;

CloudformationChangeSetTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#key CloudformationChangeSet#key}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#value CloudformationChangeSet#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#key CloudformationChangeSet#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#value CloudformationChangeSet#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationChangeSetTagsList <a name="CloudformationChangeSetTagsList" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_change_set.CloudformationChangeSetTagsList;

new CloudformationChangeSetTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.get"></a>

```java
public CloudformationChangeSetTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudformationChangeSetTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>>

---


### CloudformationChangeSetTagsOutputReference <a name="CloudformationChangeSetTagsOutputReference" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_change_set.CloudformationChangeSetTagsOutputReference;

new CloudformationChangeSetTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudformationChangeSetTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>

---



