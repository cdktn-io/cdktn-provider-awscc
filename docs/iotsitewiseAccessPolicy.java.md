# `iotsitewiseAccessPolicy` Submodule <a name="`iotsitewiseAccessPolicy` Submodule" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotsitewiseAccessPolicy <a name="IotsitewiseAccessPolicy" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_access_policy awscc_iotsitewise_access_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_access_policy.IotsitewiseAccessPolicy;

IotsitewiseAccessPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessPolicyIdentity(IotsitewiseAccessPolicyAccessPolicyIdentity)
    .accessPolicyPermission(java.lang.String)
    .accessPolicyResource(IotsitewiseAccessPolicyAccessPolicyResource)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.accessPolicyIdentity">accessPolicyIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity">IotsitewiseAccessPolicyAccessPolicyIdentity</a></code> | The identity for this access policy. Choose either a user or a group but not both. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.accessPolicyPermission">accessPolicyPermission</a></code> | <code>java.lang.String</code> | The permission level for this access policy. Valid values are ADMINISTRATOR or VIEWER. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.accessPolicyResource">accessPolicyResource</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource">IotsitewiseAccessPolicyAccessPolicyResource</a></code> | The AWS IoT SiteWise Monitor resource for this access policy. Choose either portal or project but not both. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessPolicyIdentity`<sup>Required</sup> <a name="accessPolicyIdentity" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.accessPolicyIdentity"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity">IotsitewiseAccessPolicyAccessPolicyIdentity</a>

The identity for this access policy. Choose either a user or a group but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_access_policy#access_policy_identity IotsitewiseAccessPolicy#access_policy_identity}

---

##### `accessPolicyPermission`<sup>Required</sup> <a name="accessPolicyPermission" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.accessPolicyPermission"></a>

- *Type:* java.lang.String

The permission level for this access policy. Valid values are ADMINISTRATOR or VIEWER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_access_policy#access_policy_permission IotsitewiseAccessPolicy#access_policy_permission}

---

##### `accessPolicyResource`<sup>Required</sup> <a name="accessPolicyResource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.accessPolicyResource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource">IotsitewiseAccessPolicyAccessPolicyResource</a>

The AWS IoT SiteWise Monitor resource for this access policy. Choose either portal or project but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_access_policy#access_policy_resource IotsitewiseAccessPolicy#access_policy_resource}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.putAccessPolicyIdentity">putAccessPolicyIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.putAccessPolicyResource">putAccessPolicyResource</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessPolicyIdentity` <a name="putAccessPolicyIdentity" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.putAccessPolicyIdentity"></a>

