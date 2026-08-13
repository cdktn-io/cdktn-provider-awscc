# `cloudformationPublicTypeVersion` Submodule <a name="`cloudformationPublicTypeVersion` Submodule" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationPublicTypeVersion <a name="CloudformationPublicTypeVersion" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_public_type_version awscc_cloudformation_public_type_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_public_type_version.CloudformationPublicTypeVersion;

CloudformationPublicTypeVersion.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .arn(java.lang.String)
//  .logDeliveryBucket(java.lang.String)
//  .publicVersionNumber(java.lang.String)
//  .type(java.lang.String)
//  .typeName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.arn">arn</a></code> | <code>java.lang.String</code> | The Amazon Resource Number (ARN) of the extension. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.logDeliveryBucket">logDeliveryBucket</a></code> | <code>java.lang.String</code> | A url to the S3 bucket where logs for the testType run will be available. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.publicVersionNumber">publicVersionNumber</a></code> | <code>java.lang.String</code> | The version number of a public third-party extension. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The kind of extension. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.typeName">typeName</a></code> | <code>java.lang.String</code> | The name of the type being registered. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.arn"></a>

- *Type:* java.lang.String

The Amazon Resource Number (ARN) of the extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_public_type_version#arn CloudformationPublicTypeVersion#arn}

---

##### `logDeliveryBucket`<sup>Optional</sup> <a name="logDeliveryBucket" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.logDeliveryBucket"></a>

- *Type:* java.lang.String

A url to the S3 bucket where logs for the testType run will be available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_public_type_version#log_delivery_bucket CloudformationPublicTypeVersion#log_delivery_bucket}

---

##### `publicVersionNumber`<sup>Optional</sup> <a name="publicVersionNumber" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.publicVersionNumber"></a>

- *Type:* java.lang.String

The version number of a public third-party extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_public_type_version#public_version_number CloudformationPublicTypeVersion#public_version_number}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The kind of extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_public_type_version#type CloudformationPublicTypeVersion#type}

---

##### `typeName`<sup>Optional</sup> <a name="typeName" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.typeName"></a>

- *Type:* java.lang.String

The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_public_type_version#type_name CloudformationPublicTypeVersion#type_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetLogDeliveryBucket">resetLogDeliveryBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetPublicVersionNumber">resetPublicVersionNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetTypeName">resetTypeName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetArn"></a>

```java
public void resetArn()
```

##### `resetLogDeliveryBucket` <a name="resetLogDeliveryBucket" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetLogDeliveryBucket"></a>

```java
public void resetLogDeliveryBucket()
```

##### `resetPublicVersionNumber` <a name="resetPublicVersionNumber" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetPublicVersionNumber"></a>

```java
public void resetPublicVersionNumber()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetType"></a>

```java
public void resetType()
```

##### `resetTypeName` <a name="resetTypeName" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetTypeName"></a>

```java
public void resetTypeName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudformationPublicTypeVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cloudformation_public_type_version.CloudformationPublicTypeVersion;

CloudformationPublicTypeVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cloudformation_public_type_version.CloudformationPublicTypeVersion;

CloudformationPublicTypeVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cloudformation_public_type_version.CloudformationPublicTypeVersion;

CloudformationPublicTypeVersion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cloudformation_public_type_version.CloudformationPublicTypeVersion;

CloudformationPublicTypeVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudformationPublicTypeVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudformationPublicTypeVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudformationPublicTypeVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudformationPublicTypeVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_public_type_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationPublicTypeVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.publicTypeArn">publicTypeArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.publisherId">publisherId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.typeVersionArn">typeVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.logDeliveryBucketInput">logDeliveryBucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.publicVersionNumberInput">publicVersionNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.typeNameInput">typeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.logDeliveryBucket">logDeliveryBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.publicVersionNumber">publicVersionNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.typeName">typeName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `publicTypeArn`<sup>Required</sup> <a name="publicTypeArn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.publicTypeArn"></a>

```java
public java.lang.String getPublicTypeArn();
```

- *Type:* java.lang.String

---

##### `publisherId`<sup>Required</sup> <a name="publisherId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.publisherId"></a>

```java
public java.lang.String getPublisherId();
```

- *Type:* java.lang.String

---

##### `typeVersionArn`<sup>Required</sup> <a name="typeVersionArn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.typeVersionArn"></a>

```java
public java.lang.String getTypeVersionArn();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `logDeliveryBucketInput`<sup>Optional</sup> <a name="logDeliveryBucketInput" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.logDeliveryBucketInput"></a>

```java
public java.lang.String getLogDeliveryBucketInput();
```

- *Type:* java.lang.String

---

##### `publicVersionNumberInput`<sup>Optional</sup> <a name="publicVersionNumberInput" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.publicVersionNumberInput"></a>

```java
public java.lang.String getPublicVersionNumberInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.typeNameInput"></a>

```java
public java.lang.String getTypeNameInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `logDeliveryBucket`<sup>Required</sup> <a name="logDeliveryBucket" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.logDeliveryBucket"></a>

```java
public java.lang.String getLogDeliveryBucket();
```

- *Type:* java.lang.String

---

##### `publicVersionNumber`<sup>Required</sup> <a name="publicVersionNumber" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.publicVersionNumber"></a>

```java
public java.lang.String getPublicVersionNumber();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationPublicTypeVersionConfig <a name="CloudformationPublicTypeVersionConfig" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_public_type_version.CloudformationPublicTypeVersionConfig;

CloudformationPublicTypeVersionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .arn(java.lang.String)
//  .logDeliveryBucket(java.lang.String)
//  .publicVersionNumber(java.lang.String)
//  .type(java.lang.String)
//  .typeName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.arn">arn</a></code> | <code>java.lang.String</code> | The Amazon Resource Number (ARN) of the extension. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.logDeliveryBucket">logDeliveryBucket</a></code> | <code>java.lang.String</code> | A url to the S3 bucket where logs for the testType run will be available. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.publicVersionNumber">publicVersionNumber</a></code> | <code>java.lang.String</code> | The version number of a public third-party extension. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.type">type</a></code> | <code>java.lang.String</code> | The kind of extension. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.typeName">typeName</a></code> | <code>java.lang.String</code> | The name of the type being registered. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

The Amazon Resource Number (ARN) of the extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_public_type_version#arn CloudformationPublicTypeVersion#arn}

---

##### `logDeliveryBucket`<sup>Optional</sup> <a name="logDeliveryBucket" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.logDeliveryBucket"></a>

```java
public java.lang.String getLogDeliveryBucket();
```

- *Type:* java.lang.String

A url to the S3 bucket where logs for the testType run will be available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_public_type_version#log_delivery_bucket CloudformationPublicTypeVersion#log_delivery_bucket}

---

##### `publicVersionNumber`<sup>Optional</sup> <a name="publicVersionNumber" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.publicVersionNumber"></a>

```java
public java.lang.String getPublicVersionNumber();
```

- *Type:* java.lang.String

The version number of a public third-party extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_public_type_version#public_version_number CloudformationPublicTypeVersion#public_version_number}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The kind of extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_public_type_version#type CloudformationPublicTypeVersion#type}

---

##### `typeName`<sup>Optional</sup> <a name="typeName" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_public_type_version#type_name CloudformationPublicTypeVersion#type_name}

---



