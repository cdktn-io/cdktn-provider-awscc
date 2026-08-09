# `redshiftIntegration` Submodule <a name="`redshiftIntegration` Submodule" id="@cdktn/provider-awscc.redshiftIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftIntegration <a name="RedshiftIntegration" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_integration awscc_redshift_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_integration.RedshiftIntegration;

RedshiftIntegration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .sourceArn(java.lang.String)
    .targetArn(java.lang.String)
//  .additionalEncryptionContext(java.util.Map<java.lang.String, java.lang.String>)
//  .integrationName(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .tags(IResolvable|java.util.List<RedshiftIntegrationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.Initializer.parameter.sourceArn">sourceArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the database to use as the source for replication. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.Initializer.parameter.targetArn">targetArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Redshift data warehouse to use as the target for replication. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.Initializer.parameter.additionalEncryptionContext">additionalEncryptionContext</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An optional set of non-secret key–value pairs that contains additional contextual information about the data. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.Initializer.parameter.integrationName">integrationName</a></code> | <code>java.lang.String</code> | The name of the integration. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | An KMS key identifier for the key to use to encrypt the integration. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTags">RedshiftIntegrationTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.Initializer.parameter.sourceArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the database to use as the source for replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_integration#source_arn RedshiftIntegration#source_arn}

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.Initializer.parameter.targetArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Redshift data warehouse to use as the target for replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_integration#target_arn RedshiftIntegration#target_arn}

---

##### `additionalEncryptionContext`<sup>Optional</sup> <a name="additionalEncryptionContext" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.Initializer.parameter.additionalEncryptionContext"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An optional set of non-secret key–value pairs that contains additional contextual information about the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_integration#additional_encryption_context RedshiftIntegration#additional_encryption_context}

---

##### `integrationName`<sup>Optional</sup> <a name="integrationName" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.Initializer.parameter.integrationName"></a>

- *Type:* java.lang.String

The name of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_integration#integration_name RedshiftIntegration#integration_name}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

An KMS key identifier for the key to use to encrypt the integration.

If you don't specify an encryption key, the default AWS owned KMS key is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_integration#kms_key_id RedshiftIntegration#kms_key_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTags">RedshiftIntegrationTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_integration#tags RedshiftIntegration#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.resetAdditionalEncryptionContext">resetAdditionalEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.resetIntegrationName">resetIntegrationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<RedshiftIntegrationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTags">RedshiftIntegrationTags</a>>

---

##### `resetAdditionalEncryptionContext` <a name="resetAdditionalEncryptionContext" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.resetAdditionalEncryptionContext"></a>

```java
public void resetAdditionalEncryptionContext()
```

##### `resetIntegrationName` <a name="resetIntegrationName" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.resetIntegrationName"></a>

```java
public void resetIntegrationName()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.isConstruct"></a>

```java
import io.cdktn.providers.awscc.redshift_integration.RedshiftIntegration;

RedshiftIntegration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.redshift_integration.RedshiftIntegration;

RedshiftIntegration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.redshift_integration.RedshiftIntegration;

RedshiftIntegration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.redshift_integration.RedshiftIntegration;

RedshiftIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RedshiftIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RedshiftIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RedshiftIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RedshiftIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.integrationArn">integrationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsList">RedshiftIntegrationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.additionalEncryptionContextInput">additionalEncryptionContextInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.integrationNameInput">integrationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.sourceArnInput">sourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTags">RedshiftIntegrationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.targetArnInput">targetArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.additionalEncryptionContext">additionalEncryptionContext</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.integrationName">integrationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.sourceArn">sourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.targetArn">targetArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `integrationArn`<sup>Required</sup> <a name="integrationArn" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.integrationArn"></a>

```java
public java.lang.String getIntegrationArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.tags"></a>

```java
public RedshiftIntegrationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsList">RedshiftIntegrationTagsList</a>

---

##### `additionalEncryptionContextInput`<sup>Optional</sup> <a name="additionalEncryptionContextInput" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.additionalEncryptionContextInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalEncryptionContextInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `integrationNameInput`<sup>Optional</sup> <a name="integrationNameInput" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.integrationNameInput"></a>

