# `ssoInstanceAccessControlAttributeConfiguration` Submodule <a name="`ssoInstanceAccessControlAttributeConfiguration` Submodule" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoInstanceAccessControlAttributeConfiguration <a name="SsoInstanceAccessControlAttributeConfiguration" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration awscc_sso_instance_access_control_attribute_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.sso_instance_access_control_attribute_configuration.SsoInstanceAccessControlAttributeConfiguration;

SsoInstanceAccessControlAttributeConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceArn(java.lang.String)
//  .accessControlAttributes(IResolvable|java.util.List<SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes>)
//  .instanceAccessControlAttributeConfiguration(SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | The ARN of the AWS SSO instance under which the operation will be executed. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.accessControlAttributes">accessControlAttributes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#access_control_attributes SsoInstanceAccessControlAttributeConfiguration#access_control_attributes}. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.instanceAccessControlAttributeConfiguration">instanceAccessControlAttributeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration</a></code> | The InstanceAccessControlAttributeConfiguration property has been deprecated but is still supported for backwards compatibility purposes. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.instanceArn"></a>

- *Type:* java.lang.String

The ARN of the AWS SSO instance under which the operation will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#instance_arn SsoInstanceAccessControlAttributeConfiguration#instance_arn}

---

##### `accessControlAttributes`<sup>Optional</sup> <a name="accessControlAttributes" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.accessControlAttributes"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#access_control_attributes SsoInstanceAccessControlAttributeConfiguration#access_control_attributes}.

---

##### `instanceAccessControlAttributeConfiguration`<sup>Optional</sup> <a name="instanceAccessControlAttributeConfiguration" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.instanceAccessControlAttributeConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration</a>

The InstanceAccessControlAttributeConfiguration property has been deprecated but is still supported for backwards compatibility purposes.

We recomend that you use  AccessControlAttributes property instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#instance_access_control_attribute_configuration SsoInstanceAccessControlAttributeConfiguration#instance_access_control_attribute_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.putAccessControlAttributes">putAccessControlAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.putInstanceAccessControlAttributeConfiguration">putInstanceAccessControlAttributeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.resetAccessControlAttributes">resetAccessControlAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.resetInstanceAccessControlAttributeConfiguration">resetInstanceAccessControlAttributeConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessControlAttributes` <a name="putAccessControlAttributes" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.putAccessControlAttributes"></a>

