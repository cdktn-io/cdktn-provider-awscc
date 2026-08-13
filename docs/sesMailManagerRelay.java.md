# `sesMailManagerRelay` Submodule <a name="`sesMailManagerRelay` Submodule" id="@cdktn/provider-awscc.sesMailManagerRelay"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesMailManagerRelay <a name="SesMailManagerRelay" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay awscc_ses_mail_manager_relay}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_mail_manager_relay.SesMailManagerRelay;

SesMailManagerRelay.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authentication(SesMailManagerRelayAuthentication)
    .serverName(java.lang.String)
    .serverPort(java.lang.Number)
//  .relayName(java.lang.String)
//  .tags(IResolvable|java.util.List<SesMailManagerRelayTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthentication">SesMailManagerRelayAuthentication</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#authentication SesMailManagerRelay#authentication}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.serverName">serverName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#server_name SesMailManagerRelay#server_name}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.serverPort">serverPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#server_port SesMailManagerRelay#server_port}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.relayName">relayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#relay_name SesMailManagerRelay#relay_name}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTags">SesMailManagerRelayTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#tags SesMailManagerRelay#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.authentication"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthentication">SesMailManagerRelayAuthentication</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#authentication SesMailManagerRelay#authentication}.

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.serverName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#server_name SesMailManagerRelay#server_name}.

---

##### `serverPort`<sup>Required</sup> <a name="serverPort" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.serverPort"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#server_port SesMailManagerRelay#server_port}.

---

##### `relayName`<sup>Optional</sup> <a name="relayName" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.relayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#relay_name SesMailManagerRelay#relay_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTags">SesMailManagerRelayTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#tags SesMailManagerRelay#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.putAuthentication">putAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.resetRelayName">resetRelayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthentication` <a name="putAuthentication" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.putAuthentication"></a>

```java
public void putAuthentication(SesMailManagerRelayAuthentication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthentication">SesMailManagerRelayAuthentication</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SesMailManagerRelayTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTags">SesMailManagerRelayTags</a>>

---

##### `resetRelayName` <a name="resetRelayName" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.resetRelayName"></a>

```java
public void resetRelayName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SesMailManagerRelay resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ses_mail_manager_relay.SesMailManagerRelay;

SesMailManagerRelay.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ses_mail_manager_relay.SesMailManagerRelay;

SesMailManagerRelay.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ses_mail_manager_relay.SesMailManagerRelay;

SesMailManagerRelay.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ses_mail_manager_relay.SesMailManagerRelay;

SesMailManagerRelay.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SesMailManagerRelay.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SesMailManagerRelay resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SesMailManagerRelay to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SesMailManagerRelay that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SesMailManagerRelay to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference">SesMailManagerRelayAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.relayArn">relayArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.relayId">relayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList">SesMailManagerRelayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.authenticationInput">authenticationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthentication">SesMailManagerRelayAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.relayNameInput">relayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.serverNameInput">serverNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.serverPortInput">serverPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTags">SesMailManagerRelayTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.relayName">relayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.serverPort">serverPort</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.authentication"></a>

```java
public SesMailManagerRelayAuthenticationOutputReference getAuthentication();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference">SesMailManagerRelayAuthenticationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `relayArn`<sup>Required</sup> <a name="relayArn" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.relayArn"></a>

```java
public java.lang.String getRelayArn();
```

- *Type:* java.lang.String

---

##### `relayId`<sup>Required</sup> <a name="relayId" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.relayId"></a>

```java
public java.lang.String getRelayId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.tags"></a>

```java
public SesMailManagerRelayTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList">SesMailManagerRelayTagsList</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.authenticationInput"></a>

```java
public IResolvable|SesMailManagerRelayAuthentication getAuthenticationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthentication">SesMailManagerRelayAuthentication</a>

---

##### `relayNameInput`<sup>Optional</sup> <a name="relayNameInput" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.relayNameInput"></a>

```java
public java.lang.String getRelayNameInput();
```

- *Type:* java.lang.String

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.serverNameInput"></a>

```java
public java.lang.String getServerNameInput();
```

- *Type:* java.lang.String

---

##### `serverPortInput`<sup>Optional</sup> <a name="serverPortInput" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.serverPortInput"></a>

```java
public java.lang.Number getServerPortInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SesMailManagerRelayTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTags">SesMailManagerRelayTags</a>>

---

##### `relayName`<sup>Required</sup> <a name="relayName" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.relayName"></a>

```java
public java.lang.String getRelayName();
```

- *Type:* java.lang.String

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `serverPort`<sup>Required</sup> <a name="serverPort" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.serverPort"></a>

```java
public java.lang.Number getServerPort();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SesMailManagerRelayAuthentication <a name="SesMailManagerRelayAuthentication" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthentication.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_mail_manager_relay.SesMailManagerRelayAuthentication;

