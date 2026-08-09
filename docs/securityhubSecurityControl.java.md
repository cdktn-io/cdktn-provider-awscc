# `securityhubSecurityControl` Submodule <a name="`securityhubSecurityControl` Submodule" id="@cdktn/provider-awscc.securityhubSecurityControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubSecurityControl <a name="SecurityhubSecurityControl" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_security_control awscc_securityhub_security_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityhub_security_control.SecurityhubSecurityControl;

SecurityhubSecurityControl.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .parameters(IResolvable|java.util.Map<java.lang.String, SecurityhubSecurityControlParameters>)
//  .lastUpdateReason(java.lang.String)
//  .securityControlArn(java.lang.String)
//  .securityControlId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.parameters">parameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>></code> | An object that identifies the name of a control parameter, its current value, and whether it has been customized. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.lastUpdateReason">lastUpdateReason</a></code> | <code>java.lang.String</code> | The most recent reason for updating the customizable properties of a security control. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.securityControlArn">securityControlArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) for a security control across standards, such as `arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1`. This parameter doesn't mention a specific standard. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.securityControlId">securityControlId</a></code> | <code>java.lang.String</code> | The unique identifier of a security control across standards. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.parameters"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>>

An object that identifies the name of a control parameter, its current value, and whether it has been customized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_security_control#parameters SecurityhubSecurityControl#parameters}

---

##### `lastUpdateReason`<sup>Optional</sup> <a name="lastUpdateReason" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.lastUpdateReason"></a>

- *Type:* java.lang.String

The most recent reason for updating the customizable properties of a security control.

This differs from the UpdateReason field of the BatchUpdateStandardsControlAssociations API, which tracks the reason for updating the enablement status of a control. This field accepts alphanumeric characters in addition to white spaces, dashes, and underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_security_control#last_update_reason SecurityhubSecurityControl#last_update_reason}

---

##### `securityControlArn`<sup>Optional</sup> <a name="securityControlArn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.securityControlArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) for a security control across standards, such as `arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1`. This parameter doesn't mention a specific standard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_security_control#security_control_arn SecurityhubSecurityControl#security_control_arn}

---

##### `securityControlId`<sup>Optional</sup> <a name="securityControlId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.securityControlId"></a>

- *Type:* java.lang.String

The unique identifier of a security control across standards.

Values for this field typically consist of an AWS service name and a number, such as APIGateway.3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_security_control#security_control_id SecurityhubSecurityControl#security_control_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetLastUpdateReason">resetLastUpdateReason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetSecurityControlArn">resetSecurityControlArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetSecurityControlId">resetSecurityControlId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putParameters` <a name="putParameters" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.putParameters"></a>

```java
public void putParameters(IResolvable|java.util.Map<java.lang.String, SecurityhubSecurityControlParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.putParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>>

---

##### `resetLastUpdateReason` <a name="resetLastUpdateReason" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetLastUpdateReason"></a>

```java
public void resetLastUpdateReason()
```

##### `resetSecurityControlArn` <a name="resetSecurityControlArn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetSecurityControlArn"></a>

```java
public void resetSecurityControlArn()
```

##### `resetSecurityControlId` <a name="resetSecurityControlId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetSecurityControlId"></a>

```java
public void resetSecurityControlId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityhubSecurityControl resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isConstruct"></a>

```java
import io.cdktn.providers.awscc.securityhub_security_control.SecurityhubSecurityControl;

SecurityhubSecurityControl.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.securityhub_security_control.SecurityhubSecurityControl;

SecurityhubSecurityControl.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.securityhub_security_control.SecurityhubSecurityControl;

SecurityhubSecurityControl.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.securityhub_security_control.SecurityhubSecurityControl;

SecurityhubSecurityControl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecurityhubSecurityControl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SecurityhubSecurityControl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecurityhubSecurityControl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecurityhubSecurityControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_security_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SecurityhubSecurityControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap">SecurityhubSecurityControlParametersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.lastUpdateReasonInput">lastUpdateReasonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.parametersInput">parametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlArnInput">securityControlArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlIdInput">securityControlIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.lastUpdateReason">lastUpdateReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlArn">securityControlArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlId">securityControlId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.parameters"></a>

```java
public SecurityhubSecurityControlParametersMap getParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap">SecurityhubSecurityControlParametersMap</a>

---

##### `lastUpdateReasonInput`<sup>Optional</sup> <a name="lastUpdateReasonInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.lastUpdateReasonInput"></a>