```java
public void putAccessControlAttributes(IResolvable|java.util.List<SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.putAccessControlAttributes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>>

---

##### `putInstanceAccessControlAttributeConfiguration` <a name="putInstanceAccessControlAttributeConfiguration" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.putInstanceAccessControlAttributeConfiguration"></a>

```java
public void putInstanceAccessControlAttributeConfiguration(SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.putInstanceAccessControlAttributeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration</a>

---

##### `resetAccessControlAttributes` <a name="resetAccessControlAttributes" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.resetAccessControlAttributes"></a>

```java
public void resetAccessControlAttributes()
```

##### `resetInstanceAccessControlAttributeConfiguration` <a name="resetInstanceAccessControlAttributeConfiguration" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.resetInstanceAccessControlAttributeConfiguration"></a>

```java
public void resetInstanceAccessControlAttributeConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SsoInstanceAccessControlAttributeConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.awscc.sso_instance_access_control_attribute_configuration.SsoInstanceAccessControlAttributeConfiguration;

SsoInstanceAccessControlAttributeConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.sso_instance_access_control_attribute_configuration.SsoInstanceAccessControlAttributeConfiguration;

SsoInstanceAccessControlAttributeConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.sso_instance_access_control_attribute_configuration.SsoInstanceAccessControlAttributeConfiguration;

SsoInstanceAccessControlAttributeConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.sso_instance_access_control_attribute_configuration.SsoInstanceAccessControlAttributeConfiguration;

SsoInstanceAccessControlAttributeConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SsoInstanceAccessControlAttributeConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SsoInstanceAccessControlAttributeConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SsoInstanceAccessControlAttributeConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SsoInstanceAccessControlAttributeConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SsoInstanceAccessControlAttributeConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.accessControlAttributes">accessControlAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.instanceAccessControlAttributeConfiguration">instanceAccessControlAttributeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.accessControlAttributesInput">accessControlAttributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.instanceAccessControlAttributeConfigurationInput">instanceAccessControlAttributeConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.instanceArnInput">instanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessControlAttributes`<sup>Required</sup> <a name="accessControlAttributes" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.accessControlAttributes"></a>

```java
public SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList getAccessControlAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceAccessControlAttributeConfiguration`<sup>Required</sup> <a name="instanceAccessControlAttributeConfiguration" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.instanceAccessControlAttributeConfiguration"></a>

```java
public SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference getInstanceAccessControlAttributeConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference</a>

---

##### `accessControlAttributesInput`<sup>Optional</sup> <a name="accessControlAttributesInput" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.accessControlAttributesInput"></a>

```java
public IResolvable|java.util.List<SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes> getAccessControlAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>>

---

##### `instanceAccessControlAttributeConfigurationInput`<sup>Optional</sup> <a name="instanceAccessControlAttributeConfigurationInput" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.instanceAccessControlAttributeConfigurationInput"></a>

```java
public IResolvable|SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration getInstanceAccessControlAttributeConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration</a>

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.instanceArnInput"></a>

```java
public java.lang.String getInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes <a name="SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.sso_instance_access_control_attribute_configuration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes;

SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes.builder()
//  .key(java.lang.String)
//  .value(SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#key SsoInstanceAccessControlAttributeConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#value SsoInstanceAccessControlAttributeConfiguration#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#key SsoInstanceAccessControlAttributeConfiguration#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes.property.value"></a>

```java
public SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue getValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#value SsoInstanceAccessControlAttributeConfiguration#value}.

---

### SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue <a name="SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue.Initializer"></a>

```java
import io.cdktn.providers.awscc.sso_instance_access_control_attribute_configuration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue;

SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue.builder()
//  .source(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue.property.source">source</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#source SsoInstanceAccessControlAttributeConfiguration#source}. |

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue.property.source"></a>

```java
public java.util.List<java.lang.String> getSource();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#source SsoInstanceAccessControlAttributeConfiguration#source}.

---

### SsoInstanceAccessControlAttributeConfigurationConfig <a name="SsoInstanceAccessControlAttributeConfigurationConfig" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sso_instance_access_control_attribute_configuration.SsoInstanceAccessControlAttributeConfigurationConfig;

SsoInstanceAccessControlAttributeConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceArn(java.lang.String)
//  .accessControlAttributes(IResolvable|java.util.List<SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes>)
//  .instanceAccessControlAttributeConfiguration(SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | The ARN of the AWS SSO instance under which the operation will be executed. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.accessControlAttributes">accessControlAttributes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#access_control_attributes SsoInstanceAccessControlAttributeConfiguration#access_control_attributes}. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.instanceAccessControlAttributeConfiguration">instanceAccessControlAttributeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration</a></code> | The InstanceAccessControlAttributeConfiguration property has been deprecated but is still supported for backwards compatibility purposes. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

The ARN of the AWS SSO instance under which the operation will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#instance_arn SsoInstanceAccessControlAttributeConfiguration#instance_arn}

---

##### `accessControlAttributes`<sup>Optional</sup> <a name="accessControlAttributes" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.accessControlAttributes"></a>

```java
public IResolvable|java.util.List<SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes> getAccessControlAttributes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#access_control_attributes SsoInstanceAccessControlAttributeConfiguration#access_control_attributes}.

---

##### `instanceAccessControlAttributeConfiguration`<sup>Optional</sup> <a name="instanceAccessControlAttributeConfiguration" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.instanceAccessControlAttributeConfiguration"></a>

```java
public SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration getInstanceAccessControlAttributeConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration</a>

The InstanceAccessControlAttributeConfiguration property has been deprecated but is still supported for backwards compatibility purposes.

We recomend that you use  AccessControlAttributes property instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#instance_access_control_attribute_configuration SsoInstanceAccessControlAttributeConfiguration#instance_access_control_attribute_configuration}

---

### SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration <a name="SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.sso_instance_access_control_attribute_configuration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration;

SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration.builder()
//  .accessControlAttributes(IResolvable|java.util.List<SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration.property.accessControlAttributes">accessControlAttributes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#access_control_attributes SsoInstanceAccessControlAttributeConfiguration#access_control_attributes}. |

---

##### `accessControlAttributes`<sup>Optional</sup> <a name="accessControlAttributes" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration.property.accessControlAttributes"></a>

```java
public IResolvable|java.util.List<SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes> getAccessControlAttributes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#access_control_attributes SsoInstanceAccessControlAttributeConfiguration#access_control_attributes}.

---

### SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes <a name="SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.sso_instance_access_control_attribute_configuration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes;

SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes.builder()
//  .key(java.lang.String)
//  .value(SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#key SsoInstanceAccessControlAttributeConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#value SsoInstanceAccessControlAttributeConfiguration#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#key SsoInstanceAccessControlAttributeConfiguration#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes.property.value"></a>

```java
public SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue getValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#value SsoInstanceAccessControlAttributeConfiguration#value}.

---

### SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue <a name="SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue.Initializer"></a>

```java
import io.cdktn.providers.awscc.sso_instance_access_control_attribute_configuration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue;

SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue.builder()
//  .source(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue.property.source">source</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#source SsoInstanceAccessControlAttributeConfiguration#source}. |

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue.property.source"></a>

```java
public java.util.List<java.lang.String> getSource();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_instance_access_control_attribute_configuration#source SsoInstanceAccessControlAttributeConfiguration#source}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList <a name="SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sso_instance_access_control_attribute_configuration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList;

new SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.get"></a>

```java
public SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>>

---


### SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference <a name="SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sso_instance_access_control_attribute_configuration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference;

new SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.putValue"></a>

```java
public void putValue(SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a>

---

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.value"></a>

```java
public SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference getValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference</a>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.valueInput"></a>

```java
public IResolvable|SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue getValueInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>

---


### SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference <a name="SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sso_instance_access_control_attribute_configuration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference;

new SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSource` <a name="resetSource" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resetSource"></a>

```java
public void resetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.source">source</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.sourceInput"></a>

```java
public java.util.List<java.lang.String> getSourceInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.source"></a>

```java
public java.util.List<java.lang.String> getSource();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.internalValue"></a>

```java
public IResolvable|SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a>

---


### SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList <a name="SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sso_instance_access_control_attribute_configuration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList;

new SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.get"></a>

```java
public SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>>

---


### SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference <a name="SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sso_instance_access_control_attribute_configuration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference;

new SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.putValue"></a>

```java
public void putValue(SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a>

---

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.value"></a>

```java
public SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference getValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference</a>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.valueInput"></a>

```java
public IResolvable|SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue getValueInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>

---


### SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference <a name="SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sso_instance_access_control_attribute_configuration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference;

new SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSource` <a name="resetSource" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resetSource"></a>

```java
public void resetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.source">source</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.sourceInput"></a>

```java
public java.util.List<java.lang.String> getSourceInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.source"></a>

```java
public java.util.List<java.lang.String> getSource();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.internalValue"></a>

```java
public IResolvable|SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a>

---


### SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference <a name="SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sso_instance_access_control_attribute_configuration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference;

new SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.putAccessControlAttributes">putAccessControlAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.resetAccessControlAttributes">resetAccessControlAttributes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessControlAttributes` <a name="putAccessControlAttributes" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.putAccessControlAttributes"></a>

```java
public void putAccessControlAttributes(IResolvable|java.util.List<SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.putAccessControlAttributes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>>

---

##### `resetAccessControlAttributes` <a name="resetAccessControlAttributes" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.resetAccessControlAttributes"></a>

```java
public void resetAccessControlAttributes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.accessControlAttributes">accessControlAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.accessControlAttributesInput">accessControlAttributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessControlAttributes`<sup>Required</sup> <a name="accessControlAttributes" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.accessControlAttributes"></a>

```java
public SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList getAccessControlAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList</a>

---

##### `accessControlAttributesInput`<sup>Optional</sup> <a name="accessControlAttributesInput" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.accessControlAttributesInput"></a>

```java
public IResolvable|java.util.List<SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes> getAccessControlAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration</a>

---



