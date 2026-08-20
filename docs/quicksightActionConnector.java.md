# `quicksightActionConnector` Submodule <a name="`quicksightActionConnector` Submodule" id="@cdktn/provider-awscc.quicksightActionConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightActionConnector <a name="QuicksightActionConnector" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector awscc_quicksight_action_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnector;

QuicksightActionConnector.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .actionConnectorId(java.lang.String)
    .authenticationConfig(QuicksightActionConnectorAuthenticationConfig)
    .awsAccountId(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
//  .description(java.lang.String)
//  .permissions(IResolvable|java.util.List<QuicksightActionConnectorPermissions>)
//  .tags(IResolvable|java.util.List<QuicksightActionConnectorTags>)
//  .vpcConnectionArn(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.actionConnectorId">actionConnectorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#action_connector_id QuicksightActionConnector#action_connector_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.authenticationConfig">authenticationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig">QuicksightActionConnectorAuthenticationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#authentication_config QuicksightActionConnector#authentication_config}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#aws_account_id QuicksightActionConnector#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#name QuicksightActionConnector#name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#type QuicksightActionConnector#type}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#description QuicksightActionConnector#description}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.permissions">permissions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions">QuicksightActionConnectorPermissions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#permissions QuicksightActionConnector#permissions}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags">QuicksightActionConnectorTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#tags QuicksightActionConnector#tags}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.vpcConnectionArn">vpcConnectionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#vpc_connection_arn QuicksightActionConnector#vpc_connection_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actionConnectorId`<sup>Required</sup> <a name="actionConnectorId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.actionConnectorId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#action_connector_id QuicksightActionConnector#action_connector_id}.

---

##### `authenticationConfig`<sup>Required</sup> <a name="authenticationConfig" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.authenticationConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig">QuicksightActionConnectorAuthenticationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#authentication_config QuicksightActionConnector#authentication_config}.

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.awsAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#aws_account_id QuicksightActionConnector#aws_account_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#name QuicksightActionConnector#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#type QuicksightActionConnector#type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#description QuicksightActionConnector#description}.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.permissions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions">QuicksightActionConnectorPermissions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#permissions QuicksightActionConnector#permissions}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags">QuicksightActionConnectorTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#tags QuicksightActionConnector#tags}.

---

##### `vpcConnectionArn`<sup>Optional</sup> <a name="vpcConnectionArn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.vpcConnectionArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#vpc_connection_arn QuicksightActionConnector#vpc_connection_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.putAuthenticationConfig">putAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.putPermissions">putPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.resetVpcConnectionArn">resetVpcConnectionArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthenticationConfig` <a name="putAuthenticationConfig" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.putAuthenticationConfig"></a>

```java
public void putAuthenticationConfig(QuicksightActionConnectorAuthenticationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.putAuthenticationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig">QuicksightActionConnectorAuthenticationConfig</a>

---

##### `putPermissions` <a name="putPermissions" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.putPermissions"></a>

```java
public void putPermissions(IResolvable|java.util.List<QuicksightActionConnectorPermissions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.putPermissions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions">QuicksightActionConnectorPermissions</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<QuicksightActionConnectorTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags">QuicksightActionConnectorTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.resetPermissions"></a>

```java
public void resetPermissions()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.resetTags"></a>

```java
public void resetTags()
```

##### `resetVpcConnectionArn` <a name="resetVpcConnectionArn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.resetVpcConnectionArn"></a>

```java
public void resetVpcConnectionArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightActionConnector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.isConstruct"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnector;

QuicksightActionConnector.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnector;

QuicksightActionConnector.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnector;

QuicksightActionConnector.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnector;

QuicksightActionConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),QuicksightActionConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a QuicksightActionConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the QuicksightActionConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing QuicksightActionConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightActionConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.authenticationConfig">authenticationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference">QuicksightActionConnectorAuthenticationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.enabledActions">enabledActions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.permissions">permissions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList">QuicksightActionConnectorPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList">QuicksightActionConnectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.actionConnectorIdInput">actionConnectorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.authenticationConfigInput">authenticationConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig">QuicksightActionConnectorAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.permissionsInput">permissionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions">QuicksightActionConnectorPermissions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags">QuicksightActionConnectorTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.vpcConnectionArnInput">vpcConnectionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.actionConnectorId">actionConnectorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.vpcConnectionArn">vpcConnectionArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `authenticationConfig`<sup>Required</sup> <a name="authenticationConfig" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.authenticationConfig"></a>

```java
public QuicksightActionConnectorAuthenticationConfigOutputReference getAuthenticationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference">QuicksightActionConnectorAuthenticationConfigOutputReference</a>

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `enabledActions`<sup>Required</sup> <a name="enabledActions" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.enabledActions"></a>

```java
public java.util.List<java.lang.String> getEnabledActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.permissions"></a>

```java
public QuicksightActionConnectorPermissionsList getPermissions();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList">QuicksightActionConnectorPermissionsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.tags"></a>

```java
public QuicksightActionConnectorTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList">QuicksightActionConnectorTagsList</a>

---

##### `actionConnectorIdInput`<sup>Optional</sup> <a name="actionConnectorIdInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.actionConnectorIdInput"></a>

```java
public java.lang.String getActionConnectorIdInput();
```

- *Type:* java.lang.String

---

##### `authenticationConfigInput`<sup>Optional</sup> <a name="authenticationConfigInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.authenticationConfigInput"></a>

```java
public IResolvable|QuicksightActionConnectorAuthenticationConfig getAuthenticationConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig">QuicksightActionConnectorAuthenticationConfig</a>

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.awsAccountIdInput"></a>

```java
public java.lang.String getAwsAccountIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.permissionsInput"></a>

```java
public IResolvable|java.util.List<QuicksightActionConnectorPermissions> getPermissionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions">QuicksightActionConnectorPermissions</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.tagsInput"></a>

```java
public IResolvable|java.util.List<QuicksightActionConnectorTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags">QuicksightActionConnectorTags</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `vpcConnectionArnInput`<sup>Optional</sup> <a name="vpcConnectionArnInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.vpcConnectionArnInput"></a>

```java
public java.lang.String getVpcConnectionArnInput();
```

- *Type:* java.lang.String

---

##### `actionConnectorId`<sup>Required</sup> <a name="actionConnectorId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.actionConnectorId"></a>

```java
public java.lang.String getActionConnectorId();
```

- *Type:* java.lang.String

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `vpcConnectionArn`<sup>Required</sup> <a name="vpcConnectionArn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.vpcConnectionArn"></a>

```java
public java.lang.String getVpcConnectionArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightActionConnectorAuthenticationConfig <a name="QuicksightActionConnectorAuthenticationConfig" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnectorAuthenticationConfig;

QuicksightActionConnectorAuthenticationConfig.builder()
    .authenticationMetadata(QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata)
    .authenticationType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig.property.authenticationMetadata">authenticationMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#authentication_metadata QuicksightActionConnector#authentication_metadata}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#authentication_type QuicksightActionConnector#authentication_type}. |

---

##### `authenticationMetadata`<sup>Required</sup> <a name="authenticationMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig.property.authenticationMetadata"></a>

```java
public QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata getAuthenticationMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#authentication_metadata QuicksightActionConnector#authentication_metadata}.

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#authentication_type QuicksightActionConnector#authentication_type}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata;

QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.builder()
//  .apiKeyConnectionMetadata(QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata)
//  .authorizationCodeGrantMetadata(QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata)
//  .basicAuthConnectionMetadata(QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata)
//  .clientCredentialsGrantMetadata(QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata)
//  .iamConnectionMetadata(QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata)
//  .noneConnectionMetadata(QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.apiKeyConnectionMetadata">apiKeyConnectionMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#api_key_connection_metadata QuicksightActionConnector#api_key_connection_metadata}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.authorizationCodeGrantMetadata">authorizationCodeGrantMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#authorization_code_grant_metadata QuicksightActionConnector#authorization_code_grant_metadata}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.basicAuthConnectionMetadata">basicAuthConnectionMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#basic_auth_connection_metadata QuicksightActionConnector#basic_auth_connection_metadata}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.clientCredentialsGrantMetadata">clientCredentialsGrantMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#client_credentials_grant_metadata QuicksightActionConnector#client_credentials_grant_metadata}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.iamConnectionMetadata">iamConnectionMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#iam_connection_metadata QuicksightActionConnector#iam_connection_metadata}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.noneConnectionMetadata">noneConnectionMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#none_connection_metadata QuicksightActionConnector#none_connection_metadata}. |

---

##### `apiKeyConnectionMetadata`<sup>Optional</sup> <a name="apiKeyConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.apiKeyConnectionMetadata"></a>

```java
public QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata getApiKeyConnectionMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#api_key_connection_metadata QuicksightActionConnector#api_key_connection_metadata}.

---

##### `authorizationCodeGrantMetadata`<sup>Optional</sup> <a name="authorizationCodeGrantMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.authorizationCodeGrantMetadata"></a>

```java
public QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata getAuthorizationCodeGrantMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#authorization_code_grant_metadata QuicksightActionConnector#authorization_code_grant_metadata}.

---

##### `basicAuthConnectionMetadata`<sup>Optional</sup> <a name="basicAuthConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.basicAuthConnectionMetadata"></a>

```java
public QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata getBasicAuthConnectionMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#basic_auth_connection_metadata QuicksightActionConnector#basic_auth_connection_metadata}.

---

##### `clientCredentialsGrantMetadata`<sup>Optional</sup> <a name="clientCredentialsGrantMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.clientCredentialsGrantMetadata"></a>

```java
public QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata getClientCredentialsGrantMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#client_credentials_grant_metadata QuicksightActionConnector#client_credentials_grant_metadata}.

---

##### `iamConnectionMetadata`<sup>Optional</sup> <a name="iamConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.iamConnectionMetadata"></a>

```java
public QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata getIamConnectionMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#iam_connection_metadata QuicksightActionConnector#iam_connection_metadata}.

---

##### `noneConnectionMetadata`<sup>Optional</sup> <a name="noneConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.noneConnectionMetadata"></a>

```java
public QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata getNoneConnectionMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#none_connection_metadata QuicksightActionConnector#none_connection_metadata}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata;

QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata.builder()
//  .apiKey(java.lang.String)
//  .baseEndpoint(java.lang.String)
//  .email(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#api_key QuicksightActionConnector#api_key}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata.property.baseEndpoint">baseEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#email QuicksightActionConnector#email}. |

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#api_key QuicksightActionConnector#api_key}.

---

##### `baseEndpoint`<sup>Optional</sup> <a name="baseEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata.property.baseEndpoint"></a>

```java
public java.lang.String getBaseEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#email QuicksightActionConnector#email}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata;

QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata.builder()
//  .authorizationCodeGrantCredentialsDetails(QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails)
//  .authorizationCodeGrantCredentialsSource(java.lang.String)
//  .baseEndpoint(java.lang.String)
//  .redirectUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata.property.authorizationCodeGrantCredentialsDetails">authorizationCodeGrantCredentialsDetails</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#authorization_code_grant_credentials_details QuicksightActionConnector#authorization_code_grant_credentials_details}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata.property.authorizationCodeGrantCredentialsSource">authorizationCodeGrantCredentialsSource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#authorization_code_grant_credentials_source QuicksightActionConnector#authorization_code_grant_credentials_source}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata.property.baseEndpoint">baseEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata.property.redirectUrl">redirectUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#redirect_url QuicksightActionConnector#redirect_url}. |

---

##### `authorizationCodeGrantCredentialsDetails`<sup>Optional</sup> <a name="authorizationCodeGrantCredentialsDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata.property.authorizationCodeGrantCredentialsDetails"></a>

```java
public QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails getAuthorizationCodeGrantCredentialsDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#authorization_code_grant_credentials_details QuicksightActionConnector#authorization_code_grant_credentials_details}.

---

##### `authorizationCodeGrantCredentialsSource`<sup>Optional</sup> <a name="authorizationCodeGrantCredentialsSource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata.property.authorizationCodeGrantCredentialsSource"></a>

```java
public java.lang.String getAuthorizationCodeGrantCredentialsSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#authorization_code_grant_credentials_source QuicksightActionConnector#authorization_code_grant_credentials_source}.

---

##### `baseEndpoint`<sup>Optional</sup> <a name="baseEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata.property.baseEndpoint"></a>

```java
public java.lang.String getBaseEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}.