```java
public java.lang.String getLastUpdateReasonInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.parametersInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, SecurityhubSecurityControlParameters> getParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>>

---

##### `securityControlArnInput`<sup>Optional</sup> <a name="securityControlArnInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlArnInput"></a>

```java
public java.lang.String getSecurityControlArnInput();
```

- *Type:* java.lang.String

---

##### `securityControlIdInput`<sup>Optional</sup> <a name="securityControlIdInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlIdInput"></a>

```java
public java.lang.String getSecurityControlIdInput();
```

- *Type:* java.lang.String

---

##### `lastUpdateReason`<sup>Required</sup> <a name="lastUpdateReason" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.lastUpdateReason"></a>

```java
public java.lang.String getLastUpdateReason();
```

- *Type:* java.lang.String

---

##### `securityControlArn`<sup>Required</sup> <a name="securityControlArn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlArn"></a>

```java
public java.lang.String getSecurityControlArn();
```

- *Type:* java.lang.String

---

##### `securityControlId`<sup>Required</sup> <a name="securityControlId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlId"></a>

```java
public java.lang.String getSecurityControlId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubSecurityControlConfig <a name="SecurityhubSecurityControlConfig" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityhub_security_control.SecurityhubSecurityControlConfig;

SecurityhubSecurityControlConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .parameters(IResolvable|java.util.Map<java.lang.String, SecurityhubSecurityControlParameters>)
//  .lastUpdateReason(java.lang.String)
//  .securityControlArn(java.lang.String)
//  .securityControlId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.parameters">parameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>></code> | An object that identifies the name of a control parameter, its current value, and whether it has been customized. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.lastUpdateReason">lastUpdateReason</a></code> | <code>java.lang.String</code> | The most recent reason for updating the customizable properties of a security control. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.securityControlArn">securityControlArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) for a security control across standards, such as `arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1`. This parameter doesn't mention a specific standard. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.securityControlId">securityControlId</a></code> | <code>java.lang.String</code> | The unique identifier of a security control across standards. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.parameters"></a>

```java
public IResolvable|java.util.Map<java.lang.String, SecurityhubSecurityControlParameters> getParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>>

An object that identifies the name of a control parameter, its current value, and whether it has been customized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_security_control#parameters SecurityhubSecurityControl#parameters}

---

##### `lastUpdateReason`<sup>Optional</sup> <a name="lastUpdateReason" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.lastUpdateReason"></a>

```java
public java.lang.String getLastUpdateReason();
```

- *Type:* java.lang.String

The most recent reason for updating the customizable properties of a security control.

This differs from the UpdateReason field of the BatchUpdateStandardsControlAssociations API, which tracks the reason for updating the enablement status of a control. This field accepts alphanumeric characters in addition to white spaces, dashes, and underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_security_control#last_update_reason SecurityhubSecurityControl#last_update_reason}

---

##### `securityControlArn`<sup>Optional</sup> <a name="securityControlArn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.securityControlArn"></a>

```java
public java.lang.String getSecurityControlArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) for a security control across standards, such as `arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1`. This parameter doesn't mention a specific standard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_security_control#security_control_arn SecurityhubSecurityControl#security_control_arn}

---

##### `securityControlId`<sup>Optional</sup> <a name="securityControlId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.securityControlId"></a>

```java
public java.lang.String getSecurityControlId();
```

- *Type:* java.lang.String

The unique identifier of a security control across standards.

Values for this field typically consist of an AWS service name and a number, such as APIGateway.3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_security_control#security_control_id SecurityhubSecurityControl#security_control_id}

---

### SecurityhubSecurityControlParameters <a name="SecurityhubSecurityControlParameters" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityhub_security_control.SecurityhubSecurityControlParameters;

SecurityhubSecurityControlParameters.builder()
//  .value(SecurityhubSecurityControlParametersValue)
//  .valueType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue">SecurityhubSecurityControlParametersValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_security_control#value SecurityhubSecurityControl#value}. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters.property.valueType">valueType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_security_control#value_type SecurityhubSecurityControl#value_type}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters.property.value"></a>

