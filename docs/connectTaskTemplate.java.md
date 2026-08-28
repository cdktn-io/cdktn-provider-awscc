# `connectTaskTemplate` Submodule <a name="`connectTaskTemplate` Submodule" id="@cdktn/provider-awscc.connectTaskTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectTaskTemplate <a name="ConnectTaskTemplate" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template awscc_connect_task_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplate;

ConnectTaskTemplate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceArn(java.lang.String)
//  .clientToken(java.lang.String)
//  .constraints(ConnectTaskTemplateConstraints)
//  .contactFlowArn(java.lang.String)
//  .defaults(IResolvable|java.util.List<ConnectTaskTemplateDefaults>)
//  .description(java.lang.String)
//  .fields(IResolvable|java.util.List<ConnectTaskTemplateFields>)
//  .name(java.lang.String)
//  .selfAssignContactFlowArn(java.lang.String)
//  .status(java.lang.String)
//  .tags(IResolvable|java.util.List<ConnectTaskTemplateTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | The identifier (arn) of the instance. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.clientToken">clientToken</a></code> | <code>java.lang.String</code> | the client token string in uuid format. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.constraints">constraints</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints">ConnectTaskTemplateConstraints</a></code> | The constraints for the task template. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.contactFlowArn">contactFlowArn</a></code> | <code>java.lang.String</code> | The identifier of the contact flow. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.defaults">defaults</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#defaults ConnectTaskTemplate#defaults}. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the task template. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.fields">fields</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>></code> | The list of task template's fields. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the task template. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.selfAssignContactFlowArn">selfAssignContactFlowArn</a></code> | <code>java.lang.String</code> | The identifier of the contact flow. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | The status of the task template. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>></code> | One or more tags. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.instanceArn"></a>

- *Type:* java.lang.String

The identifier (arn) of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#instance_arn ConnectTaskTemplate#instance_arn}

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.clientToken"></a>

- *Type:* java.lang.String

the client token string in uuid format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#client_token ConnectTaskTemplate#client_token}

---

##### `constraints`<sup>Optional</sup> <a name="constraints" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.constraints"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints">ConnectTaskTemplateConstraints</a>

The constraints for the task template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#constraints ConnectTaskTemplate#constraints}

---

##### `contactFlowArn`<sup>Optional</sup> <a name="contactFlowArn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.contactFlowArn"></a>

- *Type:* java.lang.String

The identifier of the contact flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#contact_flow_arn ConnectTaskTemplate#contact_flow_arn}

---

##### `defaults`<sup>Optional</sup> <a name="defaults" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.defaults"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#defaults ConnectTaskTemplate#defaults}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the task template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#description ConnectTaskTemplate#description}

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.fields"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>>

The list of task template's fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#fields ConnectTaskTemplate#fields}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the task template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}

---

##### `selfAssignContactFlowArn`<sup>Optional</sup> <a name="selfAssignContactFlowArn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.selfAssignContactFlowArn"></a>

- *Type:* java.lang.String

The identifier of the contact flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#self_assign_contact_flow_arn ConnectTaskTemplate#self_assign_contact_flow_arn}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.status"></a>

- *Type:* java.lang.String

The status of the task template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#status ConnectTaskTemplate#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>>

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#tags ConnectTaskTemplate#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putConstraints">putConstraints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putDefaults">putDefaults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetClientToken">resetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetConstraints">resetConstraints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetContactFlowArn">resetContactFlowArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetDefaults">resetDefaults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetSelfAssignContactFlowArn">resetSelfAssignContactFlowArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConstraints` <a name="putConstraints" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putConstraints"></a>