---

##### `redirectUrl`<sup>Optional</sup> <a name="redirectUrl" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata.property.redirectUrl"></a>

```java
public java.lang.String getRedirectUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#redirect_url QuicksightActionConnector#redirect_url}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails;

QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails.builder()
//  .authorizationCodeGrantDetails(QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails.property.authorizationCodeGrantDetails">authorizationCodeGrantDetails</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#authorization_code_grant_details QuicksightActionConnector#authorization_code_grant_details}. |

---

##### `authorizationCodeGrantDetails`<sup>Optional</sup> <a name="authorizationCodeGrantDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails.property.authorizationCodeGrantDetails"></a>

```java
public QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails getAuthorizationCodeGrantDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#authorization_code_grant_details QuicksightActionConnector#authorization_code_grant_details}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails;

QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails.builder()
//  .authorizationEndpoint(java.lang.String)
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
//  .tokenEndpoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#authorization_endpoint QuicksightActionConnector#authorization_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#client_id QuicksightActionConnector#client_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#client_secret QuicksightActionConnector#client_secret}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#token_endpoint QuicksightActionConnector#token_endpoint}. |

---

##### `authorizationEndpoint`<sup>Optional</sup> <a name="authorizationEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails.property.authorizationEndpoint"></a>