SesMailManagerRelayAuthentication.builder()
//  .noAuthentication(java.lang.String)
//  .secretArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthentication.property.noAuthentication">noAuthentication</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#no_authentication SesMailManagerRelay#no_authentication}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthentication.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#secret_arn SesMailManagerRelay#secret_arn}. |

---

##### `noAuthentication`<sup>Optional</sup> <a name="noAuthentication" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthentication.property.noAuthentication"></a>

```java
public java.lang.String getNoAuthentication();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#no_authentication SesMailManagerRelay#no_authentication}.

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthentication.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#secret_arn SesMailManagerRelay#secret_arn}.

---

### SesMailManagerRelayConfig <a name="SesMailManagerRelayConfig" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_mail_manager_relay.SesMailManagerRelayConfig;

SesMailManagerRelayConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authentication(SesMailManagerRelayAuthentication)
    .serverName(java.lang.String)
    .serverPort(java.lang.Number)
//  .relayName(java.lang.String)
//  .tags(IResolvable|java.util.List<SesMailManagerRelayTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthentication">SesMailManagerRelayAuthentication</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#authentication SesMailManagerRelay#authentication}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.serverName">serverName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#server_name SesMailManagerRelay#server_name}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.serverPort">serverPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#server_port SesMailManagerRelay#server_port}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.relayName">relayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#relay_name SesMailManagerRelay#relay_name}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTags">SesMailManagerRelayTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#tags SesMailManagerRelay#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.authentication"></a>

```java
public SesMailManagerRelayAuthentication getAuthentication();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthentication">SesMailManagerRelayAuthentication</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#authentication SesMailManagerRelay#authentication}.

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#server_name SesMailManagerRelay#server_name}.

---

##### `serverPort`<sup>Required</sup> <a name="serverPort" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.serverPort"></a>

```java
public java.lang.Number getServerPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#server_port SesMailManagerRelay#server_port}.

---

##### `relayName`<sup>Optional</sup> <a name="relayName" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.relayName"></a>

```java
public java.lang.String getRelayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#relay_name SesMailManagerRelay#relay_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SesMailManagerRelayTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTags">SesMailManagerRelayTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#tags SesMailManagerRelay#tags}.

---

### SesMailManagerRelayTags <a name="SesMailManagerRelayTags" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_mail_manager_relay.SesMailManagerRelayTags;

SesMailManagerRelayTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#key SesMailManagerRelay#key}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#value SesMailManagerRelay#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#key SesMailManagerRelay#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#value SesMailManagerRelay#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SesMailManagerRelayAuthenticationOutputReference <a name="SesMailManagerRelayAuthenticationOutputReference" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_mail_manager_relay.SesMailManagerRelayAuthenticationOutputReference;

new SesMailManagerRelayAuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.resetNoAuthentication">resetNoAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNoAuthentication` <a name="resetNoAuthentication" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.resetNoAuthentication"></a>

```java
public void resetNoAuthentication()
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.resetSecretArn"></a>

```java
public void resetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.property.noAuthenticationInput">noAuthenticationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.property.noAuthentication">noAuthentication</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthentication">SesMailManagerRelayAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `noAuthenticationInput`<sup>Optional</sup> <a name="noAuthenticationInput" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.property.noAuthenticationInput"></a>

```java
public java.lang.String getNoAuthenticationInput();
```

- *Type:* java.lang.String

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.property.secretArnInput"></a>

```java
public java.lang.String getSecretArnInput();
```

- *Type:* java.lang.String

---

##### `noAuthentication`<sup>Required</sup> <a name="noAuthentication" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.property.noAuthentication"></a>

```java
public java.lang.String getNoAuthentication();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.property.internalValue"></a>

```java
public IResolvable|SesMailManagerRelayAuthentication getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthentication">SesMailManagerRelayAuthentication</a>

---


### SesMailManagerRelayTagsList <a name="SesMailManagerRelayTagsList" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_mail_manager_relay.SesMailManagerRelayTagsList;

new SesMailManagerRelayTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.get"></a>

```java
public SesMailManagerRelayTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTags">SesMailManagerRelayTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SesMailManagerRelayTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTags">SesMailManagerRelayTags</a>>

---


### SesMailManagerRelayTagsOutputReference <a name="SesMailManagerRelayTagsOutputReference" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_mail_manager_relay.SesMailManagerRelayTagsOutputReference;

new SesMailManagerRelayTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTags">SesMailManagerRelayTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SesMailManagerRelayTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTags">SesMailManagerRelayTags</a>

---