```java
public void putConstraints(ConnectTaskTemplateConstraints value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints">ConnectTaskTemplateConstraints</a>

---

##### `putDefaults` <a name="putDefaults" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putDefaults"></a>

```java
public void putDefaults(IResolvable|java.util.List<ConnectTaskTemplateDefaults> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putDefaults.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>>

---

##### `putFields` <a name="putFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putFields"></a>

```java
public void putFields(IResolvable|java.util.List<ConnectTaskTemplateFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putFields.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ConnectTaskTemplateTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>>

---

##### `resetClientToken` <a name="resetClientToken" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetClientToken"></a>

```java
public void resetClientToken()
```

##### `resetConstraints` <a name="resetConstraints" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetConstraints"></a>

```java
public void resetConstraints()
```

##### `resetContactFlowArn` <a name="resetContactFlowArn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetContactFlowArn"></a>

```java
public void resetContactFlowArn()
```

##### `resetDefaults` <a name="resetDefaults" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetDefaults"></a>

```java
public void resetDefaults()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFields` <a name="resetFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetFields"></a>

```java
public void resetFields()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetName"></a>

```java
public void resetName()
```

##### `resetSelfAssignContactFlowArn` <a name="resetSelfAssignContactFlowArn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetSelfAssignContactFlowArn"></a>

```java
public void resetSelfAssignContactFlowArn()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectTaskTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isConstruct"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplate;

ConnectTaskTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplate;

ConnectTaskTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplate;

ConnectTaskTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplate;

ConnectTaskTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConnectTaskTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ConnectTaskTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConnectTaskTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConnectTaskTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ConnectTaskTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.constraints">constraints</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference">ConnectTaskTemplateConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.defaults">defaults</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList">ConnectTaskTemplateDefaultsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList">ConnectTaskTemplateFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList">ConnectTaskTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.clientTokenInput">clientTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.constraintsInput">constraintsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints">ConnectTaskTemplateConstraints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.contactFlowArnInput">contactFlowArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.defaultsInput">defaultsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.fieldsInput">fieldsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.instanceArnInput">instanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.selfAssignContactFlowArnInput">selfAssignContactFlowArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.clientToken">clientToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.contactFlowArn">contactFlowArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.selfAssignContactFlowArn">selfAssignContactFlowArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `constraints`<sup>Required</sup> <a name="constraints" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.constraints"></a>

```java
public ConnectTaskTemplateConstraintsOutputReference getConstraints();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference">ConnectTaskTemplateConstraintsOutputReference</a>

---

##### `defaults`<sup>Required</sup> <a name="defaults" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.defaults"></a>

```java
public ConnectTaskTemplateDefaultsList getDefaults();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList">ConnectTaskTemplateDefaultsList</a>

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.fields"></a>

```java
public ConnectTaskTemplateFieldsList getFields();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList">ConnectTaskTemplateFieldsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.tags"></a>

```java
public ConnectTaskTemplateTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList">ConnectTaskTemplateTagsList</a>

---

##### `clientTokenInput`<sup>Optional</sup> <a name="clientTokenInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.clientTokenInput"></a>

```java
public java.lang.String getClientTokenInput();
```

- *Type:* java.lang.String

---

##### `constraintsInput`<sup>Optional</sup> <a name="constraintsInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.constraintsInput"></a>

```java
public IResolvable|ConnectTaskTemplateConstraints getConstraintsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints">ConnectTaskTemplateConstraints</a>

---

##### `contactFlowArnInput`<sup>Optional</sup> <a name="contactFlowArnInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.contactFlowArnInput"></a>

```java
public java.lang.String getContactFlowArnInput();
```

- *Type:* java.lang.String

---

##### `defaultsInput`<sup>Optional</sup> <a name="defaultsInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.defaultsInput"></a>

```java
public IResolvable|java.util.List<ConnectTaskTemplateDefaults> getDefaultsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.fieldsInput"></a>

```java
public IResolvable|java.util.List<ConnectTaskTemplateFields> getFieldsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>>

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.instanceArnInput"></a>

```java
public java.lang.String getInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `selfAssignContactFlowArnInput`<sup>Optional</sup> <a name="selfAssignContactFlowArnInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.selfAssignContactFlowArnInput"></a>

```java
public java.lang.String getSelfAssignContactFlowArnInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ConnectTaskTemplateTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>>

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.clientToken"></a>

```java
public java.lang.String getClientToken();
```

- *Type:* java.lang.String

---

##### `contactFlowArn`<sup>Required</sup> <a name="contactFlowArn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.contactFlowArn"></a>

```java
public java.lang.String getContactFlowArn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `selfAssignContactFlowArn`<sup>Required</sup> <a name="selfAssignContactFlowArn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.selfAssignContactFlowArn"></a>

```java
public java.lang.String getSelfAssignContactFlowArn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectTaskTemplateConfig <a name="ConnectTaskTemplateConfig" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplateConfig;

ConnectTaskTemplateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceArn(java.lang.String)
//  .clientToken(java.lang.String)
//  .constraints(ConnectTaskTemplateConstraints)
//  .contactFlowArn(java.lang.String)
//  .defaults(IResolvable|java.util.List<ConnectTaskTemplateDefaults>)
//  .description(java.lang.String)
//  .fields(IResolvable|java.util.List<ConnectTaskTemplateFields>)
//  .name(java.lang.String)
//  .selfAssignContactFlowArn(java.lang.String)
//  .status(java.lang.String)
//  .tags(IResolvable|java.util.List<ConnectTaskTemplateTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | The identifier (arn) of the instance. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.clientToken">clientToken</a></code> | <code>java.lang.String</code> | the client token string in uuid format. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.constraints">constraints</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints">ConnectTaskTemplateConstraints</a></code> | The constraints for the task template. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.contactFlowArn">contactFlowArn</a></code> | <code>java.lang.String</code> | The identifier of the contact flow. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.defaults">defaults</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#defaults ConnectTaskTemplate#defaults}. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the task template. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.fields">fields</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>></code> | The list of task template's fields. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the task template. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.selfAssignContactFlowArn">selfAssignContactFlowArn</a></code> | <code>java.lang.String</code> | The identifier of the contact flow. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.status">status</a></code> | <code>java.lang.String</code> | The status of the task template. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>></code> | One or more tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

The identifier (arn) of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#instance_arn ConnectTaskTemplate#instance_arn}

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.clientToken"></a>

```java
public java.lang.String getClientToken();
```

- *Type:* java.lang.String

the client token string in uuid format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#client_token ConnectTaskTemplate#client_token}

---

##### `constraints`<sup>Optional</sup> <a name="constraints" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.constraints"></a>

```java
public ConnectTaskTemplateConstraints getConstraints();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints">ConnectTaskTemplateConstraints</a>

The constraints for the task template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#constraints ConnectTaskTemplate#constraints}

---

##### `contactFlowArn`<sup>Optional</sup> <a name="contactFlowArn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.contactFlowArn"></a>

```java
public java.lang.String getContactFlowArn();
```

- *Type:* java.lang.String

The identifier of the contact flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#contact_flow_arn ConnectTaskTemplate#contact_flow_arn}

---

##### `defaults`<sup>Optional</sup> <a name="defaults" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.defaults"></a>

```java
public IResolvable|java.util.List<ConnectTaskTemplateDefaults> getDefaults();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#defaults ConnectTaskTemplate#defaults}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the task template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#description ConnectTaskTemplate#description}

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.fields"></a>

```java
public IResolvable|java.util.List<ConnectTaskTemplateFields> getFields();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>>

The list of task template's fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#fields ConnectTaskTemplate#fields}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the task template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}

---

##### `selfAssignContactFlowArn`<sup>Optional</sup> <a name="selfAssignContactFlowArn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.selfAssignContactFlowArn"></a>

```java
public java.lang.String getSelfAssignContactFlowArn();
```

- *Type:* java.lang.String

The identifier of the contact flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#self_assign_contact_flow_arn ConnectTaskTemplate#self_assign_contact_flow_arn}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

The status of the task template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#status ConnectTaskTemplate#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ConnectTaskTemplateTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>>

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#tags ConnectTaskTemplate#tags}

---

### ConnectTaskTemplateConstraints <a name="ConnectTaskTemplateConstraints" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplateConstraints;

ConnectTaskTemplateConstraints.builder()
//  .invisibleFields(IResolvable|java.util.List<ConnectTaskTemplateConstraintsInvisibleFields>)
//  .readOnlyFields(IResolvable|java.util.List<ConnectTaskTemplateConstraintsReadOnlyFields>)
//  .requiredFields(IResolvable|java.util.List<ConnectTaskTemplateConstraintsRequiredFields>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints.property.invisibleFields">invisibleFields</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>></code> | The list of the task template's invisible fields. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints.property.readOnlyFields">readOnlyFields</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>></code> | The list of the task template's read only fields. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints.property.requiredFields">requiredFields</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>></code> | The list of the task template's required fields. |

---

##### `invisibleFields`<sup>Optional</sup> <a name="invisibleFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints.property.invisibleFields"></a>

```java
public IResolvable|java.util.List<ConnectTaskTemplateConstraintsInvisibleFields> getInvisibleFields();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>>

The list of the task template's invisible fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#invisible_fields ConnectTaskTemplate#invisible_fields}

---

##### `readOnlyFields`<sup>Optional</sup> <a name="readOnlyFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints.property.readOnlyFields"></a>

```java
public IResolvable|java.util.List<ConnectTaskTemplateConstraintsReadOnlyFields> getReadOnlyFields();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>>

The list of the task template's read only fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#read_only_fields ConnectTaskTemplate#read_only_fields}

---

##### `requiredFields`<sup>Optional</sup> <a name="requiredFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints.property.requiredFields"></a>

```java
public IResolvable|java.util.List<ConnectTaskTemplateConstraintsRequiredFields> getRequiredFields();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>>

The list of the task template's required fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#required_fields ConnectTaskTemplate#required_fields}

---

### ConnectTaskTemplateConstraintsInvisibleFields <a name="ConnectTaskTemplateConstraintsInvisibleFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplateConstraintsInvisibleFields;

ConnectTaskTemplateConstraintsInvisibleFields.builder()
//  .id(ConnectTaskTemplateConstraintsInvisibleFieldsId)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields.property.id">id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId">ConnectTaskTemplateConstraintsInvisibleFieldsId</a></code> | the identifier (name) for the task template field. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields.property.id"></a>

```java
public ConnectTaskTemplateConstraintsInvisibleFieldsId getId();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId">ConnectTaskTemplateConstraintsInvisibleFieldsId</a>

the identifier (name) for the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#id ConnectTaskTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ConnectTaskTemplateConstraintsInvisibleFieldsId <a name="ConnectTaskTemplateConstraintsInvisibleFieldsId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplateConstraintsInvisibleFieldsId;

ConnectTaskTemplateConstraintsInvisibleFieldsId.builder()
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId.property.name">name</a></code> | <code>java.lang.String</code> | The name of the task template field. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}

---

### ConnectTaskTemplateConstraintsReadOnlyFields <a name="ConnectTaskTemplateConstraintsReadOnlyFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplateConstraintsReadOnlyFields;

ConnectTaskTemplateConstraintsReadOnlyFields.builder()
//  .id(ConnectTaskTemplateConstraintsReadOnlyFieldsId)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields.property.id">id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId">ConnectTaskTemplateConstraintsReadOnlyFieldsId</a></code> | the identifier (name) for the task template field. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields.property.id"></a>

```java
public ConnectTaskTemplateConstraintsReadOnlyFieldsId getId();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId">ConnectTaskTemplateConstraintsReadOnlyFieldsId</a>

the identifier (name) for the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#id ConnectTaskTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ConnectTaskTemplateConstraintsReadOnlyFieldsId <a name="ConnectTaskTemplateConstraintsReadOnlyFieldsId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplateConstraintsReadOnlyFieldsId;

ConnectTaskTemplateConstraintsReadOnlyFieldsId.builder()
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId.property.name">name</a></code> | <code>java.lang.String</code> | The name of the task template field. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}

---

### ConnectTaskTemplateConstraintsRequiredFields <a name="ConnectTaskTemplateConstraintsRequiredFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplateConstraintsRequiredFields;

ConnectTaskTemplateConstraintsRequiredFields.builder()
//  .id(ConnectTaskTemplateConstraintsRequiredFieldsId)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields.property.id">id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId">ConnectTaskTemplateConstraintsRequiredFieldsId</a></code> | the identifier (name) for the task template field. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields.property.id"></a>

```java
public ConnectTaskTemplateConstraintsRequiredFieldsId getId();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId">ConnectTaskTemplateConstraintsRequiredFieldsId</a>

the identifier (name) for the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#id ConnectTaskTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ConnectTaskTemplateConstraintsRequiredFieldsId <a name="ConnectTaskTemplateConstraintsRequiredFieldsId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplateConstraintsRequiredFieldsId;

ConnectTaskTemplateConstraintsRequiredFieldsId.builder()
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId.property.name">name</a></code> | <code>java.lang.String</code> | The name of the task template field. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}

---

### ConnectTaskTemplateDefaults <a name="ConnectTaskTemplateDefaults" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplateDefaults;

ConnectTaskTemplateDefaults.builder()
//  .defaultValue(java.lang.String)
//  .id(ConnectTaskTemplateDefaultsId)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | the default value for the task template's field. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults.property.id">id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId">ConnectTaskTemplateDefaultsId</a></code> | the identifier (name) for the task template field. |

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

the default value for the task template's field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#default_value ConnectTaskTemplate#default_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults.property.id"></a>

```java
public ConnectTaskTemplateDefaultsId getId();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId">ConnectTaskTemplateDefaultsId</a>

the identifier (name) for the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#id ConnectTaskTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ConnectTaskTemplateDefaultsId <a name="ConnectTaskTemplateDefaultsId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplateDefaultsId;

ConnectTaskTemplateDefaultsId.builder()
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId.property.name">name</a></code> | <code>java.lang.String</code> | The name of the task template field. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}

---

### ConnectTaskTemplateFields <a name="ConnectTaskTemplateFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplateFields;

ConnectTaskTemplateFields.builder()
//  .description(java.lang.String)
//  .id(ConnectTaskTemplateFieldsId)
//  .singleSelectOptions(java.util.List<java.lang.String>)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.property.description">description</a></code> | <code>java.lang.String</code> | The description of the task template's field. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.property.id">id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId">ConnectTaskTemplateFieldsId</a></code> | the identifier (name) for the task template field. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.property.singleSelectOptions">singleSelectOptions</a></code> | <code>java.util.List<java.lang.String></code> | list of field options to be used with single select. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.property.type">type</a></code> | <code>java.lang.String</code> | The type of the task template's field. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the task template's field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#description ConnectTaskTemplate#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.property.id"></a>

```java
public ConnectTaskTemplateFieldsId getId();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId">ConnectTaskTemplateFieldsId</a>

the identifier (name) for the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#id ConnectTaskTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `singleSelectOptions`<sup>Optional</sup> <a name="singleSelectOptions" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.property.singleSelectOptions"></a>

```java
public java.util.List<java.lang.String> getSingleSelectOptions();
```

- *Type:* java.util.List<java.lang.String>

list of field options to be used with single select.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#single_select_options ConnectTaskTemplate#single_select_options}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the task template's field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#type ConnectTaskTemplate#type}

---

### ConnectTaskTemplateFieldsId <a name="ConnectTaskTemplateFieldsId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplateFieldsId;

ConnectTaskTemplateFieldsId.builder()
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId.property.name">name</a></code> | <code>java.lang.String</code> | The name of the task template field. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}

---

### ConnectTaskTemplateTags <a name="ConnectTaskTemplateTags" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplateTags;

ConnectTaskTemplateTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#key ConnectTaskTemplate#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

. You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_task_template#value ConnectTaskTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference <a name="ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference;

new ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId">ConnectTaskTemplateConstraintsInvisibleFieldsId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectTaskTemplateConstraintsInvisibleFieldsId getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId">ConnectTaskTemplateConstraintsInvisibleFieldsId</a>

---


### ConnectTaskTemplateConstraintsInvisibleFieldsList <a name="ConnectTaskTemplateConstraintsInvisibleFieldsList" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplateConstraintsInvisibleFieldsList;

new ConnectTaskTemplateConstraintsInvisibleFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.get"></a>

```java
public ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConnectTaskTemplateConstraintsInvisibleFields> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>>

---


### ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference <a name="ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference;

new ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.putId">putId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putId` <a name="putId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.putId"></a>

```java
public void putId(ConnectTaskTemplateConstraintsInvisibleFieldsId value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.putId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId">ConnectTaskTemplateConstraintsInvisibleFieldsId</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.resetId"></a>

```java
public void resetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.id">id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference">ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.idInput">idInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId">ConnectTaskTemplateConstraintsInvisibleFieldsId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.id"></a>

```java
public ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference getId();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference">ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.idInput"></a>

```java
public IResolvable|ConnectTaskTemplateConstraintsInvisibleFieldsId getIdInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId">ConnectTaskTemplateConstraintsInvisibleFieldsId</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectTaskTemplateConstraintsInvisibleFields getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>

---


### ConnectTaskTemplateConstraintsOutputReference <a name="ConnectTaskTemplateConstraintsOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplateConstraintsOutputReference;

new ConnectTaskTemplateConstraintsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putInvisibleFields">putInvisibleFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putReadOnlyFields">putReadOnlyFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putRequiredFields">putRequiredFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resetInvisibleFields">resetInvisibleFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resetReadOnlyFields">resetReadOnlyFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resetRequiredFields">resetRequiredFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInvisibleFields` <a name="putInvisibleFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putInvisibleFields"></a>

```java
public void putInvisibleFields(IResolvable|java.util.List<ConnectTaskTemplateConstraintsInvisibleFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putInvisibleFields.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>>

---

##### `putReadOnlyFields` <a name="putReadOnlyFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putReadOnlyFields"></a>

```java
public void putReadOnlyFields(IResolvable|java.util.List<ConnectTaskTemplateConstraintsReadOnlyFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putReadOnlyFields.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>>

---

##### `putRequiredFields` <a name="putRequiredFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putRequiredFields"></a>

```java
public void putRequiredFields(IResolvable|java.util.List<ConnectTaskTemplateConstraintsRequiredFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putRequiredFields.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>>

---

##### `resetInvisibleFields` <a name="resetInvisibleFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resetInvisibleFields"></a>

```java
public void resetInvisibleFields()
```

##### `resetReadOnlyFields` <a name="resetReadOnlyFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resetReadOnlyFields"></a>

```java
public void resetReadOnlyFields()
```

##### `resetRequiredFields` <a name="resetRequiredFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resetRequiredFields"></a>

```java
public void resetRequiredFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.invisibleFields">invisibleFields</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList">ConnectTaskTemplateConstraintsInvisibleFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.readOnlyFields">readOnlyFields</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList">ConnectTaskTemplateConstraintsReadOnlyFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.requiredFields">requiredFields</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList">ConnectTaskTemplateConstraintsRequiredFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.invisibleFieldsInput">invisibleFieldsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.readOnlyFieldsInput">readOnlyFieldsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.requiredFieldsInput">requiredFieldsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints">ConnectTaskTemplateConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `invisibleFields`<sup>Required</sup> <a name="invisibleFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.invisibleFields"></a>

```java
public ConnectTaskTemplateConstraintsInvisibleFieldsList getInvisibleFields();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList">ConnectTaskTemplateConstraintsInvisibleFieldsList</a>

---

##### `readOnlyFields`<sup>Required</sup> <a name="readOnlyFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.readOnlyFields"></a>

```java
public ConnectTaskTemplateConstraintsReadOnlyFieldsList getReadOnlyFields();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList">ConnectTaskTemplateConstraintsReadOnlyFieldsList</a>

---

##### `requiredFields`<sup>Required</sup> <a name="requiredFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.requiredFields"></a>

```java
public ConnectTaskTemplateConstraintsRequiredFieldsList getRequiredFields();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList">ConnectTaskTemplateConstraintsRequiredFieldsList</a>

---

##### `invisibleFieldsInput`<sup>Optional</sup> <a name="invisibleFieldsInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.invisibleFieldsInput"></a>

```java
public IResolvable|java.util.List<ConnectTaskTemplateConstraintsInvisibleFields> getInvisibleFieldsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>>

---

##### `readOnlyFieldsInput`<sup>Optional</sup> <a name="readOnlyFieldsInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.readOnlyFieldsInput"></a>

```java
public IResolvable|java.util.List<ConnectTaskTemplateConstraintsReadOnlyFields> getReadOnlyFieldsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>>

---

##### `requiredFieldsInput`<sup>Optional</sup> <a name="requiredFieldsInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.requiredFieldsInput"></a>

```java
public IResolvable|java.util.List<ConnectTaskTemplateConstraintsRequiredFields> getRequiredFieldsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectTaskTemplateConstraints getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints">ConnectTaskTemplateConstraints</a>

---


### ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference <a name="ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference;

new ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId">ConnectTaskTemplateConstraintsReadOnlyFieldsId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectTaskTemplateConstraintsReadOnlyFieldsId getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId">ConnectTaskTemplateConstraintsReadOnlyFieldsId</a>

---


### ConnectTaskTemplateConstraintsReadOnlyFieldsList <a name="ConnectTaskTemplateConstraintsReadOnlyFieldsList" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplateConstraintsReadOnlyFieldsList;

new ConnectTaskTemplateConstraintsReadOnlyFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.get"></a>

```java
public ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConnectTaskTemplateConstraintsReadOnlyFields> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>>

---


### ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference <a name="ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference;

new ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.putId">putId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putId` <a name="putId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.putId"></a>

```java
public void putId(ConnectTaskTemplateConstraintsReadOnlyFieldsId value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.putId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId">ConnectTaskTemplateConstraintsReadOnlyFieldsId</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.resetId"></a>

```java
public void resetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.id">id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference">ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.idInput">idInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId">ConnectTaskTemplateConstraintsReadOnlyFieldsId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.id"></a>

```java
public ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference getId();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference">ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.idInput"></a>

```java
public IResolvable|ConnectTaskTemplateConstraintsReadOnlyFieldsId getIdInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId">ConnectTaskTemplateConstraintsReadOnlyFieldsId</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectTaskTemplateConstraintsReadOnlyFields getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>

---


### ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference <a name="ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference;

new ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId">ConnectTaskTemplateConstraintsRequiredFieldsId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectTaskTemplateConstraintsRequiredFieldsId getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId">ConnectTaskTemplateConstraintsRequiredFieldsId</a>

---


### ConnectTaskTemplateConstraintsRequiredFieldsList <a name="ConnectTaskTemplateConstraintsRequiredFieldsList" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplateConstraintsRequiredFieldsList;

new ConnectTaskTemplateConstraintsRequiredFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.get"></a>

```java
public ConnectTaskTemplateConstraintsRequiredFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConnectTaskTemplateConstraintsRequiredFields> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>>

---


### ConnectTaskTemplateConstraintsRequiredFieldsOutputReference <a name="ConnectTaskTemplateConstraintsRequiredFieldsOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference;

new ConnectTaskTemplateConstraintsRequiredFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.putId">putId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putId` <a name="putId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.putId"></a>

```java
public void putId(ConnectTaskTemplateConstraintsRequiredFieldsId value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.putId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId">ConnectTaskTemplateConstraintsRequiredFieldsId</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.resetId"></a>

```java
public void resetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.id">id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference">ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.idInput">idInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId">ConnectTaskTemplateConstraintsRequiredFieldsId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.id"></a>

```java
public ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference getId();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference">ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.idInput"></a>

```java
public IResolvable|ConnectTaskTemplateConstraintsRequiredFieldsId getIdInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId">ConnectTaskTemplateConstraintsRequiredFieldsId</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectTaskTemplateConstraintsRequiredFields getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>

---


### ConnectTaskTemplateDefaultsIdOutputReference <a name="ConnectTaskTemplateDefaultsIdOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplateDefaultsIdOutputReference;

new ConnectTaskTemplateDefaultsIdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId">ConnectTaskTemplateDefaultsId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectTaskTemplateDefaultsId getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId">ConnectTaskTemplateDefaultsId</a>

---


### ConnectTaskTemplateDefaultsList <a name="ConnectTaskTemplateDefaultsList" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplateDefaultsList;

new ConnectTaskTemplateDefaultsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.get"></a>

```java
public ConnectTaskTemplateDefaultsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConnectTaskTemplateDefaults> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>>

---


### ConnectTaskTemplateDefaultsOutputReference <a name="ConnectTaskTemplateDefaultsOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplateDefaultsOutputReference;

new ConnectTaskTemplateDefaultsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.putId">putId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putId` <a name="putId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.putId"></a>

```java
public void putId(ConnectTaskTemplateDefaultsId value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.putId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId">ConnectTaskTemplateDefaultsId</a>

---

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.resetDefaultValue"></a>

```java
public void resetDefaultValue()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.resetId"></a>

```java
public void resetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.id">id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference">ConnectTaskTemplateDefaultsIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.idInput">idInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId">ConnectTaskTemplateDefaultsId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.id"></a>

```java
public ConnectTaskTemplateDefaultsIdOutputReference getId();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference">ConnectTaskTemplateDefaultsIdOutputReference</a>

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.defaultValueInput"></a>

```java
public java.lang.String getDefaultValueInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.idInput"></a>

```java
public IResolvable|ConnectTaskTemplateDefaultsId getIdInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId">ConnectTaskTemplateDefaultsId</a>

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectTaskTemplateDefaults getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>

---


### ConnectTaskTemplateFieldsIdOutputReference <a name="ConnectTaskTemplateFieldsIdOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplateFieldsIdOutputReference;

new ConnectTaskTemplateFieldsIdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId">ConnectTaskTemplateFieldsId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectTaskTemplateFieldsId getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId">ConnectTaskTemplateFieldsId</a>

---


### ConnectTaskTemplateFieldsList <a name="ConnectTaskTemplateFieldsList" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplateFieldsList;

new ConnectTaskTemplateFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.get"></a>

```java
public ConnectTaskTemplateFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConnectTaskTemplateFields> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>>

---


### ConnectTaskTemplateFieldsOutputReference <a name="ConnectTaskTemplateFieldsOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplateFieldsOutputReference;

new ConnectTaskTemplateFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.putId">putId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resetSingleSelectOptions">resetSingleSelectOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putId` <a name="putId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.putId"></a>

```java
public void putId(ConnectTaskTemplateFieldsId value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.putId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId">ConnectTaskTemplateFieldsId</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetSingleSelectOptions` <a name="resetSingleSelectOptions" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resetSingleSelectOptions"></a>

```java
public void resetSingleSelectOptions()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.id">id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference">ConnectTaskTemplateFieldsIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.idInput">idInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId">ConnectTaskTemplateFieldsId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.singleSelectOptionsInput">singleSelectOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.singleSelectOptions">singleSelectOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.id"></a>

```java
public ConnectTaskTemplateFieldsIdOutputReference getId();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference">ConnectTaskTemplateFieldsIdOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.idInput"></a>

```java
public IResolvable|ConnectTaskTemplateFieldsId getIdInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId">ConnectTaskTemplateFieldsId</a>

---

##### `singleSelectOptionsInput`<sup>Optional</sup> <a name="singleSelectOptionsInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.singleSelectOptionsInput"></a>

```java
public java.util.List<java.lang.String> getSingleSelectOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `singleSelectOptions`<sup>Required</sup> <a name="singleSelectOptions" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.singleSelectOptions"></a>

```java
public java.util.List<java.lang.String> getSingleSelectOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectTaskTemplateFields getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>

---


### ConnectTaskTemplateTagsList <a name="ConnectTaskTemplateTagsList" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplateTagsList;

new ConnectTaskTemplateTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.get"></a>

```java
public ConnectTaskTemplateTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConnectTaskTemplateTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>>

---


### ConnectTaskTemplateTagsOutputReference <a name="ConnectTaskTemplateTagsOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_task_template.ConnectTaskTemplateTagsOutputReference;

new ConnectTaskTemplateTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectTaskTemplateTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>

---



