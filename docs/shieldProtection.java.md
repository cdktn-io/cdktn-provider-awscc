# `shieldProtection` Submodule <a name="`shieldProtection` Submodule" id="@cdktn/provider-awscc.shieldProtection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ShieldProtection <a name="ShieldProtection" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_protection awscc_shield_protection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer"></a>

```java
import io.cdktn.providers.awscc.shield_protection.ShieldProtection;

ShieldProtection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .resourceArn(java.lang.String)
//  .applicationLayerAutomaticResponseConfiguration(ShieldProtectionApplicationLayerAutomaticResponseConfiguration)
//  .healthCheckArns(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<ShieldProtectionTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Friendly name for the Protection. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | The ARN (Amazon Resource Name) of the resource to be protected. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.applicationLayerAutomaticResponseConfiguration">applicationLayerAutomaticResponseConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration">ShieldProtectionApplicationLayerAutomaticResponseConfiguration</a></code> | The automatic application layer DDoS mitigation settings for a Protection. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.healthCheckArns">healthCheckArns</a></code> | <code>java.util.List<java.lang.String></code> | The Amazon Resource Names (ARNs) of the health check to associate with the protection. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>></code> | One or more tag key-value pairs for the Protection object. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Friendly name for the Protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_protection#name ShieldProtection#name}

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.resourceArn"></a>

- *Type:* java.lang.String

The ARN (Amazon Resource Name) of the resource to be protected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_protection#resource_arn ShieldProtection#resource_arn}

---

##### `applicationLayerAutomaticResponseConfiguration`<sup>Optional</sup> <a name="applicationLayerAutomaticResponseConfiguration" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.applicationLayerAutomaticResponseConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration">ShieldProtectionApplicationLayerAutomaticResponseConfiguration</a>

The automatic application layer DDoS mitigation settings for a Protection.

This configuration determines whether Shield Advanced automatically manages rules in the web ACL in order to respond to application layer events that Shield Advanced determines to be DDoS attacks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_protection#application_layer_automatic_response_configuration ShieldProtection#application_layer_automatic_response_configuration}

---

##### `healthCheckArns`<sup>Optional</sup> <a name="healthCheckArns" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.healthCheckArns"></a>

- *Type:* java.util.List<java.lang.String>

The Amazon Resource Names (ARNs) of the health check to associate with the protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_protection#health_check_arns ShieldProtection#health_check_arns}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>>

One or more tag key-value pairs for the Protection object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_protection#tags ShieldProtection#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.putApplicationLayerAutomaticResponseConfiguration">putApplicationLayerAutomaticResponseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.resetApplicationLayerAutomaticResponseConfiguration">resetApplicationLayerAutomaticResponseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.resetHealthCheckArns">resetHealthCheckArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApplicationLayerAutomaticResponseConfiguration` <a name="putApplicationLayerAutomaticResponseConfiguration" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.putApplicationLayerAutomaticResponseConfiguration"></a>

```java
public void putApplicationLayerAutomaticResponseConfiguration(ShieldProtectionApplicationLayerAutomaticResponseConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.putApplicationLayerAutomaticResponseConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration">ShieldProtectionApplicationLayerAutomaticResponseConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ShieldProtectionTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>>

---

##### `resetApplicationLayerAutomaticResponseConfiguration` <a name="resetApplicationLayerAutomaticResponseConfiguration" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.resetApplicationLayerAutomaticResponseConfiguration"></a>

```java
public void resetApplicationLayerAutomaticResponseConfiguration()
```

##### `resetHealthCheckArns` <a name="resetHealthCheckArns" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.resetHealthCheckArns"></a>

```java
public void resetHealthCheckArns()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ShieldProtection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.isConstruct"></a>

```java
import io.cdktn.providers.awscc.shield_protection.ShieldProtection;

ShieldProtection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.shield_protection.ShieldProtection;

ShieldProtection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.shield_protection.ShieldProtection;

ShieldProtection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.shield_protection.ShieldProtection;

ShieldProtection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ShieldProtection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ShieldProtection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ShieldProtection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ShieldProtection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_protection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ShieldProtection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.applicationLayerAutomaticResponseConfiguration">applicationLayerAutomaticResponseConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference">ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.protectionArn">protectionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.protectionId">protectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList">ShieldProtectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.applicationLayerAutomaticResponseConfigurationInput">applicationLayerAutomaticResponseConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration">ShieldProtectionApplicationLayerAutomaticResponseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.healthCheckArnsInput">healthCheckArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.resourceArnInput">resourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.healthCheckArns">healthCheckArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationLayerAutomaticResponseConfiguration`<sup>Required</sup> <a name="applicationLayerAutomaticResponseConfiguration" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.applicationLayerAutomaticResponseConfiguration"></a>

