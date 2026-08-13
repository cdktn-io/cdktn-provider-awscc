# `glueIntegration` Submodule <a name="`glueIntegration` Submodule" id="@cdktn/provider-awscc.glueIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueIntegration <a name="GlueIntegration" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration awscc_glue_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_integration.GlueIntegration;

GlueIntegration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .integrationName(java.lang.String)
    .sourceArn(java.lang.String)
    .targetArn(java.lang.String)
//  .additionalEncryptionContext(java.util.Map<java.lang.String, java.lang.String>)
//  .dataFilter(java.lang.String)
//  .description(java.lang.String)
//  .integrationConfig(GlueIntegrationIntegrationConfig)
//  .kmsKeyId(java.lang.String)
//  .tags(IResolvable|java.util.List<GlueIntegrationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.integrationName">integrationName</a></code> | <code>java.lang.String</code> | The name of the integration. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.sourceArn">sourceArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the database to use as the source for replication. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.targetArn">targetArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Glue data warehouse to use as the target for replication. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.additionalEncryptionContext">additionalEncryptionContext</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An optional set of non-secret key value pairs that contains additional contextual information about the data. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.dataFilter">dataFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#data_filter GlueIntegration#data_filter}. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#description GlueIntegration#description}. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.integrationConfig">integrationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig">GlueIntegrationIntegrationConfig</a></code> | The configuration settings for the integration. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | An KMS key identifier for the key to use to encrypt the integration. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags">GlueIntegrationTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `integrationName`<sup>Required</sup> <a name="integrationName" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.integrationName"></a>

- *Type:* java.lang.String

The name of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#integration_name GlueIntegration#integration_name}

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.sourceArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the database to use as the source for replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#source_arn GlueIntegration#source_arn}

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.targetArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Glue data warehouse to use as the target for replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#target_arn GlueIntegration#target_arn}

---

##### `additionalEncryptionContext`<sup>Optional</sup> <a name="additionalEncryptionContext" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.additionalEncryptionContext"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An optional set of non-secret key value pairs that contains additional contextual information about the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#additional_encryption_context GlueIntegration#additional_encryption_context}

---

##### `dataFilter`<sup>Optional</sup> <a name="dataFilter" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.dataFilter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#data_filter GlueIntegration#data_filter}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#description GlueIntegration#description}.

---

##### `integrationConfig`<sup>Optional</sup> <a name="integrationConfig" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.integrationConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig">GlueIntegrationIntegrationConfig</a>

The configuration settings for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#integration_config GlueIntegration#integration_config}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

An KMS key identifier for the key to use to encrypt the integration.

If you don't specify an encryption key, the default AWS owned KMS key is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#kms_key_id GlueIntegration#kms_key_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags">GlueIntegrationTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#tags GlueIntegration#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.putIntegrationConfig">putIntegrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetAdditionalEncryptionContext">resetAdditionalEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetDataFilter">resetDataFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetIntegrationConfig">resetIntegrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIntegrationConfig` <a name="putIntegrationConfig" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.putIntegrationConfig"></a>

```java
public void putIntegrationConfig(GlueIntegrationIntegrationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.putIntegrationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig">GlueIntegrationIntegrationConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<GlueIntegrationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags">GlueIntegrationTags</a>>

---

##### `resetAdditionalEncryptionContext` <a name="resetAdditionalEncryptionContext" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetAdditionalEncryptionContext"></a>

```java
public void resetAdditionalEncryptionContext()
```

##### `resetDataFilter` <a name="resetDataFilter" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetDataFilter"></a>

```java
public void resetDataFilter()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetIntegrationConfig` <a name="resetIntegrationConfig" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetIntegrationConfig"></a>

```java
public void resetIntegrationConfig()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GlueIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.isConstruct"></a>

```java
import io.cdktn.providers.awscc.glue_integration.GlueIntegration;

GlueIntegration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.glue_integration.GlueIntegration;

GlueIntegration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.glue_integration.GlueIntegration;

GlueIntegration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.glue_integration.GlueIntegration;

GlueIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GlueIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GlueIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GlueIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GlueIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GlueIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationArn">integrationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationConfig">integrationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference">GlueIntegrationIntegrationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList">GlueIntegrationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.additionalEncryptionContextInput">additionalEncryptionContextInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.dataFilterInput">dataFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationConfigInput">integrationConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig">GlueIntegrationIntegrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationNameInput">integrationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.sourceArnInput">sourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags">GlueIntegrationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.targetArnInput">targetArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.additionalEncryptionContext">additionalEncryptionContext</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.dataFilter">dataFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationName">integrationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.sourceArn">sourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.targetArn">targetArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `integrationArn`<sup>Required</sup> <a name="integrationArn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationArn"></a>

```java
public java.lang.String getIntegrationArn();
```

- *Type:* java.lang.String

---

##### `integrationConfig`<sup>Required</sup> <a name="integrationConfig" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationConfig"></a>

```java
public GlueIntegrationIntegrationConfigOutputReference getIntegrationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference">GlueIntegrationIntegrationConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.tags"></a>

