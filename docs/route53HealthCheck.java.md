# `route53HealthCheck` Submodule <a name="`route53HealthCheck` Submodule" id="@cdktn/provider-awscc.route53HealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53HealthCheck <a name="Route53HealthCheck" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check awscc_route53_health_check}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_health_check.Route53HealthCheck;

Route53HealthCheck.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .healthCheckConfig(Route53HealthCheckHealthCheckConfig)
//  .healthCheckTags(IResolvable|java.util.List<Route53HealthCheckHealthCheckTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.healthCheckConfig">healthCheckConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a></code> | A complex type that contains information about the health check. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.healthCheckTags">healthCheckTags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `healthCheckConfig`<sup>Required</sup> <a name="healthCheckConfig" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.healthCheckConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a>

A complex type that contains information about the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#health_check_config Route53HealthCheck#health_check_config}

---

##### `healthCheckTags`<sup>Optional</sup> <a name="healthCheckTags" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.healthCheckTags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#health_check_tags Route53HealthCheck#health_check_tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckConfig">putHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckTags">putHealthCheckTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.resetHealthCheckTags">resetHealthCheckTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHealthCheckConfig` <a name="putHealthCheckConfig" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckConfig"></a>

```java
public void putHealthCheckConfig(Route53HealthCheckHealthCheckConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a>

---

##### `putHealthCheckTags` <a name="putHealthCheckTags" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckTags"></a>

```java
public void putHealthCheckTags(IResolvable|java.util.List<Route53HealthCheckHealthCheckTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>>

---

##### `resetHealthCheckTags` <a name="resetHealthCheckTags" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.resetHealthCheckTags"></a>

```java
public void resetHealthCheckTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53HealthCheck resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isConstruct"></a>

```java
import io.cdktn.providers.awscc.route53_health_check.Route53HealthCheck;

Route53HealthCheck.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.route53_health_check.Route53HealthCheck;

Route53HealthCheck.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.route53_health_check.Route53HealthCheck;

Route53HealthCheck.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.route53_health_check.Route53HealthCheck;

Route53HealthCheck.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Route53HealthCheck.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Route53HealthCheck resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Route53HealthCheck to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Route53HealthCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Route53HealthCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckConfig">healthCheckConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference">Route53HealthCheckHealthCheckConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckId">healthCheckId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckTags">healthCheckTags</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList">Route53HealthCheckHealthCheckTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckConfigInput">healthCheckConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckTagsInput">healthCheckTagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `healthCheckConfig`<sup>Required</sup> <a name="healthCheckConfig" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckConfig"></a>

```java
public Route53HealthCheckHealthCheckConfigOutputReference getHealthCheckConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference">Route53HealthCheckHealthCheckConfigOutputReference</a>

---

##### `healthCheckId`<sup>Required</sup> <a name="healthCheckId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckId"></a>

```java
public java.lang.String getHealthCheckId();
```

- *Type:* java.lang.String

---

##### `healthCheckTags`<sup>Required</sup> <a name="healthCheckTags" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckTags"></a>

```java
public Route53HealthCheckHealthCheckTagsList getHealthCheckTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList">Route53HealthCheckHealthCheckTagsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `healthCheckConfigInput`<sup>Optional</sup> <a name="healthCheckConfigInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckConfigInput"></a>

```java
public IResolvable|Route53HealthCheckHealthCheckConfig getHealthCheckConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a>

---

##### `healthCheckTagsInput`<sup>Optional</sup> <a name="healthCheckTagsInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckTagsInput"></a>

```java
public IResolvable|java.util.List<Route53HealthCheckHealthCheckTags> getHealthCheckTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Route53HealthCheckConfig <a name="Route53HealthCheckConfig" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_health_check.Route53HealthCheckConfig;

Route53HealthCheckConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .healthCheckConfig(Route53HealthCheckHealthCheckConfig)
//  .healthCheckTags(IResolvable|java.util.List<Route53HealthCheckHealthCheckTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.healthCheckConfig">healthCheckConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a></code> | A complex type that contains information about the health check. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.healthCheckTags">healthCheckTags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `healthCheckConfig`<sup>Required</sup> <a name="healthCheckConfig" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.healthCheckConfig"></a>

```java
public Route53HealthCheckHealthCheckConfig getHealthCheckConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a>

A complex type that contains information about the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#health_check_config Route53HealthCheck#health_check_config}

---

##### `healthCheckTags`<sup>Optional</sup> <a name="healthCheckTags" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.healthCheckTags"></a>

```java
public IResolvable|java.util.List<Route53HealthCheckHealthCheckTags> getHealthCheckTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#health_check_tags Route53HealthCheck#health_check_tags}

---

### Route53HealthCheckHealthCheckConfig <a name="Route53HealthCheckHealthCheckConfig" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_health_check.Route53HealthCheckHealthCheckConfig;

Route53HealthCheckHealthCheckConfig.builder()
    .type(java.lang.String)
//  .alarmIdentifier(Route53HealthCheckHealthCheckConfigAlarmIdentifier)
//  .childHealthChecks(java.util.List<java.lang.String>)
//  .enableSni(java.lang.Boolean|IResolvable)
//  .failureThreshold(java.lang.Number)
//  .fullyQualifiedDomainName(java.lang.String)
//  .healthThreshold(java.lang.Number)
//  .insufficientDataHealthStatus(java.lang.String)
//  .inverted(java.lang.Boolean|IResolvable)
//  .ipAddress(java.lang.String)
//  .measureLatency(java.lang.Boolean|IResolvable)
//  .port(java.lang.Number)
//  .regions(java.util.List<java.lang.String>)
//  .requestInterval(java.lang.Number)
//  .resourcePath(java.lang.String)
//  .routingControlArn(java.lang.String)
//  .searchString(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#type Route53HealthCheck#type}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.alarmIdentifier">alarmIdentifier</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier">Route53HealthCheckHealthCheckConfigAlarmIdentifier</a></code> | A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.childHealthChecks">childHealthChecks</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#child_health_checks Route53HealthCheck#child_health_checks}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.enableSni">enableSni</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#enable_sni Route53HealthCheck#enable_sni}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.failureThreshold">failureThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#failure_threshold Route53HealthCheck#failure_threshold}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.fullyQualifiedDomainName">fullyQualifiedDomainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#fully_qualified_domain_name Route53HealthCheck#fully_qualified_domain_name}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.healthThreshold">healthThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#health_threshold Route53HealthCheck#health_threshold}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.insufficientDataHealthStatus">insufficientDataHealthStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#insufficient_data_health_status Route53HealthCheck#insufficient_data_health_status}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.inverted">inverted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#inverted Route53HealthCheck#inverted}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#ip_address Route53HealthCheck#ip_address}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.measureLatency">measureLatency</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#measure_latency Route53HealthCheck#measure_latency}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#port Route53HealthCheck#port}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#regions Route53HealthCheck#regions}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.requestInterval">requestInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#request_interval Route53HealthCheck#request_interval}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.resourcePath">resourcePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#resource_path Route53HealthCheck#resource_path}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.routingControlArn">routingControlArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#routing_control_arn Route53HealthCheck#routing_control_arn}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.searchString">searchString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#search_string Route53HealthCheck#search_string}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#type Route53HealthCheck#type}.

---

##### `alarmIdentifier`<sup>Optional</sup> <a name="alarmIdentifier" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.alarmIdentifier"></a>

```java
public Route53HealthCheckHealthCheckConfigAlarmIdentifier getAlarmIdentifier();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier">Route53HealthCheckHealthCheckConfigAlarmIdentifier</a>

A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#alarm_identifier Route53HealthCheck#alarm_identifier}

---

##### `childHealthChecks`<sup>Optional</sup> <a name="childHealthChecks" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.childHealthChecks"></a>

```java
public java.util.List<java.lang.String> getChildHealthChecks();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#child_health_checks Route53HealthCheck#child_health_checks}.

---

##### `enableSni`<sup>Optional</sup> <a name="enableSni" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.enableSni"></a>

```java
public java.lang.Boolean|IResolvable getEnableSni();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#enable_sni Route53HealthCheck#enable_sni}.

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.failureThreshold"></a>

```java
public java.lang.Number getFailureThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#failure_threshold Route53HealthCheck#failure_threshold}.

---

##### `fullyQualifiedDomainName`<sup>Optional</sup> <a name="fullyQualifiedDomainName" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.fullyQualifiedDomainName"></a>

```java
public java.lang.String getFullyQualifiedDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#fully_qualified_domain_name Route53HealthCheck#fully_qualified_domain_name}.

---

##### `healthThreshold`<sup>Optional</sup> <a name="healthThreshold" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.healthThreshold"></a>

```java
public java.lang.Number getHealthThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#health_threshold Route53HealthCheck#health_threshold}.

---

##### `insufficientDataHealthStatus`<sup>Optional</sup> <a name="insufficientDataHealthStatus" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.insufficientDataHealthStatus"></a>

```java
public java.lang.String getInsufficientDataHealthStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#insufficient_data_health_status Route53HealthCheck#insufficient_data_health_status}.

---

##### `inverted`<sup>Optional</sup> <a name="inverted" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.inverted"></a>

```java
public java.lang.Boolean|IResolvable getInverted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#inverted Route53HealthCheck#inverted}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#ip_address Route53HealthCheck#ip_address}.

---

##### `measureLatency`<sup>Optional</sup> <a name="measureLatency" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.measureLatency"></a>

```java
public java.lang.Boolean|IResolvable getMeasureLatency();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#measure_latency Route53HealthCheck#measure_latency}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#port Route53HealthCheck#port}.

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#regions Route53HealthCheck#regions}.

---

##### `requestInterval`<sup>Optional</sup> <a name="requestInterval" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.requestInterval"></a>

```java
public java.lang.Number getRequestInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#request_interval Route53HealthCheck#request_interval}.

---

##### `resourcePath`<sup>Optional</sup> <a name="resourcePath" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.resourcePath"></a>

```java
public java.lang.String getResourcePath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#resource_path Route53HealthCheck#resource_path}.

---

##### `routingControlArn`<sup>Optional</sup> <a name="routingControlArn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.routingControlArn"></a>

```java
public java.lang.String getRoutingControlArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#routing_control_arn Route53HealthCheck#routing_control_arn}.

---

##### `searchString`<sup>Optional</sup> <a name="searchString" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.searchString"></a>

```java
public java.lang.String getSearchString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#search_string Route53HealthCheck#search_string}.

---

### Route53HealthCheckHealthCheckConfigAlarmIdentifier <a name="Route53HealthCheckHealthCheckConfigAlarmIdentifier" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_health_check.Route53HealthCheckHealthCheckConfigAlarmIdentifier;

Route53HealthCheckHealthCheckConfigAlarmIdentifier.builder()
//  .name(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier.property.name">name</a></code> | <code>java.lang.String</code> | The name of the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier.property.region">region</a></code> | <code>java.lang.String</code> | For the CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy, the region that the alarm was created in. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#name Route53HealthCheck#name}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

For the CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy, the region that the alarm was created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#region Route53HealthCheck#region}

---

### Route53HealthCheckHealthCheckTags <a name="Route53HealthCheckHealthCheckTags" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_health_check.Route53HealthCheckHealthCheckTags;

Route53HealthCheckHealthCheckTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#key Route53HealthCheck#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_health_check#value Route53HealthCheck#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference <a name="Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_health_check.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference;

new Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resetRegion"></a>

```java
public void resetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier">Route53HealthCheckHealthCheckConfigAlarmIdentifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53HealthCheckHealthCheckConfigAlarmIdentifier getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier">Route53HealthCheckHealthCheckConfigAlarmIdentifier</a>

---


### Route53HealthCheckHealthCheckConfigOutputReference <a name="Route53HealthCheckHealthCheckConfigOutputReference" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_health_check.Route53HealthCheckHealthCheckConfigOutputReference;

new Route53HealthCheckHealthCheckConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.putAlarmIdentifier">putAlarmIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetAlarmIdentifier">resetAlarmIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetChildHealthChecks">resetChildHealthChecks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetEnableSni">resetEnableSni</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetFullyQualifiedDomainName">resetFullyQualifiedDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetHealthThreshold">resetHealthThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetInsufficientDataHealthStatus">resetInsufficientDataHealthStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetInverted">resetInverted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetMeasureLatency">resetMeasureLatency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetRegions">resetRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetRequestInterval">resetRequestInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetResourcePath">resetResourcePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetRoutingControlArn">resetRoutingControlArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetSearchString">resetSearchString</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAlarmIdentifier` <a name="putAlarmIdentifier" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.putAlarmIdentifier"></a>

```java
public void putAlarmIdentifier(Route53HealthCheckHealthCheckConfigAlarmIdentifier value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.putAlarmIdentifier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier">Route53HealthCheckHealthCheckConfigAlarmIdentifier</a>

---

##### `resetAlarmIdentifier` <a name="resetAlarmIdentifier" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetAlarmIdentifier"></a>

```java
public void resetAlarmIdentifier()
```

##### `resetChildHealthChecks` <a name="resetChildHealthChecks" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetChildHealthChecks"></a>

```java
public void resetChildHealthChecks()
```

##### `resetEnableSni` <a name="resetEnableSni" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetEnableSni"></a>

```java
public void resetEnableSni()
```

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetFailureThreshold"></a>

```java
public void resetFailureThreshold()
```

##### `resetFullyQualifiedDomainName` <a name="resetFullyQualifiedDomainName" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetFullyQualifiedDomainName"></a>

```java
public void resetFullyQualifiedDomainName()
```

##### `resetHealthThreshold` <a name="resetHealthThreshold" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetHealthThreshold"></a>

```java
public void resetHealthThreshold()
```

##### `resetInsufficientDataHealthStatus` <a name="resetInsufficientDataHealthStatus" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetInsufficientDataHealthStatus"></a>

```java
public void resetInsufficientDataHealthStatus()
```

##### `resetInverted` <a name="resetInverted" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetInverted"></a>

```java
public void resetInverted()
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetIpAddress"></a>

```java
public void resetIpAddress()
```

##### `resetMeasureLatency` <a name="resetMeasureLatency" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetMeasureLatency"></a>

```java
public void resetMeasureLatency()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetRegions` <a name="resetRegions" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetRegions"></a>

```java
public void resetRegions()
```

##### `resetRequestInterval` <a name="resetRequestInterval" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetRequestInterval"></a>

```java
public void resetRequestInterval()
```

##### `resetResourcePath` <a name="resetResourcePath" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetResourcePath"></a>

```java
public void resetResourcePath()
```

##### `resetRoutingControlArn` <a name="resetRoutingControlArn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetRoutingControlArn"></a>

```java
public void resetRoutingControlArn()
```

##### `resetSearchString` <a name="resetSearchString" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetSearchString"></a>

```java
public void resetSearchString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.alarmIdentifier">alarmIdentifier</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference">Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.alarmIdentifierInput">alarmIdentifierInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier">Route53HealthCheckHealthCheckConfigAlarmIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.childHealthChecksInput">childHealthChecksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.enableSniInput">enableSniInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.failureThresholdInput">failureThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.fullyQualifiedDomainNameInput">fullyQualifiedDomainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.healthThresholdInput">healthThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.insufficientDataHealthStatusInput">insufficientDataHealthStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.invertedInput">invertedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.measureLatencyInput">measureLatencyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.regionsInput">regionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.requestIntervalInput">requestIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.resourcePathInput">resourcePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.routingControlArnInput">routingControlArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.searchStringInput">searchStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.childHealthChecks">childHealthChecks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.enableSni">enableSni</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.fullyQualifiedDomainName">fullyQualifiedDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.healthThreshold">healthThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.insufficientDataHealthStatus">insufficientDataHealthStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.inverted">inverted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.measureLatency">measureLatency</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.requestInterval">requestInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.resourcePath">resourcePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.routingControlArn">routingControlArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.searchString">searchString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alarmIdentifier`<sup>Required</sup> <a name="alarmIdentifier" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.alarmIdentifier"></a>

```java
public Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference getAlarmIdentifier();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference">Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference</a>

---

##### `alarmIdentifierInput`<sup>Optional</sup> <a name="alarmIdentifierInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.alarmIdentifierInput"></a>

```java
public IResolvable|Route53HealthCheckHealthCheckConfigAlarmIdentifier getAlarmIdentifierInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier">Route53HealthCheckHealthCheckConfigAlarmIdentifier</a>

---

##### `childHealthChecksInput`<sup>Optional</sup> <a name="childHealthChecksInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.childHealthChecksInput"></a>

```java
public java.util.List<java.lang.String> getChildHealthChecksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableSniInput`<sup>Optional</sup> <a name="enableSniInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.enableSniInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableSniInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.failureThresholdInput"></a>

```java
public java.lang.Number getFailureThresholdInput();
```

- *Type:* java.lang.Number

---

##### `fullyQualifiedDomainNameInput`<sup>Optional</sup> <a name="fullyQualifiedDomainNameInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.fullyQualifiedDomainNameInput"></a>

```java
public java.lang.String getFullyQualifiedDomainNameInput();
```

- *Type:* java.lang.String

---

##### `healthThresholdInput`<sup>Optional</sup> <a name="healthThresholdInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.healthThresholdInput"></a>

```java
public java.lang.Number getHealthThresholdInput();
```

- *Type:* java.lang.Number

---

##### `insufficientDataHealthStatusInput`<sup>Optional</sup> <a name="insufficientDataHealthStatusInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.insufficientDataHealthStatusInput"></a>

```java
public java.lang.String getInsufficientDataHealthStatusInput();
```

- *Type:* java.lang.String

---

##### `invertedInput`<sup>Optional</sup> <a name="invertedInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.invertedInput"></a>

```java
public java.lang.Boolean|IResolvable getInvertedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.ipAddressInput"></a>

```java
public java.lang.String getIpAddressInput();
```

- *Type:* java.lang.String

---

##### `measureLatencyInput`<sup>Optional</sup> <a name="measureLatencyInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.measureLatencyInput"></a>

```java
public java.lang.Boolean|IResolvable getMeasureLatencyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.regionsInput"></a>

```java
public java.util.List<java.lang.String> getRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requestIntervalInput`<sup>Optional</sup> <a name="requestIntervalInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.requestIntervalInput"></a>

```java
public java.lang.Number getRequestIntervalInput();
```

- *Type:* java.lang.Number

---

##### `resourcePathInput`<sup>Optional</sup> <a name="resourcePathInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.resourcePathInput"></a>

```java
public java.lang.String getResourcePathInput();
```

- *Type:* java.lang.String

---

##### `routingControlArnInput`<sup>Optional</sup> <a name="routingControlArnInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.routingControlArnInput"></a>

```java
public java.lang.String getRoutingControlArnInput();
```

- *Type:* java.lang.String

---

##### `searchStringInput`<sup>Optional</sup> <a name="searchStringInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.searchStringInput"></a>

```java
public java.lang.String getSearchStringInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `childHealthChecks`<sup>Required</sup> <a name="childHealthChecks" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.childHealthChecks"></a>

```java
public java.util.List<java.lang.String> getChildHealthChecks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableSni`<sup>Required</sup> <a name="enableSni" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.enableSni"></a>

```java
public java.lang.Boolean|IResolvable getEnableSni();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.failureThreshold"></a>

```java
public java.lang.Number getFailureThreshold();
```

- *Type:* java.lang.Number

---

##### `fullyQualifiedDomainName`<sup>Required</sup> <a name="fullyQualifiedDomainName" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.fullyQualifiedDomainName"></a>

```java
public java.lang.String getFullyQualifiedDomainName();
```

- *Type:* java.lang.String

---

##### `healthThreshold`<sup>Required</sup> <a name="healthThreshold" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.healthThreshold"></a>

```java
public java.lang.Number getHealthThreshold();
```

- *Type:* java.lang.Number

---

##### `insufficientDataHealthStatus`<sup>Required</sup> <a name="insufficientDataHealthStatus" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.insufficientDataHealthStatus"></a>

```java
public java.lang.String getInsufficientDataHealthStatus();
```

- *Type:* java.lang.String

---

##### `inverted`<sup>Required</sup> <a name="inverted" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.inverted"></a>

```java
public java.lang.Boolean|IResolvable getInverted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `measureLatency`<sup>Required</sup> <a name="measureLatency" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.measureLatency"></a>

```java
public java.lang.Boolean|IResolvable getMeasureLatency();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requestInterval`<sup>Required</sup> <a name="requestInterval" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.requestInterval"></a>

```java
public java.lang.Number getRequestInterval();
```

- *Type:* java.lang.Number

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.resourcePath"></a>

```java
public java.lang.String getResourcePath();
```

- *Type:* java.lang.String

---

##### `routingControlArn`<sup>Required</sup> <a name="routingControlArn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.routingControlArn"></a>

```java
public java.lang.String getRoutingControlArn();
```

- *Type:* java.lang.String

---

##### `searchString`<sup>Required</sup> <a name="searchString" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.searchString"></a>

```java
public java.lang.String getSearchString();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53HealthCheckHealthCheckConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a>

---


### Route53HealthCheckHealthCheckTagsList <a name="Route53HealthCheckHealthCheckTagsList" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_health_check.Route53HealthCheckHealthCheckTagsList;

new Route53HealthCheckHealthCheckTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.get"></a>

```java
public Route53HealthCheckHealthCheckTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Route53HealthCheckHealthCheckTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>>

---


### Route53HealthCheckHealthCheckTagsOutputReference <a name="Route53HealthCheckHealthCheckTagsOutputReference" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_health_check.Route53HealthCheckHealthCheckTagsOutputReference;

new Route53HealthCheckHealthCheckTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53HealthCheckHealthCheckTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>

---