```java
public SecurityhubSecurityControlParametersValue getValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue">SecurityhubSecurityControlParametersValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_security_control#value SecurityhubSecurityControl#value}.

---

##### `valueType`<sup>Optional</sup> <a name="valueType" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_security_control#value_type SecurityhubSecurityControl#value_type}.

---

### SecurityhubSecurityControlParametersValue <a name="SecurityhubSecurityControlParametersValue" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityhub_security_control.SecurityhubSecurityControlParametersValue;

SecurityhubSecurityControlParametersValue.builder()
//  .boolean(java.lang.Boolean|IResolvable)
//  .double(java.lang.Number)
//  .enum(java.lang.String)
//  .enumList(java.util.List<java.lang.String>)
//  .integer(java.lang.Number)
//  .integerList(java.util.List<java.lang.Number>)
//  .string(java.lang.String)
//  .stringList(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.boolean">boolean</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A control parameter that is a boolean. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.double">double</a></code> | <code>java.lang.Number</code> | A control parameter that is a double. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.enum">enum</a></code> | <code>java.lang.String</code> | A control parameter that is a enum. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.enumList">enumList</a></code> | <code>java.util.List<java.lang.String></code> | A control parameter that is a list of enums. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.integer">integer</a></code> | <code>java.lang.Number</code> | A control parameter that is a integer. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.integerList">integerList</a></code> | <code>java.util.List<java.lang.Number></code> | A control parameter that is a list of integers. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.string">string</a></code> | <code>java.lang.String</code> | A control parameter that is a string. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.stringList">stringList</a></code> | <code>java.util.List<java.lang.String></code> | A control parameter that is a list of strings. |

---

##### `boolean`<sup>Optional</sup> <a name="boolean" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.boolean"></a>

```java
public java.lang.Boolean|IResolvable getBoolean();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A control parameter that is a boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_security_control#boolean SecurityhubSecurityControl#boolean}

---

##### `double`<sup>Optional</sup> <a name="double" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.double"></a>

```java
public java.lang.Number getDouble();
```

- *Type:* java.lang.Number

A control parameter that is a double.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_security_control#double SecurityhubSecurityControl#double}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.enum"></a>

```java
public java.lang.String getEnum();
```

- *Type:* java.lang.String

A control parameter that is a enum.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_security_control#enum SecurityhubSecurityControl#enum}

---

##### `enumList`<sup>Optional</sup> <a name="enumList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.enumList"></a>

```java
public java.util.List<java.lang.String> getEnumList();
```

- *Type:* java.util.List<java.lang.String>

A control parameter that is a list of enums.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_security_control#enum_list SecurityhubSecurityControl#enum_list}

---

##### `integer`<sup>Optional</sup> <a name="integer" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.integer"></a>

```java
public java.lang.Number getInteger();
```

- *Type:* java.lang.Number

A control parameter that is a integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_security_control#integer SecurityhubSecurityControl#integer}

---

##### `integerList`<sup>Optional</sup> <a name="integerList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.integerList"></a>

```java
public java.util.List<java.lang.Number> getIntegerList();
```

- *Type:* java.util.List<java.lang.Number>

A control parameter that is a list of integers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_security_control#integer_list SecurityhubSecurityControl#integer_list}

---

##### `string`<sup>Optional</sup> <a name="string" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.string"></a>

```java
public java.lang.String getString();
```

- *Type:* java.lang.String

A control parameter that is a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_security_control#string SecurityhubSecurityControl#string}

---

##### `stringList`<sup>Optional</sup> <a name="stringList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.stringList"></a>

```java
public java.util.List<java.lang.String> getStringList();
```

- *Type:* java.util.List<java.lang.String>

A control parameter that is a list of strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_security_control#string_list SecurityhubSecurityControl#string_list}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityhubSecurityControlParametersMap <a name="SecurityhubSecurityControlParametersMap" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityhub_security_control.SecurityhubSecurityControlParametersMap;