```java
public GlueIntegrationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList">GlueIntegrationTagsList</a>

---

##### `additionalEncryptionContextInput`<sup>Optional</sup> <a name="additionalEncryptionContextInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.additionalEncryptionContextInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalEncryptionContextInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `dataFilterInput`<sup>Optional</sup> <a name="dataFilterInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.dataFilterInput"></a>

```java
public java.lang.String getDataFilterInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `integrationConfigInput`<sup>Optional</sup> <a name="integrationConfigInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationConfigInput"></a>

```java
public IResolvable|GlueIntegrationIntegrationConfig getIntegrationConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig">GlueIntegrationIntegrationConfig</a>

---

##### `integrationNameInput`<sup>Optional</sup> <a name="integrationNameInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationNameInput"></a>

```java
public java.lang.String getIntegrationNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `sourceArnInput`<sup>Optional</sup> <a name="sourceArnInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.sourceArnInput"></a>

```java
public java.lang.String getSourceArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.tagsInput"></a>

```java
public IResolvable|java.util.List<GlueIntegrationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags">GlueIntegrationTags</a>>

---

##### `targetArnInput`<sup>Optional</sup> <a name="targetArnInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.targetArnInput"></a>

```java
public java.lang.String getTargetArnInput();
```

- *Type:* java.lang.String

---

##### `additionalEncryptionContext`<sup>Required</sup> <a name="additionalEncryptionContext" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.additionalEncryptionContext"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalEncryptionContext();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `dataFilter`<sup>Required</sup> <a name="dataFilter" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.dataFilter"></a>

```java
public java.lang.String getDataFilter();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `integrationName`<sup>Required</sup> <a name="integrationName" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationName"></a>

```java
public java.lang.String getIntegrationName();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.sourceArn"></a>

```java
public java.lang.String getSourceArn();
```

- *Type:* java.lang.String

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.targetArn"></a>

```java
public java.lang.String getTargetArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GlueIntegrationConfig <a name="GlueIntegrationConfig" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_integration.GlueIntegrationConfig;

GlueIntegrationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .integrationName(java.lang.String)
    .sourceArn(java.lang.String)
    .targetArn(java.lang.String)
//  .additionalEncryptionContext(java.util.Map<java.lang.String, java.lang.String>)
//  .dataFilter(java.lang.String)
//  .description(java.lang.String)
//  .integrationConfig(GlueIntegrationIntegrationConfig)
//  .kmsKeyId(java.lang.String)
//  .tags(IResolvable|java.util.List<GlueIntegrationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.integrationName">integrationName</a></code> | <code>java.lang.String</code> | The name of the integration. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.sourceArn">sourceArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the database to use as the source for replication. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.targetArn">targetArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Glue data warehouse to use as the target for replication. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.additionalEncryptionContext">additionalEncryptionContext</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An optional set of non-secret key value pairs that contains additional contextual information about the data. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.dataFilter">dataFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#data_filter GlueIntegration#data_filter}. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#description GlueIntegration#description}. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.integrationConfig">integrationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig">GlueIntegrationIntegrationConfig</a></code> | The configuration settings for the integration. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | An KMS key identifier for the key to use to encrypt the integration. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags">GlueIntegrationTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `integrationName`<sup>Required</sup> <a name="integrationName" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.integrationName"></a>

```java
public java.lang.String getIntegrationName();
```

- *Type:* java.lang.String

The name of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#integration_name GlueIntegration#integration_name}

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.sourceArn"></a>

```java
public java.lang.String getSourceArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the database to use as the source for replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#source_arn GlueIntegration#source_arn}

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.targetArn"></a>

```java
public java.lang.String getTargetArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Glue data warehouse to use as the target for replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#target_arn GlueIntegration#target_arn}

---

##### `additionalEncryptionContext`<sup>Optional</sup> <a name="additionalEncryptionContext" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.additionalEncryptionContext"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalEncryptionContext();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An optional set of non-secret key value pairs that contains additional contextual information about the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#additional_encryption_context GlueIntegration#additional_encryption_context}

---

##### `dataFilter`<sup>Optional</sup> <a name="dataFilter" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.dataFilter"></a>

```java
public java.lang.String getDataFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#data_filter GlueIntegration#data_filter}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#description GlueIntegration#description}.

---

##### `integrationConfig`<sup>Optional</sup> <a name="integrationConfig" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.integrationConfig"></a>