```java
public ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference getApplicationLayerAutomaticResponseConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference">ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `protectionArn`<sup>Required</sup> <a name="protectionArn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.protectionArn"></a>

```java
public java.lang.String getProtectionArn();
```

- *Type:* java.lang.String

---

##### `protectionId`<sup>Required</sup> <a name="protectionId" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.protectionId"></a>

```java
public java.lang.String getProtectionId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.tags"></a>

```java
public ShieldProtectionTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList">ShieldProtectionTagsList</a>

---

##### `applicationLayerAutomaticResponseConfigurationInput`<sup>Optional</sup> <a name="applicationLayerAutomaticResponseConfigurationInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.applicationLayerAutomaticResponseConfigurationInput"></a>

```java
public IResolvable|ShieldProtectionApplicationLayerAutomaticResponseConfiguration getApplicationLayerAutomaticResponseConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration">ShieldProtectionApplicationLayerAutomaticResponseConfiguration</a>

---

##### `healthCheckArnsInput`<sup>Optional</sup> <a name="healthCheckArnsInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.healthCheckArnsInput"></a>

```java
public java.util.List<java.lang.String> getHealthCheckArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.resourceArnInput"></a>

```java
public java.lang.String getResourceArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ShieldProtectionTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>>

---

##### `healthCheckArns`<sup>Required</sup> <a name="healthCheckArns" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.healthCheckArns"></a>

```java
public java.util.List<java.lang.String> getHealthCheckArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ShieldProtectionApplicationLayerAutomaticResponseConfiguration <a name="ShieldProtectionApplicationLayerAutomaticResponseConfiguration" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.shield_protection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration;

ShieldProtectionApplicationLayerAutomaticResponseConfiguration.builder()
//  .action(ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction">ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction</a></code> | Specifies the action setting that Shield Advanced should use in the AWS WAF rules that it creates on behalf of the protected resource in response to DDoS attacks. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration.property.status">status</a></code> | <code>java.lang.String</code> | Indicates whether automatic application layer DDoS mitigation is enabled for the protection. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration.property.action"></a>

```java
public ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction getAction();
```

- *Type:* <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction">ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction</a>

Specifies the action setting that Shield Advanced should use in the AWS WAF rules that it creates on behalf of the protected resource in response to DDoS attacks.

You specify this as part of the configuration for the automatic application layer DDoS mitigation feature, when you enable or update automatic mitigation. Shield Advanced creates the AWS WAF rules in a Shield Advanced-managed rule group, inside the web ACL that you have associated with the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_protection#action ShieldProtection#action}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Indicates whether automatic application layer DDoS mitigation is enabled for the protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_protection#status ShieldProtection#status}

---

### ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction <a name="ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction.Initializer"></a>

```java
import io.cdktn.providers.awscc.shield_protection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction;

ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction.builder()
//  .block(java.lang.String)
//  .count(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction.property.block">block</a></code> | <code>java.lang.String</code> | Specifies that Shield Advanced should configure its AWS WAF rules with the AWS WAF `Block` action. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction.property.count">count</a></code> | <code>java.lang.String</code> | Specifies that Shield Advanced should configure its AWS WAF rules with the AWS WAF `Count` action. |

---

##### `block`<sup>Optional</sup> <a name="block" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction.property.block"></a>

```java
public java.lang.String getBlock();
```

- *Type:* java.lang.String

Specifies that Shield Advanced should configure its AWS WAF rules with the AWS WAF `Block` action.

You must specify exactly one action, either `Block` or `Count`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_protection#block ShieldProtection#block}

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction.property.count"></a>

```java
public java.lang.String getCount();
```

- *Type:* java.lang.String

Specifies that Shield Advanced should configure its AWS WAF rules with the AWS WAF `Count` action.

You must specify exactly one action, either `Block` or `Count`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_protection#count ShieldProtection#count}

---

### ShieldProtectionConfig <a name="ShieldProtectionConfig" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.shield_protection.ShieldProtectionConfig;

ShieldProtectionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .resourceArn(java.lang.String)
//  .applicationLayerAutomaticResponseConfiguration(ShieldProtectionApplicationLayerAutomaticResponseConfiguration)
//  .healthCheckArns(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<ShieldProtectionTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Friendly name for the Protection. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | The ARN (Amazon Resource Name) of the resource to be protected. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.applicationLayerAutomaticResponseConfiguration">applicationLayerAutomaticResponseConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration">ShieldProtectionApplicationLayerAutomaticResponseConfiguration</a></code> | The automatic application layer DDoS mitigation settings for a Protection. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.healthCheckArns">healthCheckArns</a></code> | <code>java.util.List<java.lang.String></code> | The Amazon Resource Names (ARNs) of the health check to associate with the protection. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>></code> | One or more tag key-value pairs for the Protection object. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Friendly name for the Protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_protection#name ShieldProtection#name}

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

The ARN (Amazon Resource Name) of the resource to be protected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_protection#resource_arn ShieldProtection#resource_arn}

---

##### `applicationLayerAutomaticResponseConfiguration`<sup>Optional</sup> <a name="applicationLayerAutomaticResponseConfiguration" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.applicationLayerAutomaticResponseConfiguration"></a>

```java
public ShieldProtectionApplicationLayerAutomaticResponseConfiguration getApplicationLayerAutomaticResponseConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration">ShieldProtectionApplicationLayerAutomaticResponseConfiguration</a>

The automatic application layer DDoS mitigation settings for a Protection.

This configuration determines whether Shield Advanced automatically manages rules in the web ACL in order to respond to application layer events that Shield Advanced determines to be DDoS attacks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_protection#application_layer_automatic_response_configuration ShieldProtection#application_layer_automatic_response_configuration}

---

##### `healthCheckArns`<sup>Optional</sup> <a name="healthCheckArns" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.healthCheckArns"></a>

```java
public java.util.List<java.lang.String> getHealthCheckArns();
```

- *Type:* java.util.List<java.lang.String>

The Amazon Resource Names (ARNs) of the health check to associate with the protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_protection#health_check_arns ShieldProtection#health_check_arns}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ShieldProtectionTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>>

One or more tag key-value pairs for the Protection object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_protection#tags ShieldProtection#tags}

---

### ShieldProtectionTags <a name="ShieldProtectionTags" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.shield_protection.ShieldProtectionTags;

ShieldProtectionTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags.property.key">key</a></code> | <code>java.lang.String</code> | Part of the key:value pair that defines a tag. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags.property.value">value</a></code> | <code>java.lang.String</code> | Part of the key:value pair that defines a tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Part of the key:value pair that defines a tag.

You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_protection#key ShieldProtection#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Part of the key:value pair that defines a tag.

You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_protection#value ShieldProtection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference <a name="ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.shield_protection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference;

new ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.resetBlock">resetBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.resetCount">resetCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBlock` <a name="resetBlock" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.resetBlock"></a>

```java
public void resetBlock()
```

##### `resetCount` <a name="resetCount" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.resetCount"></a>

```java
public void resetCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.blockInput">blockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.countInput">countInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.block">block</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.count">count</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction">ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `blockInput`<sup>Optional</sup> <a name="blockInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.blockInput"></a>

```java
public java.lang.String getBlockInput();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.countInput"></a>

```java
public java.lang.String getCountInput();
```

- *Type:* java.lang.String

---

##### `block`<sup>Required</sup> <a name="block" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.block"></a>

```java
public java.lang.String getBlock();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.count"></a>

```java
public java.lang.String getCount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.internalValue"></a>

```java
public IResolvable|ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction">ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction</a>

---


### ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference <a name="ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.shield_protection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference;

new ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.putAction"></a>

```java
public void putAction(ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction">ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction</a>

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference">ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.actionInput">actionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction">ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration">ShieldProtectionApplicationLayerAutomaticResponseConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.action"></a>

```java
public ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference getAction();
```

- *Type:* <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference">ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.actionInput"></a>

```java
public IResolvable|ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction getActionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction">ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction</a>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ShieldProtectionApplicationLayerAutomaticResponseConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration">ShieldProtectionApplicationLayerAutomaticResponseConfiguration</a>

---


### ShieldProtectionTagsList <a name="ShieldProtectionTagsList" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.shield_protection.ShieldProtectionTagsList;

new ShieldProtectionTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.get"></a>

```java
public ShieldProtectionTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ShieldProtectionTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>>

---


### ShieldProtectionTagsOutputReference <a name="ShieldProtectionTagsOutputReference" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.shield_protection.ShieldProtectionTagsOutputReference;

new ShieldProtectionTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ShieldProtectionTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>

---