new SecurityhubSecurityControlParametersMap(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.get"></a>

```java
public SecurityhubSecurityControlParametersOutputReference get(java.lang.String key)
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.get.parameter.key"></a>

- *Type:* java.lang.String

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.property.internalValue"></a>

```java
public IResolvable|java.util.Map<java.lang.String, SecurityhubSecurityControlParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>>

---


### SecurityhubSecurityControlParametersOutputReference <a name="SecurityhubSecurityControlParametersOutputReference" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityhub_security_control.SecurityhubSecurityControlParametersOutputReference;

new SecurityhubSecurityControlParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.String complexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>java.lang.String</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* java.lang.String

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resetValueType">resetValueType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.putValue"></a>

```java
public void putValue(SecurityhubSecurityControlParametersValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue">SecurityhubSecurityControlParametersValue</a>

---

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resetValue"></a>

```java
public void resetValue()
```

##### `resetValueType` <a name="resetValueType" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resetValueType"></a>

```java
public void resetValueType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference">SecurityhubSecurityControlParametersValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.valueInput">valueInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue">SecurityhubSecurityControlParametersValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.valueTypeInput">valueTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.valueType">valueType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.value"></a>

```java
public SecurityhubSecurityControlParametersValueOutputReference getValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference">SecurityhubSecurityControlParametersValueOutputReference</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.valueInput"></a>

```java
public IResolvable|SecurityhubSecurityControlParametersValue getValueInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue">SecurityhubSecurityControlParametersValue</a>

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.valueTypeInput"></a>

```java
public java.lang.String getValueTypeInput();
```

- *Type:* java.lang.String

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityhubSecurityControlParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>

---


### SecurityhubSecurityControlParametersValueOutputReference <a name="SecurityhubSecurityControlParametersValueOutputReference" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityhub_security_control.SecurityhubSecurityControlParametersValueOutputReference;

new SecurityhubSecurityControlParametersValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetBoolean">resetBoolean</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetDouble">resetDouble</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetEnum">resetEnum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetEnumList">resetEnumList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetInteger">resetInteger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetIntegerList">resetIntegerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetString">resetString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetStringList">resetStringList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBoolean` <a name="resetBoolean" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetBoolean"></a>

```java
public void resetBoolean()
```

##### `resetDouble` <a name="resetDouble" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetDouble"></a>

```java
public void resetDouble()
```

##### `resetEnum` <a name="resetEnum" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetEnum"></a>

```java
public void resetEnum()
```

##### `resetEnumList` <a name="resetEnumList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetEnumList"></a>

```java
public void resetEnumList()
```

##### `resetInteger` <a name="resetInteger" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetInteger"></a>

```java
public void resetInteger()
```

##### `resetIntegerList` <a name="resetIntegerList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetIntegerList"></a>

```java
public void resetIntegerList()
```

##### `resetString` <a name="resetString" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetString"></a>

```java
public void resetString()
```

##### `resetStringList` <a name="resetStringList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetStringList"></a>

```java
public void resetStringList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.booleanInput">booleanInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.doubleInput">doubleInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enumInput">enumInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enumListInput">enumListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integerInput">integerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integerListInput">integerListInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.stringInput">stringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.stringListInput">stringListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.boolean">boolean</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.double">double</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enum">enum</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enumList">enumList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integer">integer</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integerList">integerList</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.string">string</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.stringList">stringList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue">SecurityhubSecurityControlParametersValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `booleanInput`<sup>Optional</sup> <a name="booleanInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.booleanInput"></a>

```java
public java.lang.Boolean|IResolvable getBooleanInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `doubleInput`<sup>Optional</sup> <a name="doubleInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.doubleInput"></a>

```java
public java.lang.Number getDoubleInput();
```

- *Type:* java.lang.Number

---

##### `enumInput`<sup>Optional</sup> <a name="enumInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enumInput"></a>

```java
public java.lang.String getEnumInput();
```

- *Type:* java.lang.String

---

##### `enumListInput`<sup>Optional</sup> <a name="enumListInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enumListInput"></a>

```java
public java.util.List<java.lang.String> getEnumListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `integerInput`<sup>Optional</sup> <a name="integerInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integerInput"></a>

```java
public java.lang.Number getIntegerInput();
```

- *Type:* java.lang.Number

---

##### `integerListInput`<sup>Optional</sup> <a name="integerListInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integerListInput"></a>

```java
public java.util.List<java.lang.Number> getIntegerListInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `stringInput`<sup>Optional</sup> <a name="stringInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.stringInput"></a>

```java
public java.lang.String getStringInput();
```

- *Type:* java.lang.String

---

##### `stringListInput`<sup>Optional</sup> <a name="stringListInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.stringListInput"></a>

```java
public java.util.List<java.lang.String> getStringListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boolean`<sup>Required</sup> <a name="boolean" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.boolean"></a>

```java
public java.lang.Boolean|IResolvable getBoolean();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `double`<sup>Required</sup> <a name="double" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.double"></a>

```java
public java.lang.Number getDouble();
```

- *Type:* java.lang.Number

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enum"></a>

```java
public java.lang.String getEnum();
```

- *Type:* java.lang.String

---

##### `enumList`<sup>Required</sup> <a name="enumList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enumList"></a>

```java
public java.util.List<java.lang.String> getEnumList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `integer`<sup>Required</sup> <a name="integer" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integer"></a>

```java
public java.lang.Number getInteger();
```

- *Type:* java.lang.Number

---

##### `integerList`<sup>Required</sup> <a name="integerList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integerList"></a>

```java
public java.util.List<java.lang.Number> getIntegerList();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `string`<sup>Required</sup> <a name="string" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.string"></a>

```java
public java.lang.String getString();
```

- *Type:* java.lang.String

---

##### `stringList`<sup>Required</sup> <a name="stringList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.stringList"></a>

```java
public java.util.List<java.lang.String> getStringList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityhubSecurityControlParametersValue getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue">SecurityhubSecurityControlParametersValue</a>

---



