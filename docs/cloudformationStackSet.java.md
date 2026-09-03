# `cloudformationStackSet` Submodule <a name="`cloudformationStackSet` Submodule" id="@cdktn/provider-awscc.cloudformationStackSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationStackSet <a name="CloudformationStackSet" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set awscc_cloudformation_stack_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_stack_set.CloudformationStackSet;

CloudformationStackSet.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .permissionModel(java.lang.String)
    .stackSetName(java.lang.String)
//  .administrationRoleArn(java.lang.String)
//  .autoDeployment(CloudformationStackSetAutoDeployment)
//  .callAs(java.lang.String)
//  .capabilities(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .executionRoleName(java.lang.String)
//  .managedExecution(CloudformationStackSetManagedExecution)
//  .operationPreferences(CloudformationStackSetOperationPreferences)
//  .parameters(IResolvable|java.util.List<CloudformationStackSetParameters>)
//  .stackInstancesGroup(IResolvable|java.util.List<CloudformationStackSetStackInstancesGroup>)
//  .tags(IResolvable|java.util.List<CloudformationStackSetTags>)
//  .templateBody(java.lang.String)
//  .templateUrl(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.permissionModel">permissionModel</a></code> | <code>java.lang.String</code> | Describes how the IAM roles required for stack set operations are created. By default, SELF-MANAGED is specified. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.stackSetName">stackSetName</a></code> | <code>java.lang.String</code> | The name to associate with the stack set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.administrationRoleArn">administrationRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Number (ARN) of the IAM role to use to create this stack set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.autoDeployment">autoDeployment</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a></code> | Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to the target organization or organizational unit (OU). |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.callAs">callAs</a></code> | <code>java.lang.String</code> | Specifies the AWS account that you are acting from. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | In some cases, you must explicitly acknowledge that your stack set template contains certain capabilities in order for AWS CloudFormation to create the stack set and related stack instances. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the stack set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.executionRoleName">executionRoleName</a></code> | <code>java.lang.String</code> | The name of the IAM execution role to use to create the stack set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.managedExecution">managedExecution</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecution">CloudformationStackSetManagedExecution</a></code> | Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.operationPreferences">operationPreferences</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a></code> | The user-specified preferences for how AWS CloudFormation performs a stack set operation. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.parameters">parameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters">CloudformationStackSetParameters</a>></code> | The input parameters for the stack set template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.stackInstancesGroup">stackInstancesGroup</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup">CloudformationStackSetStackInstancesGroup</a>></code> | A group of stack instances with parameters in some specific accounts and regions. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags">CloudformationStackSetTags</a>></code> | The key-value pairs to associate with this stack set and the stacks created from it. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.templateBody">templateBody</a></code> | <code>java.lang.String</code> | The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.templateUrl">templateUrl</a></code> | <code>java.lang.String</code> | Location of file containing the template body. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `permissionModel`<sup>Required</sup> <a name="permissionModel" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.permissionModel"></a>

- *Type:* java.lang.String

Describes how the IAM roles required for stack set operations are created. By default, SELF-MANAGED is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#permission_model CloudformationStackSet#permission_model}

---

##### `stackSetName`<sup>Required</sup> <a name="stackSetName" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.stackSetName"></a>

- *Type:* java.lang.String

The name to associate with the stack set.

The name must be unique in the Region where you create your stack set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#stack_set_name CloudformationStackSet#stack_set_name}

---

##### `administrationRoleArn`<sup>Optional</sup> <a name="administrationRoleArn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.administrationRoleArn"></a>

- *Type:* java.lang.String

The Amazon Resource Number (ARN) of the IAM role to use to create this stack set.

Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#administration_role_arn CloudformationStackSet#administration_role_arn}

---

##### `autoDeployment`<sup>Optional</sup> <a name="autoDeployment" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.autoDeployment"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a>

Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to the target organization or organizational unit (OU).

Specify only if PermissionModel is SERVICE_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#auto_deployment CloudformationStackSet#auto_deployment}

---

##### `callAs`<sup>Optional</sup> <a name="callAs" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.callAs"></a>

- *Type:* java.lang.String

Specifies the AWS account that you are acting from.

By default, SELF is specified. For self-managed permissions, specify SELF; for service-managed permissions, if you are signed in to the organization's management account, specify SELF. If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#call_as CloudformationStackSet#call_as}

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.capabilities"></a>

- *Type:* java.util.List<java.lang.String>

In some cases, you must explicitly acknowledge that your stack set template contains certain capabilities in order for AWS CloudFormation to create the stack set and related stack instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#capabilities CloudformationStackSet#capabilities}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the stack set.

You can use the description to identify the stack set's purpose or other important information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#description CloudformationStackSet#description}

---

##### `executionRoleName`<sup>Optional</sup> <a name="executionRoleName" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.executionRoleName"></a>

- *Type:* java.lang.String

The name of the IAM execution role to use to create the stack set.

If you do not specify an execution role, AWS CloudFormation uses the AWSCloudFormationStackSetExecutionRole role for the stack set operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#execution_role_name CloudformationStackSet#execution_role_name}

---

##### `managedExecution`<sup>Optional</sup> <a name="managedExecution" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.managedExecution"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecution">CloudformationStackSetManagedExecution</a>

Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#managed_execution CloudformationStackSet#managed_execution}

---

##### `operationPreferences`<sup>Optional</sup> <a name="operationPreferences" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.operationPreferences"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a>

The user-specified preferences for how AWS CloudFormation performs a stack set operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#operation_preferences CloudformationStackSet#operation_preferences}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.parameters"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters">CloudformationStackSetParameters</a>>

The input parameters for the stack set template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#parameters CloudformationStackSet#parameters}

---

##### `stackInstancesGroup`<sup>Optional</sup> <a name="stackInstancesGroup" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.stackInstancesGroup"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup">CloudformationStackSetStackInstancesGroup</a>>

A group of stack instances with parameters in some specific accounts and regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#stack_instances_group CloudformationStackSet#stack_instances_group}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags">CloudformationStackSetTags</a>>

The key-value pairs to associate with this stack set and the stacks created from it.

AWS CloudFormation also propagates these tags to supported resources that are created in the stacks. A maximum number of 50 tags can be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#tags CloudformationStackSet#tags}

---

##### `templateBody`<sup>Optional</sup> <a name="templateBody" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.templateBody"></a>

- *Type:* java.lang.String

The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#template_body CloudformationStackSet#template_body}

---

##### `templateUrl`<sup>Optional</sup> <a name="templateUrl" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.templateUrl"></a>

- *Type:* java.lang.String

Location of file containing the template body.

The URL must point to a template (max size: 460,800 bytes) that is located in an Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#template_url CloudformationStackSet#template_url}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putAutoDeployment">putAutoDeployment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putManagedExecution">putManagedExecution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putOperationPreferences">putOperationPreferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putStackInstancesGroup">putStackInstancesGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetAdministrationRoleArn">resetAdministrationRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetAutoDeployment">resetAutoDeployment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetCallAs">resetCallAs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetCapabilities">resetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetExecutionRoleName">resetExecutionRoleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetManagedExecution">resetManagedExecution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetOperationPreferences">resetOperationPreferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetStackInstancesGroup">resetStackInstancesGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetTemplateBody">resetTemplateBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetTemplateUrl">resetTemplateUrl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoDeployment` <a name="putAutoDeployment" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putAutoDeployment"></a>