```java
public java.lang.String getAuthorizationEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#authorization_endpoint QuicksightActionConnector#authorization_endpoint}.

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#client_id QuicksightActionConnector#client_id}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#client_secret QuicksightActionConnector#client_secret}.

---

##### `tokenEndpoint`<sup>Optional</sup> <a name="tokenEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#token_endpoint QuicksightActionConnector#token_endpoint}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata;

QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata.builder()
//  .baseEndpoint(java.lang.String)
//  .password(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata.property.baseEndpoint">baseEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#password QuicksightActionConnector#password}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#username QuicksightActionConnector#username}. |

---

##### `baseEndpoint`<sup>Optional</sup> <a name="baseEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata.property.baseEndpoint"></a>

```java
public java.lang.String getBaseEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#password QuicksightActionConnector#password}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#username QuicksightActionConnector#username}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata;

QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata.builder()
//  .baseEndpoint(java.lang.String)
//  .clientCredentialsDetails(QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails)
//  .clientCredentialsSource(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata.property.baseEndpoint">baseEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata.property.clientCredentialsDetails">clientCredentialsDetails</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#client_credentials_details QuicksightActionConnector#client_credentials_details}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata.property.clientCredentialsSource">clientCredentialsSource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#client_credentials_source QuicksightActionConnector#client_credentials_source}. |

---

##### `baseEndpoint`<sup>Optional</sup> <a name="baseEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata.property.baseEndpoint"></a>

```java
public java.lang.String getBaseEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}.

---

##### `clientCredentialsDetails`<sup>Optional</sup> <a name="clientCredentialsDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata.property.clientCredentialsDetails"></a>

```java
public QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails getClientCredentialsDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#client_credentials_details QuicksightActionConnector#client_credentials_details}.

---

##### `clientCredentialsSource`<sup>Optional</sup> <a name="clientCredentialsSource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata.property.clientCredentialsSource"></a>

```java
public java.lang.String getClientCredentialsSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#client_credentials_source QuicksightActionConnector#client_credentials_source}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails;

QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails.builder()
//  .clientCredentialsGrantDetails(QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails.property.clientCredentialsGrantDetails">clientCredentialsGrantDetails</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#client_credentials_grant_details QuicksightActionConnector#client_credentials_grant_details}. |

---

##### `clientCredentialsGrantDetails`<sup>Optional</sup> <a name="clientCredentialsGrantDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails.property.clientCredentialsGrantDetails"></a>

```java
public QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails getClientCredentialsGrantDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#client_credentials_grant_details QuicksightActionConnector#client_credentials_grant_details}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails;

QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails.builder()
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
//  .tokenEndpoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#client_id QuicksightActionConnector#client_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#client_secret QuicksightActionConnector#client_secret}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#token_endpoint QuicksightActionConnector#token_endpoint}. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#client_id QuicksightActionConnector#client_id}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#client_secret QuicksightActionConnector#client_secret}.

---

##### `tokenEndpoint`<sup>Optional</sup> <a name="tokenEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#token_endpoint QuicksightActionConnector#token_endpoint}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata;

QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata.builder()
//  .roleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#role_arn QuicksightActionConnector#role_arn}. |

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#role_arn QuicksightActionConnector#role_arn}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata;

QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata.builder()
//  .baseEndpoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata.property.baseEndpoint">baseEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}. |

---

##### `baseEndpoint`<sup>Optional</sup> <a name="baseEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata.property.baseEndpoint"></a>

```java
public java.lang.String getBaseEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}.

---

### QuicksightActionConnectorConfig <a name="QuicksightActionConnectorConfig" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnectorConfig;

QuicksightActionConnectorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .actionConnectorId(java.lang.String)
    .authenticationConfig(QuicksightActionConnectorAuthenticationConfig)
    .awsAccountId(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
//  .description(java.lang.String)
//  .permissions(IResolvable|java.util.List<QuicksightActionConnectorPermissions>)
//  .tags(IResolvable|java.util.List<QuicksightActionConnectorTags>)
//  .vpcConnectionArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.actionConnectorId">actionConnectorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#action_connector_id QuicksightActionConnector#action_connector_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.authenticationConfig">authenticationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig">QuicksightActionConnectorAuthenticationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#authentication_config QuicksightActionConnector#authentication_config}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#aws_account_id QuicksightActionConnector#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#name QuicksightActionConnector#name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#type QuicksightActionConnector#type}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#description QuicksightActionConnector#description}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.permissions">permissions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions">QuicksightActionConnectorPermissions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#permissions QuicksightActionConnector#permissions}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags">QuicksightActionConnectorTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#tags QuicksightActionConnector#tags}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.vpcConnectionArn">vpcConnectionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#vpc_connection_arn QuicksightActionConnector#vpc_connection_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actionConnectorId`<sup>Required</sup> <a name="actionConnectorId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.actionConnectorId"></a>

```java
public java.lang.String getActionConnectorId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#action_connector_id QuicksightActionConnector#action_connector_id}.

---

##### `authenticationConfig`<sup>Required</sup> <a name="authenticationConfig" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.authenticationConfig"></a>

```java
public QuicksightActionConnectorAuthenticationConfig getAuthenticationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig">QuicksightActionConnectorAuthenticationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#authentication_config QuicksightActionConnector#authentication_config}.

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#aws_account_id QuicksightActionConnector#aws_account_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#name QuicksightActionConnector#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#type QuicksightActionConnector#type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#description QuicksightActionConnector#description}.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.permissions"></a>

```java
public IResolvable|java.util.List<QuicksightActionConnectorPermissions> getPermissions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions">QuicksightActionConnectorPermissions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#permissions QuicksightActionConnector#permissions}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.tags"></a>

```java
public IResolvable|java.util.List<QuicksightActionConnectorTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags">QuicksightActionConnectorTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#tags QuicksightActionConnector#tags}.

---

##### `vpcConnectionArn`<sup>Optional</sup> <a name="vpcConnectionArn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.vpcConnectionArn"></a>

```java
public java.lang.String getVpcConnectionArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#vpc_connection_arn QuicksightActionConnector#vpc_connection_arn}.

---

### QuicksightActionConnectorPermissions <a name="QuicksightActionConnectorPermissions" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnectorPermissions;

QuicksightActionConnectorPermissions.builder()
//  .actions(java.util.List<java.lang.String>)
//  .principal(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | <p>The IAM action to grant or revoke permissions on.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions.property.principal">principal</a></code> | <code>java.lang.String</code> | <p>The Amazon Resource Name (ARN) of the principal. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

<p>The IAM action to grant or revoke permissions on.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#actions QuicksightActionConnector#actions}

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

<p>The Amazon Resource Name (ARN) of the principal.

This can be one of the
following:</p>
<ul>
<li>
<p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
</li>
<li>
<p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
</li>
<li>
<p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
(This is less common.) </p>
</li>
</ul>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#principal QuicksightActionConnector#principal}

---

### QuicksightActionConnectorTags <a name="QuicksightActionConnectorTags" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnectorTags;

QuicksightActionConnectorTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags.property.key">key</a></code> | <code>java.lang.String</code> | <p>Tag key.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags.property.value">value</a></code> | <code>java.lang.String</code> | <p>Tag value.</p>. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

<p>Tag key.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#key QuicksightActionConnector#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

<p>Tag value.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#value QuicksightActionConnector#value}

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference;

new QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.resetBaseEndpoint">resetBaseEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.resetEmail">resetEmail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiKey` <a name="resetApiKey" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.resetApiKey"></a>

```java
public void resetApiKey()
```

##### `resetBaseEndpoint` <a name="resetBaseEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.resetBaseEndpoint"></a>

```java
public void resetBaseEndpoint()
```

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.resetEmail"></a>

```java
public void resetEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.baseEndpointInput">baseEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.baseEndpoint">baseEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.apiKeyInput"></a>

```java
public java.lang.String getApiKeyInput();
```

- *Type:* java.lang.String

---

##### `baseEndpointInput`<sup>Optional</sup> <a name="baseEndpointInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.baseEndpointInput"></a>

```java
public java.lang.String getBaseEndpointInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

