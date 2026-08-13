# `emrStudioSessionMapping` Submodule <a name="`emrStudioSessionMapping` Submodule" id="@cdktn/provider-awscc.emrStudioSessionMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrStudioSessionMapping <a name="EmrStudioSessionMapping" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/emr_studio_session_mapping awscc_emr_studio_session_mapping}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer"></a>

```java
import io.cdktn.providers.awscc.emr_studio_session_mapping.EmrStudioSessionMapping;

EmrStudioSessionMapping.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .identityName(java.lang.String)
    .identityType(java.lang.String)
    .sessionPolicyArn(java.lang.String)
    .studioId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.identityName">identityName</a></code> | <code>java.lang.String</code> | The name of the user or group. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.identityType">identityType</a></code> | <code>java.lang.String</code> | Specifies whether the identity to map to the Studio is a user or a group. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.sessionPolicyArn">sessionPolicyArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) for the session policy that will be applied to the user or group. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.studioId">studioId</a></code> | <code>java.lang.String</code> | The ID of the Amazon EMR Studio to which the user or group will be mapped. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `identityName`<sup>Required</sup> <a name="identityName" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.identityName"></a>

- *Type:* java.lang.String

The name of the user or group.

For more information, see UserName and DisplayName in the AWS SSO Identity Store API Reference. Either IdentityName or IdentityId must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/emr_studio_session_mapping#identity_name EmrStudioSessionMapping#identity_name}

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.identityType"></a>

- *Type:* java.lang.String

Specifies whether the identity to map to the Studio is a user or a group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/emr_studio_session_mapping#identity_type EmrStudioSessionMapping#identity_type}

---

##### `sessionPolicyArn`<sup>Required</sup> <a name="sessionPolicyArn" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.sessionPolicyArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) for the session policy that will be applied to the user or group.

Session policies refine Studio user permissions without the need to use multiple IAM user roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/emr_studio_session_mapping#session_policy_arn EmrStudioSessionMapping#session_policy_arn}

---

##### `studioId`<sup>Required</sup> <a name="studioId" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.studioId"></a>

- *Type:* java.lang.String

The ID of the Amazon EMR Studio to which the user or group will be mapped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/emr_studio_session_mapping#studio_id EmrStudioSessionMapping#studio_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EmrStudioSessionMapping resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.isConstruct"></a>

```java
import io.cdktn.providers.awscc.emr_studio_session_mapping.EmrStudioSessionMapping;

EmrStudioSessionMapping.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.emr_studio_session_mapping.EmrStudioSessionMapping;

EmrStudioSessionMapping.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.emr_studio_session_mapping.EmrStudioSessionMapping;

EmrStudioSessionMapping.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.emr_studio_session_mapping.EmrStudioSessionMapping;

EmrStudioSessionMapping.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EmrStudioSessionMapping.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a EmrStudioSessionMapping resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EmrStudioSessionMapping to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EmrStudioSessionMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/emr_studio_session_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the EmrStudioSessionMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityNameInput">identityNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityTypeInput">identityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.sessionPolicyArnInput">sessionPolicyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.studioIdInput">studioIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityName">identityName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityType">identityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.sessionPolicyArn">sessionPolicyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.studioId">studioId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityNameInput`<sup>Optional</sup> <a name="identityNameInput" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityNameInput"></a>

```java
public java.lang.String getIdentityNameInput();
```

- *Type:* java.lang.String

---

##### `identityTypeInput`<sup>Optional</sup> <a name="identityTypeInput" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityTypeInput"></a>

```java
public java.lang.String getIdentityTypeInput();
```

- *Type:* java.lang.String

---

##### `sessionPolicyArnInput`<sup>Optional</sup> <a name="sessionPolicyArnInput" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.sessionPolicyArnInput"></a>

```java
public java.lang.String getSessionPolicyArnInput();
```

- *Type:* java.lang.String

---

##### `studioIdInput`<sup>Optional</sup> <a name="studioIdInput" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.studioIdInput"></a>

```java
public java.lang.String getStudioIdInput();
```

- *Type:* java.lang.String

---

##### `identityName`<sup>Required</sup> <a name="identityName" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityName"></a>

```java
public java.lang.String getIdentityName();
```

- *Type:* java.lang.String

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

---

##### `sessionPolicyArn`<sup>Required</sup> <a name="sessionPolicyArn" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.sessionPolicyArn"></a>

```java
public java.lang.String getSessionPolicyArn();
```

- *Type:* java.lang.String

---

##### `studioId`<sup>Required</sup> <a name="studioId" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.studioId"></a>

```java
public java.lang.String getStudioId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EmrStudioSessionMappingConfig <a name="EmrStudioSessionMappingConfig" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.emr_studio_session_mapping.EmrStudioSessionMappingConfig;

EmrStudioSessionMappingConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .identityName(java.lang.String)
    .identityType(java.lang.String)
    .sessionPolicyArn(java.lang.String)
    .studioId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.identityName">identityName</a></code> | <code>java.lang.String</code> | The name of the user or group. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.identityType">identityType</a></code> | <code>java.lang.String</code> | Specifies whether the identity to map to the Studio is a user or a group. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.sessionPolicyArn">sessionPolicyArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) for the session policy that will be applied to the user or group. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.studioId">studioId</a></code> | <code>java.lang.String</code> | The ID of the Amazon EMR Studio to which the user or group will be mapped. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `identityName`<sup>Required</sup> <a name="identityName" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.identityName"></a>

```java
public java.lang.String getIdentityName();
```

- *Type:* java.lang.String

The name of the user or group.

For more information, see UserName and DisplayName in the AWS SSO Identity Store API Reference. Either IdentityName or IdentityId must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/emr_studio_session_mapping#identity_name EmrStudioSessionMapping#identity_name}

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

Specifies whether the identity to map to the Studio is a user or a group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/emr_studio_session_mapping#identity_type EmrStudioSessionMapping#identity_type}

---

##### `sessionPolicyArn`<sup>Required</sup> <a name="sessionPolicyArn" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.sessionPolicyArn"></a>

```java
public java.lang.String getSessionPolicyArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) for the session policy that will be applied to the user or group.

Session policies refine Studio user permissions without the need to use multiple IAM user roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/emr_studio_session_mapping#session_policy_arn EmrStudioSessionMapping#session_policy_arn}

---

##### `studioId`<sup>Required</sup> <a name="studioId" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.studioId"></a>

```java
public java.lang.String getStudioId();
```

- *Type:* java.lang.String

The ID of the Amazon EMR Studio to which the user or group will be mapped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/emr_studio_session_mapping#studio_id EmrStudioSessionMapping#studio_id}

---