```java
public void putAutoDeployment(CloudformationStackSetAutoDeployment value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putAutoDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a>

---

##### `putManagedExecution` <a name="putManagedExecution" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putManagedExecution"></a>

```java
public void putManagedExecution(CloudformationStackSetManagedExecution value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putManagedExecution.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecution">CloudformationStackSetManagedExecution</a>

---

##### `putOperationPreferences` <a name="putOperationPreferences" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putOperationPreferences"></a>

```java
public void putOperationPreferences(CloudformationStackSetOperationPreferences value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putOperationPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a>

---

##### `putParameters` <a name="putParameters" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putParameters"></a>

```java
public void putParameters(IResolvable|java.util.List<CloudformationStackSetParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters">CloudformationStackSetParameters</a>>

---

##### `putStackInstancesGroup` <a name="putStackInstancesGroup" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putStackInstancesGroup"></a>

```java
public void putStackInstancesGroup(IResolvable|java.util.List<CloudformationStackSetStackInstancesGroup> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putStackInstancesGroup.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup">CloudformationStackSetStackInstancesGroup</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CloudformationStackSetTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags">CloudformationStackSetTags</a>>

---

##### `resetAdministrationRoleArn` <a name="resetAdministrationRoleArn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetAdministrationRoleArn"></a>

```java
public void resetAdministrationRoleArn()
```

##### `resetAutoDeployment` <a name="resetAutoDeployment" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetAutoDeployment"></a>

```java
public void resetAutoDeployment()
```

##### `resetCallAs` <a name="resetCallAs" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetCallAs"></a>

```java
public void resetCallAs()
```

##### `resetCapabilities` <a name="resetCapabilities" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetCapabilities"></a>

```java
public void resetCapabilities()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExecutionRoleName` <a name="resetExecutionRoleName" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetExecutionRoleName"></a>

```java
public void resetExecutionRoleName()
```

##### `resetManagedExecution` <a name="resetManagedExecution" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetManagedExecution"></a>

```java
public void resetManagedExecution()
```

##### `resetOperationPreferences` <a name="resetOperationPreferences" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetOperationPreferences"></a>

```java
public void resetOperationPreferences()
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetStackInstancesGroup` <a name="resetStackInstancesGroup" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetStackInstancesGroup"></a>

```java
public void resetStackInstancesGroup()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetTags"></a>

```java
public void resetTags()
```

##### `resetTemplateBody` <a name="resetTemplateBody" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetTemplateBody"></a>

```java
public void resetTemplateBody()
```

##### `resetTemplateUrl` <a name="resetTemplateUrl" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetTemplateUrl"></a>

```java
public void resetTemplateUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudformationStackSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cloudformation_stack_set.CloudformationStackSet;

CloudformationStackSet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cloudformation_stack_set.CloudformationStackSet;

CloudformationStackSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cloudformation_stack_set.CloudformationStackSet;

CloudformationStackSet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cloudformation_stack_set.CloudformationStackSet;

CloudformationStackSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudformationStackSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudformationStackSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudformationStackSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudformationStackSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationStackSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.autoDeployment">autoDeployment</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference">CloudformationStackSetAutoDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.managedExecution">managedExecution</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference">CloudformationStackSetManagedExecutionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.operationPreferences">operationPreferences</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference">CloudformationStackSetOperationPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList">CloudformationStackSetParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.stackInstancesGroup">stackInstancesGroup</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList">CloudformationStackSetStackInstancesGroupList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.stackSetId">stackSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList">CloudformationStackSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.administrationRoleArnInput">administrationRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.autoDeploymentInput">autoDeploymentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.callAsInput">callAsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.capabilitiesInput">capabilitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.executionRoleNameInput">executionRoleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.managedExecutionInput">managedExecutionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecution">CloudformationStackSetManagedExecution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.operationPreferencesInput">operationPreferencesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.parametersInput">parametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters">CloudformationStackSetParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.permissionModelInput">permissionModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.stackInstancesGroupInput">stackInstancesGroupInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup">CloudformationStackSetStackInstancesGroup</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.stackSetNameInput">stackSetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags">CloudformationStackSetTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.templateBodyInput">templateBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.templateUrlInput">templateUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.administrationRoleArn">administrationRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.callAs">callAs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.executionRoleName">executionRoleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.permissionModel">permissionModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.stackSetName">stackSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.templateBody">templateBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.templateUrl">templateUrl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoDeployment`<sup>Required</sup> <a name="autoDeployment" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.autoDeployment"></a>

```java
public CloudformationStackSetAutoDeploymentOutputReference getAutoDeployment();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference">CloudformationStackSetAutoDeploymentOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedExecution`<sup>Required</sup> <a name="managedExecution" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.managedExecution"></a>

```java
public CloudformationStackSetManagedExecutionOutputReference getManagedExecution();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference">CloudformationStackSetManagedExecutionOutputReference</a>

---

##### `operationPreferences`<sup>Required</sup> <a name="operationPreferences" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.operationPreferences"></a>

```java
public CloudformationStackSetOperationPreferencesOutputReference getOperationPreferences();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference">CloudformationStackSetOperationPreferencesOutputReference</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.parameters"></a>

```java
public CloudformationStackSetParametersList getParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList">CloudformationStackSetParametersList</a>

---

##### `stackInstancesGroup`<sup>Required</sup> <a name="stackInstancesGroup" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.stackInstancesGroup"></a>

```java
public CloudformationStackSetStackInstancesGroupList getStackInstancesGroup();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList">CloudformationStackSetStackInstancesGroupList</a>

---

##### `stackSetId`<sup>Required</sup> <a name="stackSetId" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.stackSetId"></a>

```java
public java.lang.String getStackSetId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.tags"></a>

```java
public CloudformationStackSetTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList">CloudformationStackSetTagsList</a>

---

##### `administrationRoleArnInput`<sup>Optional</sup> <a name="administrationRoleArnInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.administrationRoleArnInput"></a>

```java
public java.lang.String getAdministrationRoleArnInput();
```

- *Type:* java.lang.String

---

##### `autoDeploymentInput`<sup>Optional</sup> <a name="autoDeploymentInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.autoDeploymentInput"></a>

```java
public IResolvable|CloudformationStackSetAutoDeployment getAutoDeploymentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a>

---

##### `callAsInput`<sup>Optional</sup> <a name="callAsInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.callAsInput"></a>

```java
public java.lang.String getCallAsInput();
```

- *Type:* java.lang.String

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.capabilitiesInput"></a>

```java
public java.util.List<java.lang.String> getCapabilitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `executionRoleNameInput`<sup>Optional</sup> <a name="executionRoleNameInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.executionRoleNameInput"></a>

```java
public java.lang.String getExecutionRoleNameInput();
```

- *Type:* java.lang.String

---

##### `managedExecutionInput`<sup>Optional</sup> <a name="managedExecutionInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.managedExecutionInput"></a>

```java
public IResolvable|CloudformationStackSetManagedExecution getManagedExecutionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecution">CloudformationStackSetManagedExecution</a>

---

##### `operationPreferencesInput`<sup>Optional</sup> <a name="operationPreferencesInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.operationPreferencesInput"></a>

```java
public IResolvable|CloudformationStackSetOperationPreferences getOperationPreferencesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a>

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.parametersInput"></a>

```java
public IResolvable|java.util.List<CloudformationStackSetParameters> getParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters">CloudformationStackSetParameters</a>>

---

##### `permissionModelInput`<sup>Optional</sup> <a name="permissionModelInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.permissionModelInput"></a>

```java
public java.lang.String getPermissionModelInput();
```

- *Type:* java.lang.String

---

##### `stackInstancesGroupInput`<sup>Optional</sup> <a name="stackInstancesGroupInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.stackInstancesGroupInput"></a>

```java
public IResolvable|java.util.List<CloudformationStackSetStackInstancesGroup> getStackInstancesGroupInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup">CloudformationStackSetStackInstancesGroup</a>>

---

##### `stackSetNameInput`<sup>Optional</sup> <a name="stackSetNameInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.stackSetNameInput"></a>

```java
public java.lang.String getStackSetNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CloudformationStackSetTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags">CloudformationStackSetTags</a>>

---

##### `templateBodyInput`<sup>Optional</sup> <a name="templateBodyInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.templateBodyInput"></a>

```java
public java.lang.String getTemplateBodyInput();
```

- *Type:* java.lang.String

---

##### `templateUrlInput`<sup>Optional</sup> <a name="templateUrlInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.templateUrlInput"></a>

```java
public java.lang.String getTemplateUrlInput();
```

- *Type:* java.lang.String

---

##### `administrationRoleArn`<sup>Required</sup> <a name="administrationRoleArn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.administrationRoleArn"></a>

```java
public java.lang.String getAdministrationRoleArn();
```

- *Type:* java.lang.String

---

##### `callAs`<sup>Required</sup> <a name="callAs" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.callAs"></a>

```java
public java.lang.String getCallAs();
```

- *Type:* java.lang.String

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.capabilities"></a>

```java
public java.util.List<java.lang.String> getCapabilities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `executionRoleName`<sup>Required</sup> <a name="executionRoleName" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.executionRoleName"></a>

```java
public java.lang.String getExecutionRoleName();
```

- *Type:* java.lang.String

---

##### `permissionModel`<sup>Required</sup> <a name="permissionModel" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.permissionModel"></a>

```java
public java.lang.String getPermissionModel();
```

- *Type:* java.lang.String

---

##### `stackSetName`<sup>Required</sup> <a name="stackSetName" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.stackSetName"></a>

```java
public java.lang.String getStackSetName();
```

- *Type:* java.lang.String

---

##### `templateBody`<sup>Required</sup> <a name="templateBody" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.templateBody"></a>

```java
public java.lang.String getTemplateBody();
```

- *Type:* java.lang.String

---

##### `templateUrl`<sup>Required</sup> <a name="templateUrl" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.templateUrl"></a>

```java
public java.lang.String getTemplateUrl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationStackSetAutoDeployment <a name="CloudformationStackSetAutoDeployment" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_stack_set.CloudformationStackSetAutoDeployment;

CloudformationStackSetAutoDeployment.builder()
//  .dependsOn(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean|IResolvable)
//  .retainStacksOnAccountRemoval(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | A list of StackSet ARNs that this StackSet depends on for auto-deployment operations. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to true, StackSets automatically deploys additional stack instances to AWS Organizations accounts that are added to a target organization or organizational unit (OU) in the specified Regions. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment.property.retainStacksOnAccountRemoval">retainStacksOnAccountRemoval</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to true, stack resources are retained when an account is removed from a target organization or OU. |

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

A list of StackSet ARNs that this StackSet depends on for auto-deployment operations.

When auto-deployment is triggered, operations will be sequenced to ensure all dependencies complete successfully before this StackSet's operation begins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#depends_on CloudformationStackSet#depends_on}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to true, StackSets automatically deploys additional stack instances to AWS Organizations accounts that are added to a target organization or organizational unit (OU) in the specified Regions.

If an account is removed from a target organization or OU, StackSets deletes stack instances from the account in the specified Regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#enabled CloudformationStackSet#enabled}

---

##### `retainStacksOnAccountRemoval`<sup>Optional</sup> <a name="retainStacksOnAccountRemoval" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment.property.retainStacksOnAccountRemoval"></a>

```java
public java.lang.Boolean|IResolvable getRetainStacksOnAccountRemoval();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to true, stack resources are retained when an account is removed from a target organization or OU.

If set to false, stack resources are deleted. Specify only if Enabled is set to True.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#retain_stacks_on_account_removal CloudformationStackSet#retain_stacks_on_account_removal}

---

### CloudformationStackSetConfig <a name="CloudformationStackSetConfig" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_stack_set.CloudformationStackSetConfig;

CloudformationStackSetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .permissionModel(java.lang.String)
    .stackSetName(java.lang.String)
//  .administrationRoleArn(java.lang.String)
//  .autoDeployment(CloudformationStackSetAutoDeployment)
//  .callAs(java.lang.String)
//  .capabilities(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .executionRoleName(java.lang.String)
//  .managedExecution(CloudformationStackSetManagedExecution)
//  .operationPreferences(CloudformationStackSetOperationPreferences)
//  .parameters(IResolvable|java.util.List<CloudformationStackSetParameters>)
//  .stackInstancesGroup(IResolvable|java.util.List<CloudformationStackSetStackInstancesGroup>)
//  .tags(IResolvable|java.util.List<CloudformationStackSetTags>)
//  .templateBody(java.lang.String)
//  .templateUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.permissionModel">permissionModel</a></code> | <code>java.lang.String</code> | Describes how the IAM roles required for stack set operations are created. By default, SELF-MANAGED is specified. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.stackSetName">stackSetName</a></code> | <code>java.lang.String</code> | The name to associate with the stack set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.administrationRoleArn">administrationRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Number (ARN) of the IAM role to use to create this stack set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.autoDeployment">autoDeployment</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a></code> | Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to the target organization or organizational unit (OU). |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.callAs">callAs</a></code> | <code>java.lang.String</code> | Specifies the AWS account that you are acting from. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | In some cases, you must explicitly acknowledge that your stack set template contains certain capabilities in order for AWS CloudFormation to create the stack set and related stack instances. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the stack set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.executionRoleName">executionRoleName</a></code> | <code>java.lang.String</code> | The name of the IAM execution role to use to create the stack set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.managedExecution">managedExecution</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecution">CloudformationStackSetManagedExecution</a></code> | Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.operationPreferences">operationPreferences</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a></code> | The user-specified preferences for how AWS CloudFormation performs a stack set operation. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.parameters">parameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters">CloudformationStackSetParameters</a>></code> | The input parameters for the stack set template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.stackInstancesGroup">stackInstancesGroup</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup">CloudformationStackSetStackInstancesGroup</a>></code> | A group of stack instances with parameters in some specific accounts and regions. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags">CloudformationStackSetTags</a>></code> | The key-value pairs to associate with this stack set and the stacks created from it. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.templateBody">templateBody</a></code> | <code>java.lang.String</code> | The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.templateUrl">templateUrl</a></code> | <code>java.lang.String</code> | Location of file containing the template body. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `permissionModel`<sup>Required</sup> <a name="permissionModel" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.permissionModel"></a>

```java
public java.lang.String getPermissionModel();
```

- *Type:* java.lang.String

Describes how the IAM roles required for stack set operations are created. By default, SELF-MANAGED is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#permission_model CloudformationStackSet#permission_model}

---

##### `stackSetName`<sup>Required</sup> <a name="stackSetName" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.stackSetName"></a>

```java
public java.lang.String getStackSetName();
```

- *Type:* java.lang.String

The name to associate with the stack set.

The name must be unique in the Region where you create your stack set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#stack_set_name CloudformationStackSet#stack_set_name}

---

##### `administrationRoleArn`<sup>Optional</sup> <a name="administrationRoleArn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.administrationRoleArn"></a>

```java
public java.lang.String getAdministrationRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Number (ARN) of the IAM role to use to create this stack set.

Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#administration_role_arn CloudformationStackSet#administration_role_arn}

---

##### `autoDeployment`<sup>Optional</sup> <a name="autoDeployment" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.autoDeployment"></a>

```java
public CloudformationStackSetAutoDeployment getAutoDeployment();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a>

Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to the target organization or organizational unit (OU).

Specify only if PermissionModel is SERVICE_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#auto_deployment CloudformationStackSet#auto_deployment}

---

##### `callAs`<sup>Optional</sup> <a name="callAs" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.callAs"></a>

```java
public java.lang.String getCallAs();
```

- *Type:* java.lang.String

Specifies the AWS account that you are acting from.

By default, SELF is specified. For self-managed permissions, specify SELF; for service-managed permissions, if you are signed in to the organization's management account, specify SELF. If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#call_as CloudformationStackSet#call_as}

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.capabilities"></a>

```java
public java.util.List<java.lang.String> getCapabilities();
```

- *Type:* java.util.List<java.lang.String>

In some cases, you must explicitly acknowledge that your stack set template contains certain capabilities in order for AWS CloudFormation to create the stack set and related stack instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#capabilities CloudformationStackSet#capabilities}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the stack set.

You can use the description to identify the stack set's purpose or other important information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#description CloudformationStackSet#description}

---

##### `executionRoleName`<sup>Optional</sup> <a name="executionRoleName" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.executionRoleName"></a>

```java
public java.lang.String getExecutionRoleName();
```

- *Type:* java.lang.String

The name of the IAM execution role to use to create the stack set.

If you do not specify an execution role, AWS CloudFormation uses the AWSCloudFormationStackSetExecutionRole role for the stack set operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#execution_role_name CloudformationStackSet#execution_role_name}

---

##### `managedExecution`<sup>Optional</sup> <a name="managedExecution" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.managedExecution"></a>

```java
public CloudformationStackSetManagedExecution getManagedExecution();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecution">CloudformationStackSetManagedExecution</a>

Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#managed_execution CloudformationStackSet#managed_execution}

---

##### `operationPreferences`<sup>Optional</sup> <a name="operationPreferences" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.operationPreferences"></a>

```java
public CloudformationStackSetOperationPreferences getOperationPreferences();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a>

The user-specified preferences for how AWS CloudFormation performs a stack set operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#operation_preferences CloudformationStackSet#operation_preferences}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.parameters"></a>

```java
public IResolvable|java.util.List<CloudformationStackSetParameters> getParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters">CloudformationStackSetParameters</a>>

The input parameters for the stack set template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#parameters CloudformationStackSet#parameters}

---

##### `stackInstancesGroup`<sup>Optional</sup> <a name="stackInstancesGroup" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.stackInstancesGroup"></a>

```java
public IResolvable|java.util.List<CloudformationStackSetStackInstancesGroup> getStackInstancesGroup();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup">CloudformationStackSetStackInstancesGroup</a>>

A group of stack instances with parameters in some specific accounts and regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#stack_instances_group CloudformationStackSet#stack_instances_group}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.tags"></a>

```java
public IResolvable|java.util.List<CloudformationStackSetTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags">CloudformationStackSetTags</a>>

The key-value pairs to associate with this stack set and the stacks created from it.

AWS CloudFormation also propagates these tags to supported resources that are created in the stacks. A maximum number of 50 tags can be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#tags CloudformationStackSet#tags}

---

##### `templateBody`<sup>Optional</sup> <a name="templateBody" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.templateBody"></a>

```java
public java.lang.String getTemplateBody();
```

- *Type:* java.lang.String

The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#template_body CloudformationStackSet#template_body}

---

##### `templateUrl`<sup>Optional</sup> <a name="templateUrl" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.templateUrl"></a>

```java
public java.lang.String getTemplateUrl();
```

- *Type:* java.lang.String

Location of file containing the template body.

The URL must point to a template (max size: 460,800 bytes) that is located in an Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#template_url CloudformationStackSet#template_url}

---

### CloudformationStackSetManagedExecution <a name="CloudformationStackSetManagedExecution" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecution.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_stack_set.CloudformationStackSetManagedExecution;

CloudformationStackSetManagedExecution.builder()
//  .active(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecution.property.active">active</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, StackSets performs non-conflicting operations concurrently and queues conflicting operations. |

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecution.property.active"></a>

```java
public java.lang.Boolean|IResolvable getActive();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, StackSets performs non-conflicting operations concurrently and queues conflicting operations.

After conflicting operations finish, StackSets starts queued operations in request order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#active CloudformationStackSet#active}

---

### CloudformationStackSetOperationPreferences <a name="CloudformationStackSetOperationPreferences" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_stack_set.CloudformationStackSetOperationPreferences;

CloudformationStackSetOperationPreferences.builder()
//  .concurrencyMode(java.lang.String)
//  .failureToleranceCount(java.lang.Number)
//  .failureTolerancePercentage(java.lang.Number)
//  .maxConcurrentCount(java.lang.Number)
//  .maxConcurrentPercentage(java.lang.Number)
//  .regionConcurrencyType(java.lang.String)
//  .regionOrder(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.concurrencyMode">concurrencyMode</a></code> | <code>java.lang.String</code> | Specifies how the concurrency level behaves during the operation execution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.failureToleranceCount">failureToleranceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#failure_tolerance_count CloudformationStackSet#failure_tolerance_count}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.failureTolerancePercentage">failureTolerancePercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#failure_tolerance_percentage CloudformationStackSet#failure_tolerance_percentage}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.maxConcurrentCount">maxConcurrentCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#max_concurrent_count CloudformationStackSet#max_concurrent_count}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.maxConcurrentPercentage">maxConcurrentPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#max_concurrent_percentage CloudformationStackSet#max_concurrent_percentage}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.regionConcurrencyType">regionConcurrencyType</a></code> | <code>java.lang.String</code> | The concurrency type of deploying StackSets operations in regions, could be in parallel or one region at a time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.regionOrder">regionOrder</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#region_order CloudformationStackSet#region_order}. |

---

##### `concurrencyMode`<sup>Optional</sup> <a name="concurrencyMode" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.concurrencyMode"></a>

```java
public java.lang.String getConcurrencyMode();
```

- *Type:* java.lang.String

Specifies how the concurrency level behaves during the operation execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#concurrency_mode CloudformationStackSet#concurrency_mode}

---

##### `failureToleranceCount`<sup>Optional</sup> <a name="failureToleranceCount" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.failureToleranceCount"></a>

```java
public java.lang.Number getFailureToleranceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#failure_tolerance_count CloudformationStackSet#failure_tolerance_count}.

---

##### `failureTolerancePercentage`<sup>Optional</sup> <a name="failureTolerancePercentage" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.failureTolerancePercentage"></a>

```java
public java.lang.Number getFailureTolerancePercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#failure_tolerance_percentage CloudformationStackSet#failure_tolerance_percentage}.

---

##### `maxConcurrentCount`<sup>Optional</sup> <a name="maxConcurrentCount" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.maxConcurrentCount"></a>

```java
public java.lang.Number getMaxConcurrentCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#max_concurrent_count CloudformationStackSet#max_concurrent_count}.

---

##### `maxConcurrentPercentage`<sup>Optional</sup> <a name="maxConcurrentPercentage" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.maxConcurrentPercentage"></a>

```java
public java.lang.Number getMaxConcurrentPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#max_concurrent_percentage CloudformationStackSet#max_concurrent_percentage}.

---

##### `regionConcurrencyType`<sup>Optional</sup> <a name="regionConcurrencyType" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.regionConcurrencyType"></a>

```java
public java.lang.String getRegionConcurrencyType();
```

- *Type:* java.lang.String

The concurrency type of deploying StackSets operations in regions, could be in parallel or one region at a time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#region_concurrency_type CloudformationStackSet#region_concurrency_type}

---

##### `regionOrder`<sup>Optional</sup> <a name="regionOrder" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.regionOrder"></a>

```java
public java.util.List<java.lang.String> getRegionOrder();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#region_order CloudformationStackSet#region_order}.

---

### CloudformationStackSetParameters <a name="CloudformationStackSetParameters" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_stack_set.CloudformationStackSetParameters;

CloudformationStackSetParameters.builder()
//  .parameterKey(java.lang.String)
//  .parameterValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters.property.parameterKey">parameterKey</a></code> | <code>java.lang.String</code> | The key associated with the parameter. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters.property.parameterValue">parameterValue</a></code> | <code>java.lang.String</code> | The input value associated with the parameter. |

---

##### `parameterKey`<sup>Optional</sup> <a name="parameterKey" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters.property.parameterKey"></a>

```java
public java.lang.String getParameterKey();
```

- *Type:* java.lang.String

The key associated with the parameter.

If you don't specify a key and value for a particular parameter, AWS CloudFormation uses the default value that is specified in your template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#parameter_key CloudformationStackSet#parameter_key}

---

##### `parameterValue`<sup>Optional</sup> <a name="parameterValue" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters.property.parameterValue"></a>

```java
public java.lang.String getParameterValue();
```

- *Type:* java.lang.String

The input value associated with the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#parameter_value CloudformationStackSet#parameter_value}

---

### CloudformationStackSetStackInstancesGroup <a name="CloudformationStackSetStackInstancesGroup" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_stack_set.CloudformationStackSetStackInstancesGroup;

CloudformationStackSetStackInstancesGroup.builder()
//  .deploymentTargets(CloudformationStackSetStackInstancesGroupDeploymentTargets)
//  .parameterOverrides(IResolvable|java.util.List<CloudformationStackSetStackInstancesGroupParameterOverrides>)
//  .regions(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup.property.deploymentTargets">deploymentTargets</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets">CloudformationStackSetStackInstancesGroupDeploymentTargets</a></code> | The AWS OrganizationalUnitIds or Accounts for which to create stack instances in the specified Regions. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup.property.parameterOverrides">parameterOverrides</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverrides">CloudformationStackSetStackInstancesGroupParameterOverrides</a>></code> | A list of stack set parameters whose values you want to override in the selected stack instances. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | The names of one or more Regions where you want to create stack instances using the specified AWS account(s). |

---

##### `deploymentTargets`<sup>Optional</sup> <a name="deploymentTargets" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup.property.deploymentTargets"></a>

```java
public CloudformationStackSetStackInstancesGroupDeploymentTargets getDeploymentTargets();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets">CloudformationStackSetStackInstancesGroupDeploymentTargets</a>

The AWS OrganizationalUnitIds or Accounts for which to create stack instances in the specified Regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#deployment_targets CloudformationStackSet#deployment_targets}

---

##### `parameterOverrides`<sup>Optional</sup> <a name="parameterOverrides" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup.property.parameterOverrides"></a>

```java
public IResolvable|java.util.List<CloudformationStackSetStackInstancesGroupParameterOverrides> getParameterOverrides();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverrides">CloudformationStackSetStackInstancesGroupParameterOverrides</a>>

A list of stack set parameters whose values you want to override in the selected stack instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#parameter_overrides CloudformationStackSet#parameter_overrides}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

The names of one or more Regions where you want to create stack instances using the specified AWS account(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#regions CloudformationStackSet#regions}

---

### CloudformationStackSetStackInstancesGroupDeploymentTargets <a name="CloudformationStackSetStackInstancesGroupDeploymentTargets" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_stack_set.CloudformationStackSetStackInstancesGroupDeploymentTargets;

CloudformationStackSetStackInstancesGroupDeploymentTargets.builder()
//  .accountFilterType(java.lang.String)
//  .accounts(java.util.List<java.lang.String>)
//  .accountsUrl(java.lang.String)
//  .organizationalUnitIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets.property.accountFilterType">accountFilterType</a></code> | <code>java.lang.String</code> | The filter type you want to apply on organizational units and accounts. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets.property.accounts">accounts</a></code> | <code>java.util.List<java.lang.String></code> | AWS accounts that you want to create stack instances in the specified Region(s) for. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets.property.accountsUrl">accountsUrl</a></code> | <code>java.lang.String</code> | Returns the value of the AccountsUrl property. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets.property.organizationalUnitIds">organizationalUnitIds</a></code> | <code>java.util.List<java.lang.String></code> | The organization root ID or organizational unit (OU) IDs to which StackSets deploys. |

---

##### `accountFilterType`<sup>Optional</sup> <a name="accountFilterType" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets.property.accountFilterType"></a>

```java
public java.lang.String getAccountFilterType();
```

- *Type:* java.lang.String

The filter type you want to apply on organizational units and accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#account_filter_type CloudformationStackSet#account_filter_type}

---

##### `accounts`<sup>Optional</sup> <a name="accounts" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets.property.accounts"></a>

```java
public java.util.List<java.lang.String> getAccounts();
```

- *Type:* java.util.List<java.lang.String>

AWS accounts that you want to create stack instances in the specified Region(s) for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#accounts CloudformationStackSet#accounts}

---

##### `accountsUrl`<sup>Optional</sup> <a name="accountsUrl" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets.property.accountsUrl"></a>

```java
public java.lang.String getAccountsUrl();
```

- *Type:* java.lang.String

Returns the value of the AccountsUrl property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#accounts_url CloudformationStackSet#accounts_url}

---

##### `organizationalUnitIds`<sup>Optional</sup> <a name="organizationalUnitIds" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets.property.organizationalUnitIds"></a>

```java
public java.util.List<java.lang.String> getOrganizationalUnitIds();
```

- *Type:* java.util.List<java.lang.String>

The organization root ID or organizational unit (OU) IDs to which StackSets deploys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#organizational_unit_ids CloudformationStackSet#organizational_unit_ids}

---

### CloudformationStackSetStackInstancesGroupParameterOverrides <a name="CloudformationStackSetStackInstancesGroupParameterOverrides" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverrides.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_stack_set.CloudformationStackSetStackInstancesGroupParameterOverrides;

CloudformationStackSetStackInstancesGroupParameterOverrides.builder()
//  .parameterKey(java.lang.String)
//  .parameterValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverrides.property.parameterKey">parameterKey</a></code> | <code>java.lang.String</code> | The key associated with the parameter. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverrides.property.parameterValue">parameterValue</a></code> | <code>java.lang.String</code> | The input value associated with the parameter. |

---

##### `parameterKey`<sup>Optional</sup> <a name="parameterKey" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverrides.property.parameterKey"></a>

```java
public java.lang.String getParameterKey();
```

- *Type:* java.lang.String

The key associated with the parameter.

If you don't specify a key and value for a particular parameter, AWS CloudFormation uses the default value that is specified in your template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#parameter_key CloudformationStackSet#parameter_key}

---

##### `parameterValue`<sup>Optional</sup> <a name="parameterValue" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverrides.property.parameterValue"></a>

```java
public java.lang.String getParameterValue();
```

- *Type:* java.lang.String

The input value associated with the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#parameter_value CloudformationStackSet#parameter_value}

---

### CloudformationStackSetTags <a name="CloudformationStackSetTags" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_stack_set.CloudformationStackSetTags;

CloudformationStackSetTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags.property.key">key</a></code> | <code>java.lang.String</code> | A string used to identify this tag. You can specify a maximum of 127 characters for a tag key. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags.property.value">value</a></code> | <code>java.lang.String</code> | A string containing the value for this tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A string used to identify this tag. You can specify a maximum of 127 characters for a tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#key CloudformationStackSet#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

A string containing the value for this tag.

You can specify a maximum of 256 characters for a tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#value CloudformationStackSet#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationStackSetAutoDeploymentOutputReference <a name="CloudformationStackSetAutoDeploymentOutputReference" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_stack_set.CloudformationStackSetAutoDeploymentOutputReference;

new CloudformationStackSetAutoDeploymentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resetDependsOn">resetDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resetRetainStacksOnAccountRemoval">resetRetainStacksOnAccountRemoval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDependsOn` <a name="resetDependsOn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resetDependsOn"></a>

```java
public void resetDependsOn()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetRetainStacksOnAccountRemoval` <a name="resetRetainStacksOnAccountRemoval" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resetRetainStacksOnAccountRemoval"></a>

```java
public void resetRetainStacksOnAccountRemoval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.dependsOnInput">dependsOnInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.retainStacksOnAccountRemovalInput">retainStacksOnAccountRemovalInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.retainStacksOnAccountRemoval">retainStacksOnAccountRemoval</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dependsOnInput`<sup>Optional</sup> <a name="dependsOnInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.dependsOnInput"></a>

```java
public java.util.List<java.lang.String> getDependsOnInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `retainStacksOnAccountRemovalInput`<sup>Optional</sup> <a name="retainStacksOnAccountRemovalInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.retainStacksOnAccountRemovalInput"></a>

```java
public java.lang.Boolean|IResolvable getRetainStacksOnAccountRemovalInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dependsOn`<sup>Required</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `retainStacksOnAccountRemoval`<sup>Required</sup> <a name="retainStacksOnAccountRemoval" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.retainStacksOnAccountRemoval"></a>

```java
public java.lang.Boolean|IResolvable getRetainStacksOnAccountRemoval();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudformationStackSetAutoDeployment getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a>

---


### CloudformationStackSetManagedExecutionOutputReference <a name="CloudformationStackSetManagedExecutionOutputReference" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_stack_set.CloudformationStackSetManagedExecutionOutputReference;

new CloudformationStackSetManagedExecutionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.resetActive">resetActive</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActive` <a name="resetActive" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.resetActive"></a>

```java
public void resetActive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.property.activeInput">activeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.property.active">active</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecution">CloudformationStackSetManagedExecution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.property.activeInput"></a>

```java
public java.lang.Boolean|IResolvable getActiveInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.property.active"></a>

```java
public java.lang.Boolean|IResolvable getActive();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudformationStackSetManagedExecution getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecution">CloudformationStackSetManagedExecution</a>

---


### CloudformationStackSetOperationPreferencesOutputReference <a name="CloudformationStackSetOperationPreferencesOutputReference" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_stack_set.CloudformationStackSetOperationPreferencesOutputReference;

new CloudformationStackSetOperationPreferencesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetConcurrencyMode">resetConcurrencyMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetFailureToleranceCount">resetFailureToleranceCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetFailureTolerancePercentage">resetFailureTolerancePercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetMaxConcurrentCount">resetMaxConcurrentCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetMaxConcurrentPercentage">resetMaxConcurrentPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetRegionConcurrencyType">resetRegionConcurrencyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetRegionOrder">resetRegionOrder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConcurrencyMode` <a name="resetConcurrencyMode" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetConcurrencyMode"></a>

```java
public void resetConcurrencyMode()
```

##### `resetFailureToleranceCount` <a name="resetFailureToleranceCount" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetFailureToleranceCount"></a>

```java
public void resetFailureToleranceCount()
```

##### `resetFailureTolerancePercentage` <a name="resetFailureTolerancePercentage" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetFailureTolerancePercentage"></a>

```java
public void resetFailureTolerancePercentage()
```

##### `resetMaxConcurrentCount` <a name="resetMaxConcurrentCount" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetMaxConcurrentCount"></a>

```java
public void resetMaxConcurrentCount()
```

##### `resetMaxConcurrentPercentage` <a name="resetMaxConcurrentPercentage" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetMaxConcurrentPercentage"></a>

```java
public void resetMaxConcurrentPercentage()
```

##### `resetRegionConcurrencyType` <a name="resetRegionConcurrencyType" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetRegionConcurrencyType"></a>

```java
public void resetRegionConcurrencyType()
```

##### `resetRegionOrder` <a name="resetRegionOrder" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetRegionOrder"></a>

```java
public void resetRegionOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.concurrencyModeInput">concurrencyModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureToleranceCountInput">failureToleranceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureTolerancePercentageInput">failureTolerancePercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentCountInput">maxConcurrentCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentPercentageInput">maxConcurrentPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionConcurrencyTypeInput">regionConcurrencyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionOrderInput">regionOrderInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.concurrencyMode">concurrencyMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureToleranceCount">failureToleranceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureTolerancePercentage">failureTolerancePercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentCount">maxConcurrentCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentPercentage">maxConcurrentPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionConcurrencyType">regionConcurrencyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionOrder">regionOrder</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `concurrencyModeInput`<sup>Optional</sup> <a name="concurrencyModeInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.concurrencyModeInput"></a>

```java
public java.lang.String getConcurrencyModeInput();
```

- *Type:* java.lang.String

---

##### `failureToleranceCountInput`<sup>Optional</sup> <a name="failureToleranceCountInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureToleranceCountInput"></a>

```java
public java.lang.Number getFailureToleranceCountInput();
```

- *Type:* java.lang.Number

---

##### `failureTolerancePercentageInput`<sup>Optional</sup> <a name="failureTolerancePercentageInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureTolerancePercentageInput"></a>

```java
public java.lang.Number getFailureTolerancePercentageInput();
```

- *Type:* java.lang.Number

---

##### `maxConcurrentCountInput`<sup>Optional</sup> <a name="maxConcurrentCountInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentCountInput"></a>

```java
public java.lang.Number getMaxConcurrentCountInput();
```

- *Type:* java.lang.Number

---

##### `maxConcurrentPercentageInput`<sup>Optional</sup> <a name="maxConcurrentPercentageInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentPercentageInput"></a>

```java
public java.lang.Number getMaxConcurrentPercentageInput();
```

- *Type:* java.lang.Number

---

##### `regionConcurrencyTypeInput`<sup>Optional</sup> <a name="regionConcurrencyTypeInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionConcurrencyTypeInput"></a>

```java
public java.lang.String getRegionConcurrencyTypeInput();
```

- *Type:* java.lang.String

---

##### `regionOrderInput`<sup>Optional</sup> <a name="regionOrderInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionOrderInput"></a>

```java
public java.util.List<java.lang.String> getRegionOrderInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `concurrencyMode`<sup>Required</sup> <a name="concurrencyMode" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.concurrencyMode"></a>

```java
public java.lang.String getConcurrencyMode();
```

- *Type:* java.lang.String

---

##### `failureToleranceCount`<sup>Required</sup> <a name="failureToleranceCount" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureToleranceCount"></a>

```java
public java.lang.Number getFailureToleranceCount();
```

- *Type:* java.lang.Number

---

##### `failureTolerancePercentage`<sup>Required</sup> <a name="failureTolerancePercentage" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureTolerancePercentage"></a>

```java
public java.lang.Number getFailureTolerancePercentage();
```

- *Type:* java.lang.Number

---

##### `maxConcurrentCount`<sup>Required</sup> <a name="maxConcurrentCount" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentCount"></a>

```java
public java.lang.Number getMaxConcurrentCount();
```

- *Type:* java.lang.Number

---

##### `maxConcurrentPercentage`<sup>Required</sup> <a name="maxConcurrentPercentage" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentPercentage"></a>

```java
public java.lang.Number getMaxConcurrentPercentage();
```

- *Type:* java.lang.Number

---

##### `regionConcurrencyType`<sup>Required</sup> <a name="regionConcurrencyType" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionConcurrencyType"></a>

```java
public java.lang.String getRegionConcurrencyType();
```

- *Type:* java.lang.String

---

##### `regionOrder`<sup>Required</sup> <a name="regionOrder" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionOrder"></a>

```java
public java.util.List<java.lang.String> getRegionOrder();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudformationStackSetOperationPreferences getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a>

---


### CloudformationStackSetParametersList <a name="CloudformationStackSetParametersList" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_stack_set.CloudformationStackSetParametersList;

new CloudformationStackSetParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.get"></a>

```java
public CloudformationStackSetParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters">CloudformationStackSetParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudformationStackSetParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters">CloudformationStackSetParameters</a>>

---


### CloudformationStackSetParametersOutputReference <a name="CloudformationStackSetParametersOutputReference" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_stack_set.CloudformationStackSetParametersOutputReference;

new CloudformationStackSetParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.resetParameterKey">resetParameterKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.resetParameterValue">resetParameterValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameterKey` <a name="resetParameterKey" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.resetParameterKey"></a>

```java
public void resetParameterKey()
```

##### `resetParameterValue` <a name="resetParameterValue" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.resetParameterValue"></a>

```java
public void resetParameterValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.property.parameterKeyInput">parameterKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.property.parameterValueInput">parameterValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.property.parameterKey">parameterKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.property.parameterValue">parameterValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters">CloudformationStackSetParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameterKeyInput`<sup>Optional</sup> <a name="parameterKeyInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.property.parameterKeyInput"></a>

```java
public java.lang.String getParameterKeyInput();
```

- *Type:* java.lang.String

---

##### `parameterValueInput`<sup>Optional</sup> <a name="parameterValueInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.property.parameterValueInput"></a>

```java
public java.lang.String getParameterValueInput();
```

- *Type:* java.lang.String

---

##### `parameterKey`<sup>Required</sup> <a name="parameterKey" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.property.parameterKey"></a>

```java
public java.lang.String getParameterKey();
```

- *Type:* java.lang.String

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.property.parameterValue"></a>

```java
public java.lang.String getParameterValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudformationStackSetParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters">CloudformationStackSetParameters</a>

---


### CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference <a name="CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_stack_set.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference;

new CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.resetAccountFilterType">resetAccountFilterType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.resetAccounts">resetAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.resetAccountsUrl">resetAccountsUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.resetOrganizationalUnitIds">resetOrganizationalUnitIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountFilterType` <a name="resetAccountFilterType" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.resetAccountFilterType"></a>

```java
public void resetAccountFilterType()
```

##### `resetAccounts` <a name="resetAccounts" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.resetAccounts"></a>

```java
public void resetAccounts()
```

##### `resetAccountsUrl` <a name="resetAccountsUrl" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.resetAccountsUrl"></a>

```java
public void resetAccountsUrl()
```

##### `resetOrganizationalUnitIds` <a name="resetOrganizationalUnitIds" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.resetOrganizationalUnitIds"></a>

```java
public void resetOrganizationalUnitIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accountFilterTypeInput">accountFilterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accountsInput">accountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accountsUrlInput">accountsUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.organizationalUnitIdsInput">organizationalUnitIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accountFilterType">accountFilterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accounts">accounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accountsUrl">accountsUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.organizationalUnitIds">organizationalUnitIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets">CloudformationStackSetStackInstancesGroupDeploymentTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountFilterTypeInput`<sup>Optional</sup> <a name="accountFilterTypeInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accountFilterTypeInput"></a>

```java
public java.lang.String getAccountFilterTypeInput();
```

- *Type:* java.lang.String

---

##### `accountsInput`<sup>Optional</sup> <a name="accountsInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accountsInput"></a>

```java
public java.util.List<java.lang.String> getAccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accountsUrlInput`<sup>Optional</sup> <a name="accountsUrlInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accountsUrlInput"></a>

```java
public java.lang.String getAccountsUrlInput();
```

- *Type:* java.lang.String

---

##### `organizationalUnitIdsInput`<sup>Optional</sup> <a name="organizationalUnitIdsInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.organizationalUnitIdsInput"></a>

```java
public java.util.List<java.lang.String> getOrganizationalUnitIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accountFilterType`<sup>Required</sup> <a name="accountFilterType" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accountFilterType"></a>

```java
public java.lang.String getAccountFilterType();
```

- *Type:* java.lang.String

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accounts"></a>

```java
public java.util.List<java.lang.String> getAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accountsUrl`<sup>Required</sup> <a name="accountsUrl" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accountsUrl"></a>

```java
public java.lang.String getAccountsUrl();
```

- *Type:* java.lang.String

---

##### `organizationalUnitIds`<sup>Required</sup> <a name="organizationalUnitIds" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.organizationalUnitIds"></a>

```java
public java.util.List<java.lang.String> getOrganizationalUnitIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudformationStackSetStackInstancesGroupDeploymentTargets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets">CloudformationStackSetStackInstancesGroupDeploymentTargets</a>

---


### CloudformationStackSetStackInstancesGroupList <a name="CloudformationStackSetStackInstancesGroupList" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_stack_set.CloudformationStackSetStackInstancesGroupList;

new CloudformationStackSetStackInstancesGroupList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.get"></a>

```java
public CloudformationStackSetStackInstancesGroupOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup">CloudformationStackSetStackInstancesGroup</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudformationStackSetStackInstancesGroup> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup">CloudformationStackSetStackInstancesGroup</a>>

---


### CloudformationStackSetStackInstancesGroupOutputReference <a name="CloudformationStackSetStackInstancesGroupOutputReference" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_stack_set.CloudformationStackSetStackInstancesGroupOutputReference;

new CloudformationStackSetStackInstancesGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.putDeploymentTargets">putDeploymentTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.putParameterOverrides">putParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.resetDeploymentTargets">resetDeploymentTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.resetParameterOverrides">resetParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.resetRegions">resetRegions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeploymentTargets` <a name="putDeploymentTargets" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.putDeploymentTargets"></a>

```java
public void putDeploymentTargets(CloudformationStackSetStackInstancesGroupDeploymentTargets value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.putDeploymentTargets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets">CloudformationStackSetStackInstancesGroupDeploymentTargets</a>

---

##### `putParameterOverrides` <a name="putParameterOverrides" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.putParameterOverrides"></a>

```java
public void putParameterOverrides(IResolvable|java.util.List<CloudformationStackSetStackInstancesGroupParameterOverrides> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.putParameterOverrides.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverrides">CloudformationStackSetStackInstancesGroupParameterOverrides</a>>

---

##### `resetDeploymentTargets` <a name="resetDeploymentTargets" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.resetDeploymentTargets"></a>

```java
public void resetDeploymentTargets()
```

##### `resetParameterOverrides` <a name="resetParameterOverrides" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.resetParameterOverrides"></a>

```java
public void resetParameterOverrides()
```

##### `resetRegions` <a name="resetRegions" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.resetRegions"></a>

```java
public void resetRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.deploymentTargets">deploymentTargets</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference">CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.parameterOverrides">parameterOverrides</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList">CloudformationStackSetStackInstancesGroupParameterOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.deploymentTargetsInput">deploymentTargetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets">CloudformationStackSetStackInstancesGroupDeploymentTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.parameterOverridesInput">parameterOverridesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverrides">CloudformationStackSetStackInstancesGroupParameterOverrides</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.regionsInput">regionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup">CloudformationStackSetStackInstancesGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deploymentTargets`<sup>Required</sup> <a name="deploymentTargets" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.deploymentTargets"></a>

```java
public CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference getDeploymentTargets();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference">CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference</a>

---

##### `parameterOverrides`<sup>Required</sup> <a name="parameterOverrides" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.parameterOverrides"></a>

```java
public CloudformationStackSetStackInstancesGroupParameterOverridesList getParameterOverrides();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList">CloudformationStackSetStackInstancesGroupParameterOverridesList</a>

---

##### `deploymentTargetsInput`<sup>Optional</sup> <a name="deploymentTargetsInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.deploymentTargetsInput"></a>

```java
public IResolvable|CloudformationStackSetStackInstancesGroupDeploymentTargets getDeploymentTargetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets">CloudformationStackSetStackInstancesGroupDeploymentTargets</a>

---

##### `parameterOverridesInput`<sup>Optional</sup> <a name="parameterOverridesInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.parameterOverridesInput"></a>

```java
public IResolvable|java.util.List<CloudformationStackSetStackInstancesGroupParameterOverrides> getParameterOverridesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverrides">CloudformationStackSetStackInstancesGroupParameterOverrides</a>>

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.regionsInput"></a>

```java
public java.util.List<java.lang.String> getRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudformationStackSetStackInstancesGroup getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup">CloudformationStackSetStackInstancesGroup</a>

---


### CloudformationStackSetStackInstancesGroupParameterOverridesList <a name="CloudformationStackSetStackInstancesGroupParameterOverridesList" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_stack_set.CloudformationStackSetStackInstancesGroupParameterOverridesList;

new CloudformationStackSetStackInstancesGroupParameterOverridesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.get"></a>

```java
public CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverrides">CloudformationStackSetStackInstancesGroupParameterOverrides</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudformationStackSetStackInstancesGroupParameterOverrides> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverrides">CloudformationStackSetStackInstancesGroupParameterOverrides</a>>

---


### CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference <a name="CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_stack_set.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference;

new CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.resetParameterKey">resetParameterKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.resetParameterValue">resetParameterValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameterKey` <a name="resetParameterKey" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.resetParameterKey"></a>

```java
public void resetParameterKey()
```

##### `resetParameterValue` <a name="resetParameterValue" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.resetParameterValue"></a>

```java
public void resetParameterValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.parameterKeyInput">parameterKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.parameterValueInput">parameterValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.parameterKey">parameterKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.parameterValue">parameterValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverrides">CloudformationStackSetStackInstancesGroupParameterOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameterKeyInput`<sup>Optional</sup> <a name="parameterKeyInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.parameterKeyInput"></a>

```java
public java.lang.String getParameterKeyInput();
```

- *Type:* java.lang.String

---

##### `parameterValueInput`<sup>Optional</sup> <a name="parameterValueInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.parameterValueInput"></a>

```java
public java.lang.String getParameterValueInput();
```

- *Type:* java.lang.String

---

##### `parameterKey`<sup>Required</sup> <a name="parameterKey" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.parameterKey"></a>

```java
public java.lang.String getParameterKey();
```

- *Type:* java.lang.String

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.parameterValue"></a>

```java
public java.lang.String getParameterValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudformationStackSetStackInstancesGroupParameterOverrides getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverrides">CloudformationStackSetStackInstancesGroupParameterOverrides</a>

---


### CloudformationStackSetTagsList <a name="CloudformationStackSetTagsList" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_stack_set.CloudformationStackSetTagsList;

new CloudformationStackSetTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.get"></a>

```java
public CloudformationStackSetTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags">CloudformationStackSetTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudformationStackSetTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags">CloudformationStackSetTags</a>>

---


### CloudformationStackSetTagsOutputReference <a name="CloudformationStackSetTagsOutputReference" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_stack_set.CloudformationStackSetTagsOutputReference;

new CloudformationStackSetTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags">CloudformationStackSetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudformationStackSetTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags">CloudformationStackSetTags</a>

---



