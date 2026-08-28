# `cloudfrontOriginRequestPolicy` Submodule <a name="`cloudfrontOriginRequestPolicy` Submodule" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontOriginRequestPolicy <a name="CloudfrontOriginRequestPolicy" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_request_policy awscc_cloudfront_origin_request_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_origin_request_policy.CloudfrontOriginRequestPolicy;

CloudfrontOriginRequestPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .originRequestPolicyConfig(CloudfrontOriginRequestPolicyOriginRequestPolicyConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.originRequestPolicyConfig">originRequestPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfig">CloudfrontOriginRequestPolicyOriginRequestPolicyConfig</a></code> | The origin request policy configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `originRequestPolicyConfig`<sup>Required</sup> <a name="originRequestPolicyConfig" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.originRequestPolicyConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfig">CloudfrontOriginRequestPolicyOriginRequestPolicyConfig</a>

The origin request policy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_request_policy#origin_request_policy_config CloudfrontOriginRequestPolicy#origin_request_policy_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.putOriginRequestPolicyConfig">putOriginRequestPolicyConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOriginRequestPolicyConfig` <a name="putOriginRequestPolicyConfig" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.putOriginRequestPolicyConfig"></a>

```java
public void putOriginRequestPolicyConfig(CloudfrontOriginRequestPolicyOriginRequestPolicyConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.putOriginRequestPolicyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfig">CloudfrontOriginRequestPolicyOriginRequestPolicyConfig</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudfrontOriginRequestPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cloudfront_origin_request_policy.CloudfrontOriginRequestPolicy;

CloudfrontOriginRequestPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cloudfront_origin_request_policy.CloudfrontOriginRequestPolicy;

CloudfrontOriginRequestPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cloudfront_origin_request_policy.CloudfrontOriginRequestPolicy;

CloudfrontOriginRequestPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cloudfront_origin_request_policy.CloudfrontOriginRequestPolicy;

CloudfrontOriginRequestPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudfrontOriginRequestPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudfrontOriginRequestPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudfrontOriginRequestPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudfrontOriginRequestPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_request_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudfrontOriginRequestPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.originRequestPolicyConfig">originRequestPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference">CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.originRequestPolicyId">originRequestPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.originRequestPolicyConfigInput">originRequestPolicyConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfig">CloudfrontOriginRequestPolicyOriginRequestPolicyConfig</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.lastModifiedTime"></a>

```java
public java.lang.String getLastModifiedTime();
```

- *Type:* java.lang.String

---

##### `originRequestPolicyConfig`<sup>Required</sup> <a name="originRequestPolicyConfig" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.originRequestPolicyConfig"></a>

```java
public CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference getOriginRequestPolicyConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference">CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference</a>

---

##### `originRequestPolicyId`<sup>Required</sup> <a name="originRequestPolicyId" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.originRequestPolicyId"></a>

```java
public java.lang.String getOriginRequestPolicyId();
```

- *Type:* java.lang.String

---

##### `originRequestPolicyConfigInput`<sup>Optional</sup> <a name="originRequestPolicyConfigInput" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.originRequestPolicyConfigInput"></a>

```java
public IResolvable|CloudfrontOriginRequestPolicyOriginRequestPolicyConfig getOriginRequestPolicyConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfig">CloudfrontOriginRequestPolicyOriginRequestPolicyConfig</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontOriginRequestPolicyConfig <a name="CloudfrontOriginRequestPolicyConfig" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_origin_request_policy.CloudfrontOriginRequestPolicyConfig;

CloudfrontOriginRequestPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .originRequestPolicyConfig(CloudfrontOriginRequestPolicyOriginRequestPolicyConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.originRequestPolicyConfig">originRequestPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfig">CloudfrontOriginRequestPolicyOriginRequestPolicyConfig</a></code> | The origin request policy configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `originRequestPolicyConfig`<sup>Required</sup> <a name="originRequestPolicyConfig" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.originRequestPolicyConfig"></a>

```java
public CloudfrontOriginRequestPolicyOriginRequestPolicyConfig getOriginRequestPolicyConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfig">CloudfrontOriginRequestPolicyOriginRequestPolicyConfig</a>

The origin request policy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_request_policy#origin_request_policy_config CloudfrontOriginRequestPolicy#origin_request_policy_config}

---

### CloudfrontOriginRequestPolicyOriginRequestPolicyConfig <a name="CloudfrontOriginRequestPolicyOriginRequestPolicyConfig" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_origin_request_policy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfig;

CloudfrontOriginRequestPolicyOriginRequestPolicyConfig.builder()
    .cookiesConfig(CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig)
    .headersConfig(CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig)
    .name(java.lang.String)
    .queryStringsConfig(CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig)
//  .comment(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfig.property.cookiesConfig">cookiesConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig">CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig</a></code> | The cookies from viewer requests to include in origin requests. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfig.property.headersConfig">headersConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig">CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig</a></code> | The HTTP headers to include in origin requests. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | A unique name to identify the origin request policy. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfig.property.queryStringsConfig">queryStringsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig">CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig</a></code> | The URL query strings from viewer requests to include in origin requests. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | A comment to describe the origin request policy. The comment cannot be longer than 128 characters. |

---

##### `cookiesConfig`<sup>Required</sup> <a name="cookiesConfig" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfig.property.cookiesConfig"></a>

```java
public CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig getCookiesConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig">CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig</a>

The cookies from viewer requests to include in origin requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_request_policy#cookies_config CloudfrontOriginRequestPolicy#cookies_config}

---

##### `headersConfig`<sup>Required</sup> <a name="headersConfig" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfig.property.headersConfig"></a>

```java
public CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig getHeadersConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig">CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig</a>

The HTTP headers to include in origin requests.

These can include headers from viewer requests and additional headers added by CloudFront.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_request_policy#headers_config CloudfrontOriginRequestPolicy#headers_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A unique name to identify the origin request policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_request_policy#name CloudfrontOriginRequestPolicy#name}

---

##### `queryStringsConfig`<sup>Required</sup> <a name="queryStringsConfig" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfig.property.queryStringsConfig"></a>

```java
public CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig getQueryStringsConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig">CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig</a>

The URL query strings from viewer requests to include in origin requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_request_policy#query_strings_config CloudfrontOriginRequestPolicy#query_strings_config}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

A comment to describe the origin request policy. The comment cannot be longer than 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_request_policy#comment CloudfrontOriginRequestPolicy#comment}

---

### CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig <a name="CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_origin_request_policy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig;

CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig.builder()
    .cookieBehavior(java.lang.String)
//  .cookies(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig.property.cookieBehavior">cookieBehavior</a></code> | <code>java.lang.String</code> | Determines whether cookies in viewer requests are included in requests that CloudFront sends to the origin. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig.property.cookies">cookies</a></code> | <code>java.util.List<java.lang.String></code> | Contains a list of cookie names. |

---

##### `cookieBehavior`<sup>Required</sup> <a name="cookieBehavior" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig.property.cookieBehavior"></a>

```java
public java.lang.String getCookieBehavior();
```

- *Type:* java.lang.String

Determines whether cookies in viewer requests are included in requests that CloudFront sends to the origin.

Valid values are:

* `none` ? No cookies in viewer requests are included in requests that CloudFront sends to the origin. Even when this field is set to `none`, any cookies that are listed in a `CachePolicy`*are* included in origin requests.
* `whitelist` ? Only the cookies in viewer requests that are listed in the `CookieNames` type are included in requests that CloudFront sends to the origin.
* `all` ? All cookies in viewer requests are included in requests that CloudFront sends to the origin.
* `allExcept` ? All cookies in viewer requests are included in requests that CloudFront sends to the origin, *except* for those listed in the `CookieNames` type, which are not included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_request_policy#cookie_behavior CloudfrontOriginRequestPolicy#cookie_behavior}

---

##### `cookies`<sup>Optional</sup> <a name="cookies" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig.property.cookies"></a>

```java
public java.util.List<java.lang.String> getCookies();
```

- *Type:* java.util.List<java.lang.String>

Contains a list of cookie names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_request_policy#cookies CloudfrontOriginRequestPolicy#cookies}

---

### CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig <a name="CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_origin_request_policy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig;

CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig.builder()
    .headerBehavior(java.lang.String)
//  .headers(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig.property.headerBehavior">headerBehavior</a></code> | <code>java.lang.String</code> | Determines whether any HTTP headers are included in requests that CloudFront sends to the origin. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig.property.headers">headers</a></code> | <code>java.util.List<java.lang.String></code> | Contains a list of HTTP header names. |

---

##### `headerBehavior`<sup>Required</sup> <a name="headerBehavior" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig.property.headerBehavior"></a>

```java
public java.lang.String getHeaderBehavior();
```

- *Type:* java.lang.String

Determines whether any HTTP headers are included in requests that CloudFront sends to the origin.

Valid values are:

* `none` ? No HTTP headers in viewer requests are included in requests that CloudFront sends to the origin. Even when this field is set to `none`, any headers that are listed in a `CachePolicy`*are* included in origin requests.
* `whitelist` ? Only the HTTP headers that are listed in the `Headers` type are included in requests that CloudFront sends to the origin.
* `allViewer` ? All HTTP headers in viewer requests are included in requests that CloudFront sends to the origin.
* `allViewerAndWhitelistCloudFront` ? All HTTP headers in viewer requests and the additional CloudFront headers that are listed in the `Headers` type are included in requests that CloudFront sends to the origin. The additional headers are added by CloudFront.
* `allExcept` ? All HTTP headers in viewer requests are included in requests that CloudFront sends to the origin, *except* for those listed in the `Headers` type, which are not included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_request_policy#header_behavior CloudfrontOriginRequestPolicy#header_behavior}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig.property.headers"></a>

```java
public java.util.List<java.lang.String> getHeaders();
```

- *Type:* java.util.List<java.lang.String>

Contains a list of HTTP header names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_request_policy#headers CloudfrontOriginRequestPolicy#headers}

---

### CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig <a name="CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_origin_request_policy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig;

CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig.builder()
    .queryStringBehavior(java.lang.String)
//  .queryStrings(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig.property.queryStringBehavior">queryStringBehavior</a></code> | <code>java.lang.String</code> | Determines whether any URL query strings in viewer requests are included in requests that CloudFront sends to the origin. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig.property.queryStrings">queryStrings</a></code> | <code>java.util.List<java.lang.String></code> | Contains a list of query string names. |

---

##### `queryStringBehavior`<sup>Required</sup> <a name="queryStringBehavior" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig.property.queryStringBehavior"></a>

```java
public java.lang.String getQueryStringBehavior();
```

- *Type:* java.lang.String

Determines whether any URL query strings in viewer requests are included in requests that CloudFront sends to the origin.

Valid values are:

* `none` ? No query strings in viewer requests are included in requests that CloudFront sends to the origin. Even when this field is set to `none`, any query strings that are listed in a `CachePolicy`*are* included in origin requests.
* `whitelist` ? Only the query strings in viewer requests that are listed in the `QueryStringNames` type are included in requests that CloudFront sends to the origin.
* `all` ? All query strings in viewer requests are included in requests that CloudFront sends to the origin.
* `allExcept` ? All query strings in viewer requests are included in requests that CloudFront sends to the origin, *except* for those listed in the `QueryStringNames` type, which are not included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_request_policy#query_string_behavior CloudfrontOriginRequestPolicy#query_string_behavior}

---

##### `queryStrings`<sup>Optional</sup> <a name="queryStrings" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig.property.queryStrings"></a>

```java
public java.util.List<java.lang.String> getQueryStrings();
```

- *Type:* java.util.List<java.lang.String>

Contains a list of query string names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_request_policy#query_strings CloudfrontOriginRequestPolicy#query_strings}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference <a name="CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_origin_request_policy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference;

new CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.resetCookies">resetCookies</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCookies` <a name="resetCookies" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.resetCookies"></a>

```java
public void resetCookies()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.cookieBehaviorInput">cookieBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.cookiesInput">cookiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.cookieBehavior">cookieBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.cookies">cookies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig">CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cookieBehaviorInput`<sup>Optional</sup> <a name="cookieBehaviorInput" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.cookieBehaviorInput"></a>

```java
public java.lang.String getCookieBehaviorInput();
```

- *Type:* java.lang.String

---

##### `cookiesInput`<sup>Optional</sup> <a name="cookiesInput" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.cookiesInput"></a>

```java
public java.util.List<java.lang.String> getCookiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cookieBehavior`<sup>Required</sup> <a name="cookieBehavior" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.cookieBehavior"></a>

```java
public java.lang.String getCookieBehavior();
```

- *Type:* java.lang.String

---

##### `cookies`<sup>Required</sup> <a name="cookies" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.cookies"></a>

```java
public java.util.List<java.lang.String> getCookies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig">CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig</a>

---


### CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference <a name="CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_origin_request_policy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference;

new CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaders` <a name="resetHeaders" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.headerBehaviorInput">headerBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.headersInput">headersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.headerBehavior">headerBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.headers">headers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig">CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerBehaviorInput`<sup>Optional</sup> <a name="headerBehaviorInput" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.headerBehaviorInput"></a>

```java
public java.lang.String getHeaderBehaviorInput();
```

- *Type:* java.lang.String

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.headersInput"></a>

```java
public java.util.List<java.lang.String> getHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `headerBehavior`<sup>Required</sup> <a name="headerBehavior" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.headerBehavior"></a>

```java
public java.lang.String getHeaderBehavior();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.headers"></a>

```java
public java.util.List<java.lang.String> getHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig">CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig</a>

---


### CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference <a name="CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_origin_request_policy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference;

new CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.putCookiesConfig">putCookiesConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.putHeadersConfig">putHeadersConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.putQueryStringsConfig">putQueryStringsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.resetComment">resetComment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCookiesConfig` <a name="putCookiesConfig" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.putCookiesConfig"></a>

```java
public void putCookiesConfig(CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.putCookiesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig">CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig</a>

---

##### `putHeadersConfig` <a name="putHeadersConfig" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.putHeadersConfig"></a>

```java
public void putHeadersConfig(CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.putHeadersConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig">CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig</a>

---

##### `putQueryStringsConfig` <a name="putQueryStringsConfig" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.putQueryStringsConfig"></a>

```java
public void putQueryStringsConfig(CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.putQueryStringsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig">CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.resetComment"></a>

```java
public void resetComment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.cookiesConfig">cookiesConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference">CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.headersConfig">headersConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference">CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.queryStringsConfig">queryStringsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference">CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.cookiesConfigInput">cookiesConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig">CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.headersConfigInput">headersConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig">CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.queryStringsConfigInput">queryStringsConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig">CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfig">CloudfrontOriginRequestPolicyOriginRequestPolicyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cookiesConfig`<sup>Required</sup> <a name="cookiesConfig" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.cookiesConfig"></a>

```java
public CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference getCookiesConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference">CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference</a>

---

##### `headersConfig`<sup>Required</sup> <a name="headersConfig" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.headersConfig"></a>

```java
public CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference getHeadersConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference">CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference</a>

---

##### `queryStringsConfig`<sup>Required</sup> <a name="queryStringsConfig" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.queryStringsConfig"></a>

```java
public CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference getQueryStringsConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference">CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `cookiesConfigInput`<sup>Optional</sup> <a name="cookiesConfigInput" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.cookiesConfigInput"></a>

```java
public IResolvable|CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig getCookiesConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig">CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig</a>

---

##### `headersConfigInput`<sup>Optional</sup> <a name="headersConfigInput" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.headersConfigInput"></a>

```java
public IResolvable|CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig getHeadersConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig">CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `queryStringsConfigInput`<sup>Optional</sup> <a name="queryStringsConfigInput" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.queryStringsConfigInput"></a>

```java
public IResolvable|CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig getQueryStringsConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig">CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudfrontOriginRequestPolicyOriginRequestPolicyConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfig">CloudfrontOriginRequestPolicyOriginRequestPolicyConfig</a>

---


### CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference <a name="CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_origin_request_policy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference;

new CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.resetQueryStrings">resetQueryStrings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQueryStrings` <a name="resetQueryStrings" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.resetQueryStrings"></a>

```java
public void resetQueryStrings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.queryStringBehaviorInput">queryStringBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.queryStringsInput">queryStringsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.queryStringBehavior">queryStringBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.queryStrings">queryStrings</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig">CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queryStringBehaviorInput`<sup>Optional</sup> <a name="queryStringBehaviorInput" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.queryStringBehaviorInput"></a>

```java
public java.lang.String getQueryStringBehaviorInput();
```

- *Type:* java.lang.String

---

##### `queryStringsInput`<sup>Optional</sup> <a name="queryStringsInput" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.queryStringsInput"></a>

```java
public java.util.List<java.lang.String> getQueryStringsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryStringBehavior`<sup>Required</sup> <a name="queryStringBehavior" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.queryStringBehavior"></a>

```java
public java.lang.String getQueryStringBehavior();
```

- *Type:* java.lang.String

---

##### `queryStrings`<sup>Required</sup> <a name="queryStrings" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.queryStrings"></a>

```java
public java.util.List<java.lang.String> getQueryStrings();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig">CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig</a>

---