```java
public java.lang.String getIntegrationNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `sourceArnInput`<sup>Optional</sup> <a name="sourceArnInput" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.sourceArnInput"></a>

```java
public java.lang.String getSourceArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.tagsInput"></a>

```java
public IResolvable|java.util.List<RedshiftIntegrationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTags">RedshiftIntegrationTags</a>>

---

##### `targetArnInput`<sup>Optional</sup> <a name="targetArnInput" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.targetArnInput"></a>

```java
public java.lang.String getTargetArnInput();
```

- *Type:* java.lang.String

---

##### `additionalEncryptionContext`<sup>Required</sup> <a name="additionalEncryptionContext" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.additionalEncryptionContext"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalEncryptionContext();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `integrationName`<sup>Required</sup> <a name="integrationName" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.integrationName"></a>

```java
public java.lang.String getIntegrationName();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.sourceArn"></a>

```java
public java.lang.String getSourceArn();
```

- *Type:* java.lang.String

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.targetArn"></a>

```java
public java.lang.String getTargetArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftIntegrationConfig <a name="RedshiftIntegrationConfig" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_integration.RedshiftIntegrationConfig;

RedshiftIntegrationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .sourceArn(java.lang.String)
    .targetArn(java.lang.String)
//  .additionalEncryptionContext(java.util.Map<java.lang.String, java.lang.String>)
//  .integrationName(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .tags(IResolvable|java.util.List<RedshiftIntegrationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationConfig.property.sourceArn">sourceArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the database to use as the source for replication. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationConfig.property.targetArn">targetArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Redshift data warehouse to use as the target for replication. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationConfig.property.additionalEncryptionContext">additionalEncryptionContext</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An optional set of non-secret key–value pairs that contains additional contextual information about the data. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationConfig.property.integrationName">integrationName</a></code> | <code>java.lang.String</code> | The name of the integration. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | An KMS key identifier for the key to use to encrypt the integration. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTags">RedshiftIntegrationTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationConfig.property.sourceArn"></a>

```java
public java.lang.String getSourceArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the database to use as the source for replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_integration#source_arn RedshiftIntegration#source_arn}

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationConfig.property.targetArn"></a>

```java
public java.lang.String getTargetArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Redshift data warehouse to use as the target for replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_integration#target_arn RedshiftIntegration#target_arn}

---

##### `additionalEncryptionContext`<sup>Optional</sup> <a name="additionalEncryptionContext" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationConfig.property.additionalEncryptionContext"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalEncryptionContext();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An optional set of non-secret key–value pairs that contains additional contextual information about the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_integration#additional_encryption_context RedshiftIntegration#additional_encryption_context}

---

##### `integrationName`<sup>Optional</sup> <a name="integrationName" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationConfig.property.integrationName"></a>

```java
public java.lang.String getIntegrationName();
```

- *Type:* java.lang.String

The name of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_integration#integration_name RedshiftIntegration#integration_name}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

An KMS key identifier for the key to use to encrypt the integration.

If you don't specify an encryption key, the default AWS owned KMS key is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_integration#kms_key_id RedshiftIntegration#kms_key_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<RedshiftIntegrationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTags">RedshiftIntegrationTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_integration#tags RedshiftIntegration#tags}

---

### RedshiftIntegrationTags <a name="RedshiftIntegrationTags" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_integration.RedshiftIntegrationTags;

RedshiftIntegrationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_integration#key RedshiftIntegration#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_integration#value RedshiftIntegration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftIntegrationTagsList <a name="RedshiftIntegrationTagsList" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_integration.RedshiftIntegrationTagsList;

new RedshiftIntegrationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsList.get"></a>

```java
public RedshiftIntegrationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTags">RedshiftIntegrationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RedshiftIntegrationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTags">RedshiftIntegrationTags</a>>

---


### RedshiftIntegrationTagsOutputReference <a name="RedshiftIntegrationTagsOutputReference" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_integration.RedshiftIntegrationTagsOutputReference;

new RedshiftIntegrationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTags">RedshiftIntegrationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftIntegrationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftIntegration.RedshiftIntegrationTags">RedshiftIntegrationTags</a>

---