```java
public GlueIntegrationIntegrationConfig getIntegrationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig">GlueIntegrationIntegrationConfig</a>

The configuration settings for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#integration_config GlueIntegration#integration_config}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

An KMS key identifier for the key to use to encrypt the integration.

If you don't specify an encryption key, the default AWS owned KMS key is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#kms_key_id GlueIntegration#kms_key_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<GlueIntegrationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags">GlueIntegrationTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#tags GlueIntegration#tags}

---

### GlueIntegrationIntegrationConfig <a name="GlueIntegrationIntegrationConfig" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_integration.GlueIntegrationIntegrationConfig;

GlueIntegrationIntegrationConfig.builder()
//  .continuousSync(java.lang.Boolean|IResolvable)
//  .refreshInterval(java.lang.String)
//  .sourceProperties(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig.property.continuousSync">continuousSync</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables continuous synchronization for on-demand data extractions. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig.property.refreshInterval">refreshInterval</a></code> | <code>java.lang.String</code> | Specifies the frequency at which CDC (Change Data Capture) pulls or incremental loads should occur. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig.property.sourceProperties">sourceProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A collection of key-value pairs that specify additional properties for the integration source. |

---

##### `continuousSync`<sup>Optional</sup> <a name="continuousSync" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig.property.continuousSync"></a>

```java
public java.lang.Boolean|IResolvable getContinuousSync();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables continuous synchronization for on-demand data extractions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#continuous_sync GlueIntegration#continuous_sync}

---

##### `refreshInterval`<sup>Optional</sup> <a name="refreshInterval" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig.property.refreshInterval"></a>

```java
public java.lang.String getRefreshInterval();
```

- *Type:* java.lang.String

Specifies the frequency at which CDC (Change Data Capture) pulls or incremental loads should occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#refresh_interval GlueIntegration#refresh_interval}

---

##### `sourceProperties`<sup>Optional</sup> <a name="sourceProperties" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig.property.sourceProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSourceProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A collection of key-value pairs that specify additional properties for the integration source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#source_properties GlueIntegration#source_properties}

---

### GlueIntegrationTags <a name="GlueIntegrationTags" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_integration.GlueIntegrationTags;

GlueIntegrationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#key GlueIntegration#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#value GlueIntegration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueIntegrationIntegrationConfigOutputReference <a name="GlueIntegrationIntegrationConfigOutputReference" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_integration.GlueIntegrationIntegrationConfigOutputReference;

new GlueIntegrationIntegrationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resetContinuousSync">resetContinuousSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resetRefreshInterval">resetRefreshInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resetSourceProperties">resetSourceProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContinuousSync` <a name="resetContinuousSync" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resetContinuousSync"></a>

```java
public void resetContinuousSync()
```

##### `resetRefreshInterval` <a name="resetRefreshInterval" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resetRefreshInterval"></a>

```java
public void resetRefreshInterval()
```

##### `resetSourceProperties` <a name="resetSourceProperties" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resetSourceProperties"></a>

```java
public void resetSourceProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.continuousSyncInput">continuousSyncInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.refreshIntervalInput">refreshIntervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.sourcePropertiesInput">sourcePropertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.continuousSync">continuousSync</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.refreshInterval">refreshInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.sourceProperties">sourceProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig">GlueIntegrationIntegrationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `continuousSyncInput`<sup>Optional</sup> <a name="continuousSyncInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.continuousSyncInput"></a>

```java
public java.lang.Boolean|IResolvable getContinuousSyncInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `refreshIntervalInput`<sup>Optional</sup> <a name="refreshIntervalInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.refreshIntervalInput"></a>

```java
public java.lang.String getRefreshIntervalInput();
```

- *Type:* java.lang.String

---

##### `sourcePropertiesInput`<sup>Optional</sup> <a name="sourcePropertiesInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.sourcePropertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSourcePropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `continuousSync`<sup>Required</sup> <a name="continuousSync" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.continuousSync"></a>

```java
public java.lang.Boolean|IResolvable getContinuousSync();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `refreshInterval`<sup>Required</sup> <a name="refreshInterval" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.refreshInterval"></a>

```java
public java.lang.String getRefreshInterval();
```

- *Type:* java.lang.String

---

##### `sourceProperties`<sup>Required</sup> <a name="sourceProperties" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.sourceProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSourceProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueIntegrationIntegrationConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig">GlueIntegrationIntegrationConfig</a>

---


### GlueIntegrationTagsList <a name="GlueIntegrationTagsList" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_integration.GlueIntegrationTagsList;

new GlueIntegrationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.get"></a>

```java
public GlueIntegrationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags">GlueIntegrationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GlueIntegrationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags">GlueIntegrationTags</a>>

---


### GlueIntegrationTagsOutputReference <a name="GlueIntegrationTagsOutputReference" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_integration.GlueIntegrationTagsOutputReference;

new GlueIntegrationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags">GlueIntegrationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueIntegrationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags">GlueIntegrationTags</a>

---



