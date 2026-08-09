# `route53KeySigningKey` Submodule <a name="`route53KeySigningKey` Submodule" id="@cdktn/provider-awscc.route53KeySigningKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53KeySigningKey <a name="Route53KeySigningKey" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_key_signing_key awscc_route53_key_signing_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_key_signing_key.Route53KeySigningKey;

Route53KeySigningKey.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .hostedZoneId(java.lang.String)
    .keyManagementServiceArn(java.lang.String)
    .name(java.lang.String)
    .status(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | The unique string (ID) used to identify a hosted zone. |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.keyManagementServiceArn">keyManagementServiceArn</a></code> | <code>java.lang.String</code> | The Amazon resource name (ARN) for a customer managed key (CMK) in AWS Key Management Service (KMS). |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | An alphanumeric string used to identify a key signing key (KSK). |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | A string specifying the initial status of the key signing key (KSK). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.hostedZoneId"></a>

- *Type:* java.lang.String

The unique string (ID) used to identify a hosted zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_key_signing_key#hosted_zone_id Route53KeySigningKey#hosted_zone_id}

---

##### `keyManagementServiceArn`<sup>Required</sup> <a name="keyManagementServiceArn" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.keyManagementServiceArn"></a>

- *Type:* java.lang.String

The Amazon resource name (ARN) for a customer managed key (CMK) in AWS Key Management Service (KMS).

The KeyManagementServiceArn must be unique for each key signing key (KSK) in a single hosted zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_key_signing_key#key_management_service_arn Route53KeySigningKey#key_management_service_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.name"></a>

- *Type:* java.lang.String

An alphanumeric string used to identify a key signing key (KSK).

Name must be unique for each key signing key in the same hosted zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_key_signing_key#name Route53KeySigningKey#name}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.status"></a>

- *Type:* java.lang.String

A string specifying the initial status of the key signing key (KSK).

You can set the value to ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_key_signing_key#status Route53KeySigningKey#status}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53KeySigningKey resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.isConstruct"></a>

```java
import io.cdktn.providers.awscc.route53_key_signing_key.Route53KeySigningKey;

Route53KeySigningKey.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.route53_key_signing_key.Route53KeySigningKey;

Route53KeySigningKey.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.route53_key_signing_key.Route53KeySigningKey;

Route53KeySigningKey.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.route53_key_signing_key.Route53KeySigningKey;

Route53KeySigningKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Route53KeySigningKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Route53KeySigningKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Route53KeySigningKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Route53KeySigningKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_key_signing_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Route53KeySigningKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.hostedZoneIdInput">hostedZoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.keyManagementServiceArnInput">keyManagementServiceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.keyManagementServiceArn">keyManagementServiceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `hostedZoneIdInput`<sup>Optional</sup> <a name="hostedZoneIdInput" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.hostedZoneIdInput"></a>

```java
public java.lang.String getHostedZoneIdInput();
```

- *Type:* java.lang.String

---

##### `keyManagementServiceArnInput`<sup>Optional</sup> <a name="keyManagementServiceArnInput" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.keyManagementServiceArnInput"></a>

```java
public java.lang.String getKeyManagementServiceArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.hostedZoneId"></a>

```java
public java.lang.String getHostedZoneId();
```

- *Type:* java.lang.String

---

##### `keyManagementServiceArn`<sup>Required</sup> <a name="keyManagementServiceArn" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.keyManagementServiceArn"></a>

```java
public java.lang.String getKeyManagementServiceArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKey.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Route53KeySigningKeyConfig <a name="Route53KeySigningKeyConfig" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKeyConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_key_signing_key.Route53KeySigningKeyConfig;

Route53KeySigningKeyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .hostedZoneId(java.lang.String)
    .keyManagementServiceArn(java.lang.String)
    .name(java.lang.String)
    .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKeyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKeyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKeyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKeyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKeyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKeyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKeyConfig.property.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | The unique string (ID) used to identify a hosted zone. |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKeyConfig.property.keyManagementServiceArn">keyManagementServiceArn</a></code> | <code>java.lang.String</code> | The Amazon resource name (ARN) for a customer managed key (CMK) in AWS Key Management Service (KMS). |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKeyConfig.property.name">name</a></code> | <code>java.lang.String</code> | An alphanumeric string used to identify a key signing key (KSK). |
| <code><a href="#@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKeyConfig.property.status">status</a></code> | <code>java.lang.String</code> | A string specifying the initial status of the key signing key (KSK). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKeyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKeyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKeyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKeyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKeyConfig.property.hostedZoneId"></a>

```java
public java.lang.String getHostedZoneId();
```

- *Type:* java.lang.String

The unique string (ID) used to identify a hosted zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_key_signing_key#hosted_zone_id Route53KeySigningKey#hosted_zone_id}

---

##### `keyManagementServiceArn`<sup>Required</sup> <a name="keyManagementServiceArn" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKeyConfig.property.keyManagementServiceArn"></a>

```java
public java.lang.String getKeyManagementServiceArn();
```

- *Type:* java.lang.String

The Amazon resource name (ARN) for a customer managed key (CMK) in AWS Key Management Service (KMS).

The KeyManagementServiceArn must be unique for each key signing key (KSK) in a single hosted zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_key_signing_key#key_management_service_arn Route53KeySigningKey#key_management_service_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKeyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

An alphanumeric string used to identify a key signing key (KSK).

Name must be unique for each key signing key in the same hosted zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_key_signing_key#name Route53KeySigningKey#name}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.route53KeySigningKey.Route53KeySigningKeyConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

A string specifying the initial status of the key signing key (KSK).

You can set the value to ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_key_signing_key#status Route53KeySigningKey#status}

---