---

##### `baseEndpoint`<sup>Required</sup> <a name="baseEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.baseEndpoint"></a>

```java
public java.lang.String getBaseEndpoint();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata</a>

---


### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference;

new QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resetAuthorizationEndpoint">resetAuthorizationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resetTokenEndpoint">resetTokenEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizationEndpoint` <a name="resetAuthorizationEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resetAuthorizationEndpoint"></a>

```java
public void resetAuthorizationEndpoint()
```

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetTokenEndpoint` <a name="resetTokenEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resetTokenEndpoint"></a>

```java
public void resetTokenEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.authorizationEndpointInput">authorizationEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationEndpointInput`<sup>Optional</sup> <a name="authorizationEndpointInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.authorizationEndpointInput"></a>

```java
public java.lang.String getAuthorizationEndpointInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.tokenEndpointInput"></a>

```java
public java.lang.String getTokenEndpointInput();
```

- *Type:* java.lang.String

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.authorizationEndpoint"></a>

```java
public java.lang.String getAuthorizationEndpoint();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails</a>

---


### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference;

new QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.putAuthorizationCodeGrantDetails">putAuthorizationCodeGrantDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.resetAuthorizationCodeGrantDetails">resetAuthorizationCodeGrantDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizationCodeGrantDetails` <a name="putAuthorizationCodeGrantDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.putAuthorizationCodeGrantDetails"></a>

```java
public void putAuthorizationCodeGrantDetails(QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.putAuthorizationCodeGrantDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails</a>

---

##### `resetAuthorizationCodeGrantDetails` <a name="resetAuthorizationCodeGrantDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.resetAuthorizationCodeGrantDetails"></a>

```java
public void resetAuthorizationCodeGrantDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.authorizationCodeGrantDetails">authorizationCodeGrantDetails</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.authorizationCodeGrantDetailsInput">authorizationCodeGrantDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationCodeGrantDetails`<sup>Required</sup> <a name="authorizationCodeGrantDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.authorizationCodeGrantDetails"></a>

```java
public QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference getAuthorizationCodeGrantDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference</a>

---

##### `authorizationCodeGrantDetailsInput`<sup>Optional</sup> <a name="authorizationCodeGrantDetailsInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.authorizationCodeGrantDetailsInput"></a>

```java
public IResolvable|QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails getAuthorizationCodeGrantDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails</a>

---


### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference;

new QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.putAuthorizationCodeGrantCredentialsDetails">putAuthorizationCodeGrantCredentialsDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resetAuthorizationCodeGrantCredentialsDetails">resetAuthorizationCodeGrantCredentialsDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resetAuthorizationCodeGrantCredentialsSource">resetAuthorizationCodeGrantCredentialsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resetBaseEndpoint">resetBaseEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resetRedirectUrl">resetRedirectUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizationCodeGrantCredentialsDetails` <a name="putAuthorizationCodeGrantCredentialsDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.putAuthorizationCodeGrantCredentialsDetails"></a>

```java
public void putAuthorizationCodeGrantCredentialsDetails(QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.putAuthorizationCodeGrantCredentialsDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails</a>

---

##### `resetAuthorizationCodeGrantCredentialsDetails` <a name="resetAuthorizationCodeGrantCredentialsDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resetAuthorizationCodeGrantCredentialsDetails"></a>

```java
public void resetAuthorizationCodeGrantCredentialsDetails()
```

##### `resetAuthorizationCodeGrantCredentialsSource` <a name="resetAuthorizationCodeGrantCredentialsSource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resetAuthorizationCodeGrantCredentialsSource"></a>

```java
public void resetAuthorizationCodeGrantCredentialsSource()
```

##### `resetBaseEndpoint` <a name="resetBaseEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resetBaseEndpoint"></a>

```java
public void resetBaseEndpoint()
```

##### `resetRedirectUrl` <a name="resetRedirectUrl" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resetRedirectUrl"></a>

```java
public void resetRedirectUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.authorizationCodeGrantCredentialsDetails">authorizationCodeGrantCredentialsDetails</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.authorizationCodeGrantCredentialsDetailsInput">authorizationCodeGrantCredentialsDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.authorizationCodeGrantCredentialsSourceInput">authorizationCodeGrantCredentialsSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.baseEndpointInput">baseEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.redirectUrlInput">redirectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.authorizationCodeGrantCredentialsSource">authorizationCodeGrantCredentialsSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.baseEndpoint">baseEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.redirectUrl">redirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationCodeGrantCredentialsDetails`<sup>Required</sup> <a name="authorizationCodeGrantCredentialsDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.authorizationCodeGrantCredentialsDetails"></a>

```java
public QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference getAuthorizationCodeGrantCredentialsDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference</a>

---

##### `authorizationCodeGrantCredentialsDetailsInput`<sup>Optional</sup> <a name="authorizationCodeGrantCredentialsDetailsInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.authorizationCodeGrantCredentialsDetailsInput"></a>

```java
public IResolvable|QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails getAuthorizationCodeGrantCredentialsDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails</a>

---

##### `authorizationCodeGrantCredentialsSourceInput`<sup>Optional</sup> <a name="authorizationCodeGrantCredentialsSourceInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.authorizationCodeGrantCredentialsSourceInput"></a>

```java
public java.lang.String getAuthorizationCodeGrantCredentialsSourceInput();
```

- *Type:* java.lang.String

---

##### `baseEndpointInput`<sup>Optional</sup> <a name="baseEndpointInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.baseEndpointInput"></a>

```java
public java.lang.String getBaseEndpointInput();
```

- *Type:* java.lang.String

---

##### `redirectUrlInput`<sup>Optional</sup> <a name="redirectUrlInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.redirectUrlInput"></a>

```java
public java.lang.String getRedirectUrlInput();
```

- *Type:* java.lang.String

---

##### `authorizationCodeGrantCredentialsSource`<sup>Required</sup> <a name="authorizationCodeGrantCredentialsSource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.authorizationCodeGrantCredentialsSource"></a>

```java
public java.lang.String getAuthorizationCodeGrantCredentialsSource();
```

- *Type:* java.lang.String

---

##### `baseEndpoint`<sup>Required</sup> <a name="baseEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.baseEndpoint"></a>

```java
public java.lang.String getBaseEndpoint();
```

- *Type:* java.lang.String

---

##### `redirectUrl`<sup>Required</sup> <a name="redirectUrl" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.redirectUrl"></a>

```java
public java.lang.String getRedirectUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata</a>

---


### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference;

new QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.resetBaseEndpoint">resetBaseEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBaseEndpoint` <a name="resetBaseEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.resetBaseEndpoint"></a>

```java
public void resetBaseEndpoint()
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetUsername` <a name="resetUsername" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.baseEndpointInput">baseEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.baseEndpoint">baseEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseEndpointInput`<sup>Optional</sup> <a name="baseEndpointInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.baseEndpointInput"></a>

```java
public java.lang.String getBaseEndpointInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `baseEndpoint`<sup>Required</sup> <a name="baseEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.baseEndpoint"></a>

```java
public java.lang.String getBaseEndpoint();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata</a>

---


### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference;

new QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.resetTokenEndpoint">resetTokenEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetTokenEndpoint` <a name="resetTokenEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.resetTokenEndpoint"></a>

```java
public void resetTokenEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.tokenEndpointInput"></a>

```java
public java.lang.String getTokenEndpointInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails</a>

---


### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference;

new QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.putClientCredentialsGrantDetails">putClientCredentialsGrantDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.resetClientCredentialsGrantDetails">resetClientCredentialsGrantDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientCredentialsGrantDetails` <a name="putClientCredentialsGrantDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.putClientCredentialsGrantDetails"></a>

```java
public void putClientCredentialsGrantDetails(QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.putClientCredentialsGrantDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails</a>

---

##### `resetClientCredentialsGrantDetails` <a name="resetClientCredentialsGrantDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.resetClientCredentialsGrantDetails"></a>

```java
public void resetClientCredentialsGrantDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.clientCredentialsGrantDetails">clientCredentialsGrantDetails</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.clientCredentialsGrantDetailsInput">clientCredentialsGrantDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientCredentialsGrantDetails`<sup>Required</sup> <a name="clientCredentialsGrantDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.clientCredentialsGrantDetails"></a>

```java
public QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference getClientCredentialsGrantDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference</a>

---

##### `clientCredentialsGrantDetailsInput`<sup>Optional</sup> <a name="clientCredentialsGrantDetailsInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.clientCredentialsGrantDetailsInput"></a>

```java
public IResolvable|QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails getClientCredentialsGrantDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails</a>

---


### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference;

new QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.putClientCredentialsDetails">putClientCredentialsDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.resetBaseEndpoint">resetBaseEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.resetClientCredentialsDetails">resetClientCredentialsDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.resetClientCredentialsSource">resetClientCredentialsSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientCredentialsDetails` <a name="putClientCredentialsDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.putClientCredentialsDetails"></a>

```java
public void putClientCredentialsDetails(QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.putClientCredentialsDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails</a>

---

##### `resetBaseEndpoint` <a name="resetBaseEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.resetBaseEndpoint"></a>

```java
public void resetBaseEndpoint()
```

##### `resetClientCredentialsDetails` <a name="resetClientCredentialsDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.resetClientCredentialsDetails"></a>

```java
public void resetClientCredentialsDetails()
```

##### `resetClientCredentialsSource` <a name="resetClientCredentialsSource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.resetClientCredentialsSource"></a>

```java
public void resetClientCredentialsSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.clientCredentialsDetails">clientCredentialsDetails</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.baseEndpointInput">baseEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.clientCredentialsDetailsInput">clientCredentialsDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.clientCredentialsSourceInput">clientCredentialsSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.baseEndpoint">baseEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.clientCredentialsSource">clientCredentialsSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientCredentialsDetails`<sup>Required</sup> <a name="clientCredentialsDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.clientCredentialsDetails"></a>

```java
public QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference getClientCredentialsDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference</a>

---

##### `baseEndpointInput`<sup>Optional</sup> <a name="baseEndpointInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.baseEndpointInput"></a>

```java
public java.lang.String getBaseEndpointInput();
```

- *Type:* java.lang.String

---

##### `clientCredentialsDetailsInput`<sup>Optional</sup> <a name="clientCredentialsDetailsInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.clientCredentialsDetailsInput"></a>

```java
public IResolvable|QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails getClientCredentialsDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails</a>

---

##### `clientCredentialsSourceInput`<sup>Optional</sup> <a name="clientCredentialsSourceInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.clientCredentialsSourceInput"></a>

```java
public java.lang.String getClientCredentialsSourceInput();
```

- *Type:* java.lang.String

---

##### `baseEndpoint`<sup>Required</sup> <a name="baseEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.baseEndpoint"></a>

```java
public java.lang.String getBaseEndpoint();
```

- *Type:* java.lang.String

---

##### `clientCredentialsSource`<sup>Required</sup> <a name="clientCredentialsSource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.clientCredentialsSource"></a>

```java
public java.lang.String getClientCredentialsSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata</a>

---


### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference;

new QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata</a>

---


### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference;

new QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.resetBaseEndpoint">resetBaseEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBaseEndpoint` <a name="resetBaseEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.resetBaseEndpoint"></a>

```java
public void resetBaseEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.baseEndpointInput">baseEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.baseEndpoint">baseEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseEndpointInput`<sup>Optional</sup> <a name="baseEndpointInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.baseEndpointInput"></a>

```java
public java.lang.String getBaseEndpointInput();
```

- *Type:* java.lang.String

---

##### `baseEndpoint`<sup>Required</sup> <a name="baseEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.baseEndpoint"></a>

```java
public java.lang.String getBaseEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata</a>

---


### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference;

new QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putApiKeyConnectionMetadata">putApiKeyConnectionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putAuthorizationCodeGrantMetadata">putAuthorizationCodeGrantMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putBasicAuthConnectionMetadata">putBasicAuthConnectionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putClientCredentialsGrantMetadata">putClientCredentialsGrantMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putIamConnectionMetadata">putIamConnectionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putNoneConnectionMetadata">putNoneConnectionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetApiKeyConnectionMetadata">resetApiKeyConnectionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetAuthorizationCodeGrantMetadata">resetAuthorizationCodeGrantMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetBasicAuthConnectionMetadata">resetBasicAuthConnectionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetClientCredentialsGrantMetadata">resetClientCredentialsGrantMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetIamConnectionMetadata">resetIamConnectionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetNoneConnectionMetadata">resetNoneConnectionMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKeyConnectionMetadata` <a name="putApiKeyConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putApiKeyConnectionMetadata"></a>

```java
public void putApiKeyConnectionMetadata(QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putApiKeyConnectionMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata</a>

---

##### `putAuthorizationCodeGrantMetadata` <a name="putAuthorizationCodeGrantMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putAuthorizationCodeGrantMetadata"></a>

```java
public void putAuthorizationCodeGrantMetadata(QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putAuthorizationCodeGrantMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata</a>

---

##### `putBasicAuthConnectionMetadata` <a name="putBasicAuthConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putBasicAuthConnectionMetadata"></a>

```java
public void putBasicAuthConnectionMetadata(QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putBasicAuthConnectionMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata</a>

---

##### `putClientCredentialsGrantMetadata` <a name="putClientCredentialsGrantMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putClientCredentialsGrantMetadata"></a>

```java
public void putClientCredentialsGrantMetadata(QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putClientCredentialsGrantMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata</a>

---

##### `putIamConnectionMetadata` <a name="putIamConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putIamConnectionMetadata"></a>

```java
public void putIamConnectionMetadata(QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putIamConnectionMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata</a>

---

##### `putNoneConnectionMetadata` <a name="putNoneConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putNoneConnectionMetadata"></a>

```java
public void putNoneConnectionMetadata(QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putNoneConnectionMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata</a>

---

##### `resetApiKeyConnectionMetadata` <a name="resetApiKeyConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetApiKeyConnectionMetadata"></a>

```java
public void resetApiKeyConnectionMetadata()
```

##### `resetAuthorizationCodeGrantMetadata` <a name="resetAuthorizationCodeGrantMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetAuthorizationCodeGrantMetadata"></a>

```java
public void resetAuthorizationCodeGrantMetadata()
```

##### `resetBasicAuthConnectionMetadata` <a name="resetBasicAuthConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetBasicAuthConnectionMetadata"></a>

```java
public void resetBasicAuthConnectionMetadata()
```

##### `resetClientCredentialsGrantMetadata` <a name="resetClientCredentialsGrantMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetClientCredentialsGrantMetadata"></a>

```java
public void resetClientCredentialsGrantMetadata()
```

##### `resetIamConnectionMetadata` <a name="resetIamConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetIamConnectionMetadata"></a>

```java
public void resetIamConnectionMetadata()
```

##### `resetNoneConnectionMetadata` <a name="resetNoneConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetNoneConnectionMetadata"></a>

```java
public void resetNoneConnectionMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.apiKeyConnectionMetadata">apiKeyConnectionMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.authorizationCodeGrantMetadata">authorizationCodeGrantMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.basicAuthConnectionMetadata">basicAuthConnectionMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.clientCredentialsGrantMetadata">clientCredentialsGrantMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.iamConnectionMetadata">iamConnectionMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.noneConnectionMetadata">noneConnectionMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.apiKeyConnectionMetadataInput">apiKeyConnectionMetadataInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.authorizationCodeGrantMetadataInput">authorizationCodeGrantMetadataInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.basicAuthConnectionMetadataInput">basicAuthConnectionMetadataInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.clientCredentialsGrantMetadataInput">clientCredentialsGrantMetadataInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.iamConnectionMetadataInput">iamConnectionMetadataInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.noneConnectionMetadataInput">noneConnectionMetadataInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKeyConnectionMetadata`<sup>Required</sup> <a name="apiKeyConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.apiKeyConnectionMetadata"></a>

```java
public QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference getApiKeyConnectionMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference</a>

---

##### `authorizationCodeGrantMetadata`<sup>Required</sup> <a name="authorizationCodeGrantMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.authorizationCodeGrantMetadata"></a>

```java
public QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference getAuthorizationCodeGrantMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference</a>

---

##### `basicAuthConnectionMetadata`<sup>Required</sup> <a name="basicAuthConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.basicAuthConnectionMetadata"></a>

```java
public QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference getBasicAuthConnectionMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference</a>

---

##### `clientCredentialsGrantMetadata`<sup>Required</sup> <a name="clientCredentialsGrantMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.clientCredentialsGrantMetadata"></a>

```java
public QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference getClientCredentialsGrantMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference</a>

---

##### `iamConnectionMetadata`<sup>Required</sup> <a name="iamConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.iamConnectionMetadata"></a>

```java
public QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference getIamConnectionMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference</a>

---

##### `noneConnectionMetadata`<sup>Required</sup> <a name="noneConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.noneConnectionMetadata"></a>

```java
public QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference getNoneConnectionMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference</a>

---

##### `apiKeyConnectionMetadataInput`<sup>Optional</sup> <a name="apiKeyConnectionMetadataInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.apiKeyConnectionMetadataInput"></a>

```java
public IResolvable|QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata getApiKeyConnectionMetadataInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata</a>

---

##### `authorizationCodeGrantMetadataInput`<sup>Optional</sup> <a name="authorizationCodeGrantMetadataInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.authorizationCodeGrantMetadataInput"></a>

```java
public IResolvable|QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata getAuthorizationCodeGrantMetadataInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata</a>

---

##### `basicAuthConnectionMetadataInput`<sup>Optional</sup> <a name="basicAuthConnectionMetadataInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.basicAuthConnectionMetadataInput"></a>

```java
public IResolvable|QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata getBasicAuthConnectionMetadataInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata</a>

---

##### `clientCredentialsGrantMetadataInput`<sup>Optional</sup> <a name="clientCredentialsGrantMetadataInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.clientCredentialsGrantMetadataInput"></a>

```java
public IResolvable|QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata getClientCredentialsGrantMetadataInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata</a>

---

##### `iamConnectionMetadataInput`<sup>Optional</sup> <a name="iamConnectionMetadataInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.iamConnectionMetadataInput"></a>

```java
public IResolvable|QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata getIamConnectionMetadataInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata</a>

---

##### `noneConnectionMetadataInput`<sup>Optional</sup> <a name="noneConnectionMetadataInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.noneConnectionMetadataInput"></a>

```java
public IResolvable|QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata getNoneConnectionMetadataInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata</a>

---


### QuicksightActionConnectorAuthenticationConfigOutputReference <a name="QuicksightActionConnectorAuthenticationConfigOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnectorAuthenticationConfigOutputReference;

new QuicksightActionConnectorAuthenticationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.putAuthenticationMetadata">putAuthenticationMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthenticationMetadata` <a name="putAuthenticationMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.putAuthenticationMetadata"></a>

```java
public void putAuthenticationMetadata(QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.putAuthenticationMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.authenticationMetadata">authenticationMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.authenticationMetadataInput">authenticationMetadataInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig">QuicksightActionConnectorAuthenticationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticationMetadata`<sup>Required</sup> <a name="authenticationMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.authenticationMetadata"></a>

```java
public QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference getAuthenticationMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference</a>

---

##### `authenticationMetadataInput`<sup>Optional</sup> <a name="authenticationMetadataInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.authenticationMetadataInput"></a>

```java
public IResolvable|QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata getAuthenticationMetadataInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata</a>

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.authenticationTypeInput"></a>

```java
public java.lang.String getAuthenticationTypeInput();
```

- *Type:* java.lang.String

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightActionConnectorAuthenticationConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig">QuicksightActionConnectorAuthenticationConfig</a>

---


### QuicksightActionConnectorPermissionsList <a name="QuicksightActionConnectorPermissionsList" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnectorPermissionsList;

new QuicksightActionConnectorPermissionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.get"></a>

```java
public QuicksightActionConnectorPermissionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions">QuicksightActionConnectorPermissions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightActionConnectorPermissions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions">QuicksightActionConnectorPermissions</a>>

---


### QuicksightActionConnectorPermissionsOutputReference <a name="QuicksightActionConnectorPermissionsOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnectorPermissionsOutputReference;

new QuicksightActionConnectorPermissionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.resetPrincipal">resetPrincipal</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActions` <a name="resetActions" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.resetActions"></a>

```java
public void resetActions()
```

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.resetPrincipal"></a>

```java
public void resetPrincipal()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.actionsInput">actionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.principalInput">principalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.principal">principal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions">QuicksightActionConnectorPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.actionsInput"></a>

```java
public java.util.List<java.lang.String> getActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.principalInput"></a>

```java
public java.lang.String getPrincipalInput();
```

- *Type:* java.lang.String

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightActionConnectorPermissions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions">QuicksightActionConnectorPermissions</a>

---


### QuicksightActionConnectorTagsList <a name="QuicksightActionConnectorTagsList" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnectorTagsList;

new QuicksightActionConnectorTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.get"></a>

```java
public QuicksightActionConnectorTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags">QuicksightActionConnectorTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightActionConnectorTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags">QuicksightActionConnectorTags</a>>

---


### QuicksightActionConnectorTagsOutputReference <a name="QuicksightActionConnectorTagsOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_action_connector.QuicksightActionConnectorTagsOutputReference;

new QuicksightActionConnectorTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags">QuicksightActionConnectorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightActionConnectorTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags">QuicksightActionConnectorTags</a>

---