```java
public void putAccessPolicyIdentity(IotsitewiseAccessPolicyAccessPolicyIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.putAccessPolicyIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity">IotsitewiseAccessPolicyAccessPolicyIdentity</a>

---

##### `putAccessPolicyResource` <a name="putAccessPolicyResource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.putAccessPolicyResource"></a>

```java
public void putAccessPolicyResource(IotsitewiseAccessPolicyAccessPolicyResource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.putAccessPolicyResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource">IotsitewiseAccessPolicyAccessPolicyResource</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotsitewiseAccessPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.isConstruct"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_access_policy.IotsitewiseAccessPolicy;

IotsitewiseAccessPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_access_policy.IotsitewiseAccessPolicy;

IotsitewiseAccessPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_access_policy.IotsitewiseAccessPolicy;

IotsitewiseAccessPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_access_policy.IotsitewiseAccessPolicy;

IotsitewiseAccessPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotsitewiseAccessPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IotsitewiseAccessPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotsitewiseAccessPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotsitewiseAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IotsitewiseAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyArn">accessPolicyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyId">accessPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyIdentity">accessPolicyIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference">IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyResource">accessPolicyResource</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference">IotsitewiseAccessPolicyAccessPolicyResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyIdentityInput">accessPolicyIdentityInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity">IotsitewiseAccessPolicyAccessPolicyIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyPermissionInput">accessPolicyPermissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyResourceInput">accessPolicyResourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource">IotsitewiseAccessPolicyAccessPolicyResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyPermission">accessPolicyPermission</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessPolicyArn`<sup>Required</sup> <a name="accessPolicyArn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyArn"></a>

```java
public java.lang.String getAccessPolicyArn();
```

- *Type:* java.lang.String

---

##### `accessPolicyId`<sup>Required</sup> <a name="accessPolicyId" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyId"></a>

```java
public java.lang.String getAccessPolicyId();
```

- *Type:* java.lang.String

---

##### `accessPolicyIdentity`<sup>Required</sup> <a name="accessPolicyIdentity" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyIdentity"></a>

```java
public IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference getAccessPolicyIdentity();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference">IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference</a>

---

##### `accessPolicyResource`<sup>Required</sup> <a name="accessPolicyResource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyResource"></a>

```java
public IotsitewiseAccessPolicyAccessPolicyResourceOutputReference getAccessPolicyResource();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference">IotsitewiseAccessPolicyAccessPolicyResourceOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `accessPolicyIdentityInput`<sup>Optional</sup> <a name="accessPolicyIdentityInput" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyIdentityInput"></a>

```java
public IResolvable|IotsitewiseAccessPolicyAccessPolicyIdentity getAccessPolicyIdentityInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity">IotsitewiseAccessPolicyAccessPolicyIdentity</a>

---

##### `accessPolicyPermissionInput`<sup>Optional</sup> <a name="accessPolicyPermissionInput" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyPermissionInput"></a>

```java
public java.lang.String getAccessPolicyPermissionInput();
```

- *Type:* java.lang.String

---

##### `accessPolicyResourceInput`<sup>Optional</sup> <a name="accessPolicyResourceInput" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyResourceInput"></a>

```java
public IResolvable|IotsitewiseAccessPolicyAccessPolicyResource getAccessPolicyResourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource">IotsitewiseAccessPolicyAccessPolicyResource</a>

---

##### `accessPolicyPermission`<sup>Required</sup> <a name="accessPolicyPermission" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyPermission"></a>

```java
public java.lang.String getAccessPolicyPermission();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotsitewiseAccessPolicyAccessPolicyIdentity <a name="IotsitewiseAccessPolicyAccessPolicyIdentity" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_access_policy.IotsitewiseAccessPolicyAccessPolicyIdentity;

IotsitewiseAccessPolicyAccessPolicyIdentity.builder()
//  .iamRole(IotsitewiseAccessPolicyAccessPolicyIdentityIamRole)
//  .iamUser(IotsitewiseAccessPolicyAccessPolicyIdentityIamUser)
//  .user(IotsitewiseAccessPolicyAccessPolicyIdentityUser)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity.property.iamRole">iamRole</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole">IotsitewiseAccessPolicyAccessPolicyIdentityIamRole</a></code> | Contains information for an IAM role identity in an access policy. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity.property.iamUser">iamUser</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser">IotsitewiseAccessPolicyAccessPolicyIdentityIamUser</a></code> | Contains information for an IAM user identity in an access policy. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity.property.user">user</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUser">IotsitewiseAccessPolicyAccessPolicyIdentityUser</a></code> | Contains information for a user identity in an access policy. |

---

##### `iamRole`<sup>Optional</sup> <a name="iamRole" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity.property.iamRole"></a>

```java
public IotsitewiseAccessPolicyAccessPolicyIdentityIamRole getIamRole();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole">IotsitewiseAccessPolicyAccessPolicyIdentityIamRole</a>

Contains information for an IAM role identity in an access policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_access_policy#iam_role IotsitewiseAccessPolicy#iam_role}

---

##### `iamUser`<sup>Optional</sup> <a name="iamUser" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity.property.iamUser"></a>

```java
public IotsitewiseAccessPolicyAccessPolicyIdentityIamUser getIamUser();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser">IotsitewiseAccessPolicyAccessPolicyIdentityIamUser</a>

Contains information for an IAM user identity in an access policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_access_policy#iam_user IotsitewiseAccessPolicy#iam_user}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity.property.user"></a>

```java
public IotsitewiseAccessPolicyAccessPolicyIdentityUser getUser();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUser">IotsitewiseAccessPolicyAccessPolicyIdentityUser</a>

Contains information for a user identity in an access policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_access_policy#user IotsitewiseAccessPolicy#user}

---

### IotsitewiseAccessPolicyAccessPolicyIdentityIamRole <a name="IotsitewiseAccessPolicyAccessPolicyIdentityIamRole" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_access_policy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole;

IotsitewiseAccessPolicyAccessPolicyIdentityIamRole.builder()
//  .arn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole.property.arn">arn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

The ARN of the IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_access_policy#arn IotsitewiseAccessPolicy#arn}

---

### IotsitewiseAccessPolicyAccessPolicyIdentityIamUser <a name="IotsitewiseAccessPolicyAccessPolicyIdentityIamUser" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_access_policy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser;

IotsitewiseAccessPolicyAccessPolicyIdentityIamUser.builder()
//  .arn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser.property.arn">arn</a></code> | <code>java.lang.String</code> | The ARN of the IAM user. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

The ARN of the IAM user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_access_policy#arn IotsitewiseAccessPolicy#arn}

---

### IotsitewiseAccessPolicyAccessPolicyIdentityUser <a name="IotsitewiseAccessPolicyAccessPolicyIdentityUser" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUser.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_access_policy.IotsitewiseAccessPolicyAccessPolicyIdentityUser;

IotsitewiseAccessPolicyAccessPolicyIdentityUser.builder()
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUser.property.id">id</a></code> | <code>java.lang.String</code> | The AWS SSO ID of the user. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUser.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The AWS SSO ID of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_access_policy#id IotsitewiseAccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### IotsitewiseAccessPolicyAccessPolicyResource <a name="IotsitewiseAccessPolicyAccessPolicyResource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_access_policy.IotsitewiseAccessPolicyAccessPolicyResource;

IotsitewiseAccessPolicyAccessPolicyResource.builder()
//  .portal(IotsitewiseAccessPolicyAccessPolicyResourcePortal)
//  .project(IotsitewiseAccessPolicyAccessPolicyResourceProject)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource.property.portal">portal</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortal">IotsitewiseAccessPolicyAccessPolicyResourcePortal</a></code> | A portal resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource.property.project">project</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProject">IotsitewiseAccessPolicyAccessPolicyResourceProject</a></code> | A project resource. |

---

##### `portal`<sup>Optional</sup> <a name="portal" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource.property.portal"></a>

```java
public IotsitewiseAccessPolicyAccessPolicyResourcePortal getPortal();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortal">IotsitewiseAccessPolicyAccessPolicyResourcePortal</a>

A portal resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_access_policy#portal IotsitewiseAccessPolicy#portal}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource.property.project"></a>

```java
public IotsitewiseAccessPolicyAccessPolicyResourceProject getProject();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProject">IotsitewiseAccessPolicyAccessPolicyResourceProject</a>

A project resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_access_policy#project IotsitewiseAccessPolicy#project}

---

### IotsitewiseAccessPolicyAccessPolicyResourcePortal <a name="IotsitewiseAccessPolicyAccessPolicyResourcePortal" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortal.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_access_policy.IotsitewiseAccessPolicyAccessPolicyResourcePortal;

IotsitewiseAccessPolicyAccessPolicyResourcePortal.builder()
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortal.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the portal. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortal.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_access_policy#id IotsitewiseAccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### IotsitewiseAccessPolicyAccessPolicyResourceProject <a name="IotsitewiseAccessPolicyAccessPolicyResourceProject" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProject"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProject.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_access_policy.IotsitewiseAccessPolicyAccessPolicyResourceProject;

IotsitewiseAccessPolicyAccessPolicyResourceProject.builder()
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProject.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the project. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProject.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_access_policy#id IotsitewiseAccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### IotsitewiseAccessPolicyConfig <a name="IotsitewiseAccessPolicyConfig" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_access_policy.IotsitewiseAccessPolicyConfig;

IotsitewiseAccessPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessPolicyIdentity(IotsitewiseAccessPolicyAccessPolicyIdentity)
    .accessPolicyPermission(java.lang.String)
    .accessPolicyResource(IotsitewiseAccessPolicyAccessPolicyResource)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.accessPolicyIdentity">accessPolicyIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity">IotsitewiseAccessPolicyAccessPolicyIdentity</a></code> | The identity for this access policy. Choose either a user or a group but not both. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.accessPolicyPermission">accessPolicyPermission</a></code> | <code>java.lang.String</code> | The permission level for this access policy. Valid values are ADMINISTRATOR or VIEWER. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.accessPolicyResource">accessPolicyResource</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource">IotsitewiseAccessPolicyAccessPolicyResource</a></code> | The AWS IoT SiteWise Monitor resource for this access policy. Choose either portal or project but not both. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessPolicyIdentity`<sup>Required</sup> <a name="accessPolicyIdentity" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.accessPolicyIdentity"></a>

```java
public IotsitewiseAccessPolicyAccessPolicyIdentity getAccessPolicyIdentity();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity">IotsitewiseAccessPolicyAccessPolicyIdentity</a>

The identity for this access policy. Choose either a user or a group but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_access_policy#access_policy_identity IotsitewiseAccessPolicy#access_policy_identity}

---

##### `accessPolicyPermission`<sup>Required</sup> <a name="accessPolicyPermission" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.accessPolicyPermission"></a>

```java
public java.lang.String getAccessPolicyPermission();
```

- *Type:* java.lang.String

The permission level for this access policy. Valid values are ADMINISTRATOR or VIEWER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_access_policy#access_policy_permission IotsitewiseAccessPolicy#access_policy_permission}

---

##### `accessPolicyResource`<sup>Required</sup> <a name="accessPolicyResource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.accessPolicyResource"></a>

```java
public IotsitewiseAccessPolicyAccessPolicyResource getAccessPolicyResource();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource">IotsitewiseAccessPolicyAccessPolicyResource</a>

The AWS IoT SiteWise Monitor resource for this access policy. Choose either portal or project but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_access_policy#access_policy_resource IotsitewiseAccessPolicy#access_policy_resource}

---

## Classes <a name="Classes" id="Classes"></a>

### IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference <a name="IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_access_policy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference;

new IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.resetArn">resetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.resetArn"></a>

```java
public void resetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole">IotsitewiseAccessPolicyAccessPolicyIdentityIamRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.internalValue"></a>

```java
public IResolvable|IotsitewiseAccessPolicyAccessPolicyIdentityIamRole getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole">IotsitewiseAccessPolicyAccessPolicyIdentityIamRole</a>

---


### IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference <a name="IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_access_policy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference;

new IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.resetArn">resetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.resetArn"></a>

```java
public void resetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser">IotsitewiseAccessPolicyAccessPolicyIdentityIamUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.internalValue"></a>

```java
public IResolvable|IotsitewiseAccessPolicyAccessPolicyIdentityIamUser getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser">IotsitewiseAccessPolicyAccessPolicyIdentityIamUser</a>

---


### IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference <a name="IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_access_policy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference;

new IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.putIamRole">putIamRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.putIamUser">putIamUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.putUser">putUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.resetIamRole">resetIamRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.resetIamUser">resetIamUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIamRole` <a name="putIamRole" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.putIamRole"></a>

```java
public void putIamRole(IotsitewiseAccessPolicyAccessPolicyIdentityIamRole value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.putIamRole.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole">IotsitewiseAccessPolicyAccessPolicyIdentityIamRole</a>

---

##### `putIamUser` <a name="putIamUser" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.putIamUser"></a>

```java
public void putIamUser(IotsitewiseAccessPolicyAccessPolicyIdentityIamUser value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.putIamUser.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser">IotsitewiseAccessPolicyAccessPolicyIdentityIamUser</a>

---

##### `putUser` <a name="putUser" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.putUser"></a>

```java
public void putUser(IotsitewiseAccessPolicyAccessPolicyIdentityUser value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.putUser.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUser">IotsitewiseAccessPolicyAccessPolicyIdentityUser</a>

---

##### `resetIamRole` <a name="resetIamRole" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.resetIamRole"></a>

```java
public void resetIamRole()
```

##### `resetIamUser` <a name="resetIamUser" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.resetIamUser"></a>

```java
public void resetIamUser()
```

##### `resetUser` <a name="resetUser" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.resetUser"></a>

```java
public void resetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.iamRole">iamRole</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference">IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.iamUser">iamUser</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference">IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.user">user</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference">IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.iamRoleInput">iamRoleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole">IotsitewiseAccessPolicyAccessPolicyIdentityIamRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.iamUserInput">iamUserInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser">IotsitewiseAccessPolicyAccessPolicyIdentityIamUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.userInput">userInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUser">IotsitewiseAccessPolicyAccessPolicyIdentityUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity">IotsitewiseAccessPolicyAccessPolicyIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `iamRole`<sup>Required</sup> <a name="iamRole" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.iamRole"></a>

```java
public IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference getIamRole();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference">IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference</a>

---

##### `iamUser`<sup>Required</sup> <a name="iamUser" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.iamUser"></a>

```java
public IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference getIamUser();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference">IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.user"></a>

```java
public IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference getUser();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference">IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference</a>

---

##### `iamRoleInput`<sup>Optional</sup> <a name="iamRoleInput" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.iamRoleInput"></a>

```java
public IResolvable|IotsitewiseAccessPolicyAccessPolicyIdentityIamRole getIamRoleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole">IotsitewiseAccessPolicyAccessPolicyIdentityIamRole</a>

---

##### `iamUserInput`<sup>Optional</sup> <a name="iamUserInput" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.iamUserInput"></a>

```java
public IResolvable|IotsitewiseAccessPolicyAccessPolicyIdentityIamUser getIamUserInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser">IotsitewiseAccessPolicyAccessPolicyIdentityIamUser</a>

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.userInput"></a>

```java
public IResolvable|IotsitewiseAccessPolicyAccessPolicyIdentityUser getUserInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUser">IotsitewiseAccessPolicyAccessPolicyIdentityUser</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.internalValue"></a>

```java
public IResolvable|IotsitewiseAccessPolicyAccessPolicyIdentity getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity">IotsitewiseAccessPolicyAccessPolicyIdentity</a>

---


### IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference <a name="IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_access_policy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference;

new IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.resetId"></a>

```java
public void resetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUser">IotsitewiseAccessPolicyAccessPolicyIdentityUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.internalValue"></a>

```java
public IResolvable|IotsitewiseAccessPolicyAccessPolicyIdentityUser getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUser">IotsitewiseAccessPolicyAccessPolicyIdentityUser</a>

---


### IotsitewiseAccessPolicyAccessPolicyResourceOutputReference <a name="IotsitewiseAccessPolicyAccessPolicyResourceOutputReference" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_access_policy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference;

new IotsitewiseAccessPolicyAccessPolicyResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.putPortal">putPortal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.putProject">putProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.resetPortal">resetPortal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.resetProject">resetProject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPortal` <a name="putPortal" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.putPortal"></a>

```java
public void putPortal(IotsitewiseAccessPolicyAccessPolicyResourcePortal value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.putPortal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortal">IotsitewiseAccessPolicyAccessPolicyResourcePortal</a>

---

##### `putProject` <a name="putProject" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.putProject"></a>

```java
public void putProject(IotsitewiseAccessPolicyAccessPolicyResourceProject value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.putProject.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProject">IotsitewiseAccessPolicyAccessPolicyResourceProject</a>

---

##### `resetPortal` <a name="resetPortal" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.resetPortal"></a>

```java
public void resetPortal()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.resetProject"></a>

```java
public void resetProject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.portal">portal</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference">IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.project">project</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference">IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.portalInput">portalInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortal">IotsitewiseAccessPolicyAccessPolicyResourcePortal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.projectInput">projectInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProject">IotsitewiseAccessPolicyAccessPolicyResourceProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource">IotsitewiseAccessPolicyAccessPolicyResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portal`<sup>Required</sup> <a name="portal" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.portal"></a>

```java
public IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference getPortal();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference">IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference</a>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.project"></a>

```java
public IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference getProject();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference">IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference</a>

---

##### `portalInput`<sup>Optional</sup> <a name="portalInput" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.portalInput"></a>

```java
public IResolvable|IotsitewiseAccessPolicyAccessPolicyResourcePortal getPortalInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortal">IotsitewiseAccessPolicyAccessPolicyResourcePortal</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.projectInput"></a>

```java
public IResolvable|IotsitewiseAccessPolicyAccessPolicyResourceProject getProjectInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProject">IotsitewiseAccessPolicyAccessPolicyResourceProject</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.internalValue"></a>

```java
public IResolvable|IotsitewiseAccessPolicyAccessPolicyResource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource">IotsitewiseAccessPolicyAccessPolicyResource</a>

---


### IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference <a name="IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_access_policy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference;

new IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.resetId"></a>

```java
public void resetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortal">IotsitewiseAccessPolicyAccessPolicyResourcePortal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.internalValue"></a>

```java
public IResolvable|IotsitewiseAccessPolicyAccessPolicyResourcePortal getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortal">IotsitewiseAccessPolicyAccessPolicyResourcePortal</a>

---


### IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference <a name="IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_access_policy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference;

new IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.resetId"></a>

```java
public void resetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProject">IotsitewiseAccessPolicyAccessPolicyResourceProject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.internalValue"></a>

```java
public IResolvable|IotsitewiseAccessPolicyAccessPolicyResourceProject getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProject">IotsitewiseAccessPolicyAccessPolicyResourceProject</a>

---



