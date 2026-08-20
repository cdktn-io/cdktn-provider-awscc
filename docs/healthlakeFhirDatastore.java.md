# `healthlakeFhirDatastore` Submodule <a name="`healthlakeFhirDatastore` Submodule" id="@cdktn/provider-awscc.healthlakeFhirDatastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthlakeFhirDatastore <a name="HealthlakeFhirDatastore" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore awscc_healthlake_fhir_datastore}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer"></a>

```java
import io.cdktn.providers.awscc.healthlake_fhir_datastore.HealthlakeFhirDatastore;

HealthlakeFhirDatastore.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .datastoreTypeVersion(java.lang.String)
//  .datastoreName(java.lang.String)
//  .identityProviderConfiguration(HealthlakeFhirDatastoreIdentityProviderConfiguration)
//  .preloadDataConfig(HealthlakeFhirDatastorePreloadDataConfig)
//  .sseConfiguration(HealthlakeFhirDatastoreSseConfiguration)
//  .tags(IResolvable|java.util.List<HealthlakeFhirDatastoreTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.datastoreTypeVersion">datastoreTypeVersion</a></code> | <code>java.lang.String</code> | The FHIR version. Only R4 version data is supported. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.datastoreName">datastoreName</a></code> | <code>java.lang.String</code> | The user-generated name for the Data Store. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.identityProviderConfiguration">identityProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration">HealthlakeFhirDatastoreIdentityProviderConfiguration</a></code> | The identity provider configuration for the datastore. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.preloadDataConfig">preloadDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig">HealthlakeFhirDatastorePreloadDataConfig</a></code> | The preloaded data configuration for the Data Store. Only data preloaded from Synthea is supported. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.sseConfiguration">sseConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration">HealthlakeFhirDatastoreSseConfiguration</a></code> | The server-side encryption key configuration for a customer provided encryption key. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#tags HealthlakeFhirDatastore#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `datastoreTypeVersion`<sup>Required</sup> <a name="datastoreTypeVersion" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.datastoreTypeVersion"></a>

- *Type:* java.lang.String

The FHIR version. Only R4 version data is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#datastore_type_version HealthlakeFhirDatastore#datastore_type_version}

---

##### `datastoreName`<sup>Optional</sup> <a name="datastoreName" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.datastoreName"></a>

- *Type:* java.lang.String

The user-generated name for the Data Store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#datastore_name HealthlakeFhirDatastore#datastore_name}

---

##### `identityProviderConfiguration`<sup>Optional</sup> <a name="identityProviderConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.identityProviderConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration">HealthlakeFhirDatastoreIdentityProviderConfiguration</a>

The identity provider configuration for the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#identity_provider_configuration HealthlakeFhirDatastore#identity_provider_configuration}

---

##### `preloadDataConfig`<sup>Optional</sup> <a name="preloadDataConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.preloadDataConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig">HealthlakeFhirDatastorePreloadDataConfig</a>

The preloaded data configuration for the Data Store. Only data preloaded from Synthea is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#preload_data_config HealthlakeFhirDatastore#preload_data_config}

---

##### `sseConfiguration`<sup>Optional</sup> <a name="sseConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.sseConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration">HealthlakeFhirDatastoreSseConfiguration</a>

The server-side encryption key configuration for a customer provided encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#sse_configuration HealthlakeFhirDatastore#sse_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#tags HealthlakeFhirDatastore#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putIdentityProviderConfiguration">putIdentityProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putPreloadDataConfig">putPreloadDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putSseConfiguration">putSseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetDatastoreName">resetDatastoreName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetIdentityProviderConfiguration">resetIdentityProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetPreloadDataConfig">resetPreloadDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetSseConfiguration">resetSseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentityProviderConfiguration` <a name="putIdentityProviderConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putIdentityProviderConfiguration"></a>

```java
public void putIdentityProviderConfiguration(HealthlakeFhirDatastoreIdentityProviderConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putIdentityProviderConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration">HealthlakeFhirDatastoreIdentityProviderConfiguration</a>

---

##### `putPreloadDataConfig` <a name="putPreloadDataConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putPreloadDataConfig"></a>

```java
public void putPreloadDataConfig(HealthlakeFhirDatastorePreloadDataConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putPreloadDataConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig">HealthlakeFhirDatastorePreloadDataConfig</a>

---

##### `putSseConfiguration` <a name="putSseConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putSseConfiguration"></a>

```java
public void putSseConfiguration(HealthlakeFhirDatastoreSseConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putSseConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration">HealthlakeFhirDatastoreSseConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<HealthlakeFhirDatastoreTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>>

---

##### `resetDatastoreName` <a name="resetDatastoreName" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetDatastoreName"></a>

```java
public void resetDatastoreName()
```

##### `resetIdentityProviderConfiguration` <a name="resetIdentityProviderConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetIdentityProviderConfiguration"></a>

```java
public void resetIdentityProviderConfiguration()
```

##### `resetPreloadDataConfig` <a name="resetPreloadDataConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetPreloadDataConfig"></a>

```java
public void resetPreloadDataConfig()
```

##### `resetSseConfiguration` <a name="resetSseConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetSseConfiguration"></a>

```java
public void resetSseConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a HealthlakeFhirDatastore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isConstruct"></a>

```java
import io.cdktn.providers.awscc.healthlake_fhir_datastore.HealthlakeFhirDatastore;

HealthlakeFhirDatastore.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.healthlake_fhir_datastore.HealthlakeFhirDatastore;

HealthlakeFhirDatastore.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.healthlake_fhir_datastore.HealthlakeFhirDatastore;

HealthlakeFhirDatastore.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.healthlake_fhir_datastore.HealthlakeFhirDatastore;

HealthlakeFhirDatastore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),HealthlakeFhirDatastore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a HealthlakeFhirDatastore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the HealthlakeFhirDatastore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing HealthlakeFhirDatastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the HealthlakeFhirDatastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.createdAt">createdAt</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference">HealthlakeFhirDatastoreCreatedAtOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreArn">datastoreArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreEndpoint">datastoreEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreId">datastoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreStatus">datastoreStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.identityProviderConfiguration">identityProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference">HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.preloadDataConfig">preloadDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference">HealthlakeFhirDatastorePreloadDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.sseConfiguration">sseConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference">HealthlakeFhirDatastoreSseConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList">HealthlakeFhirDatastoreTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreNameInput">datastoreNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreTypeVersionInput">datastoreTypeVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.identityProviderConfigurationInput">identityProviderConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration">HealthlakeFhirDatastoreIdentityProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.preloadDataConfigInput">preloadDataConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig">HealthlakeFhirDatastorePreloadDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.sseConfigurationInput">sseConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration">HealthlakeFhirDatastoreSseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreName">datastoreName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreTypeVersion">datastoreTypeVersion</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.createdAt"></a>

```java
public HealthlakeFhirDatastoreCreatedAtOutputReference getCreatedAt();
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference">HealthlakeFhirDatastoreCreatedAtOutputReference</a>

---

##### `datastoreArn`<sup>Required</sup> <a name="datastoreArn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreArn"></a>

```java
public java.lang.String getDatastoreArn();
```

- *Type:* java.lang.String

---

##### `datastoreEndpoint`<sup>Required</sup> <a name="datastoreEndpoint" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreEndpoint"></a>

```java
public java.lang.String getDatastoreEndpoint();
```

- *Type:* java.lang.String

---

##### `datastoreId`<sup>Required</sup> <a name="datastoreId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreId"></a>

```java
public java.lang.String getDatastoreId();
```

- *Type:* java.lang.String

---

##### `datastoreStatus`<sup>Required</sup> <a name="datastoreStatus" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreStatus"></a>

```java
public java.lang.String getDatastoreStatus();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityProviderConfiguration`<sup>Required</sup> <a name="identityProviderConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.identityProviderConfiguration"></a>

```java
public HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference getIdentityProviderConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference">HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference</a>

---

##### `preloadDataConfig`<sup>Required</sup> <a name="preloadDataConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.preloadDataConfig"></a>

```java
public HealthlakeFhirDatastorePreloadDataConfigOutputReference getPreloadDataConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference">HealthlakeFhirDatastorePreloadDataConfigOutputReference</a>

---

##### `sseConfiguration`<sup>Required</sup> <a name="sseConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.sseConfiguration"></a>

```java
public HealthlakeFhirDatastoreSseConfigurationOutputReference getSseConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference">HealthlakeFhirDatastoreSseConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.tags"></a>

```java
public HealthlakeFhirDatastoreTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList">HealthlakeFhirDatastoreTagsList</a>

---

##### `datastoreNameInput`<sup>Optional</sup> <a name="datastoreNameInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreNameInput"></a>

```java
public java.lang.String getDatastoreNameInput();
```

- *Type:* java.lang.String

---

##### `datastoreTypeVersionInput`<sup>Optional</sup> <a name="datastoreTypeVersionInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreTypeVersionInput"></a>

```java
public java.lang.String getDatastoreTypeVersionInput();
```

- *Type:* java.lang.String

---

##### `identityProviderConfigurationInput`<sup>Optional</sup> <a name="identityProviderConfigurationInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.identityProviderConfigurationInput"></a>

```java
public IResolvable|HealthlakeFhirDatastoreIdentityProviderConfiguration getIdentityProviderConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration">HealthlakeFhirDatastoreIdentityProviderConfiguration</a>

---

##### `preloadDataConfigInput`<sup>Optional</sup> <a name="preloadDataConfigInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.preloadDataConfigInput"></a>

```java
public IResolvable|HealthlakeFhirDatastorePreloadDataConfig getPreloadDataConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig">HealthlakeFhirDatastorePreloadDataConfig</a>

---

##### `sseConfigurationInput`<sup>Optional</sup> <a name="sseConfigurationInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.sseConfigurationInput"></a>

```java
public IResolvable|HealthlakeFhirDatastoreSseConfiguration getSseConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration">HealthlakeFhirDatastoreSseConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.tagsInput"></a>

```java
public IResolvable|java.util.List<HealthlakeFhirDatastoreTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>>

---

##### `datastoreName`<sup>Required</sup> <a name="datastoreName" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreName"></a>

```java
public java.lang.String getDatastoreName();
```

- *Type:* java.lang.String

---

##### `datastoreTypeVersion`<sup>Required</sup> <a name="datastoreTypeVersion" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreTypeVersion"></a>

```java
public java.lang.String getDatastoreTypeVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### HealthlakeFhirDatastoreConfig <a name="HealthlakeFhirDatastoreConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.healthlake_fhir_datastore.HealthlakeFhirDatastoreConfig;

HealthlakeFhirDatastoreConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .datastoreTypeVersion(java.lang.String)
//  .datastoreName(java.lang.String)
//  .identityProviderConfiguration(HealthlakeFhirDatastoreIdentityProviderConfiguration)
//  .preloadDataConfig(HealthlakeFhirDatastorePreloadDataConfig)
//  .sseConfiguration(HealthlakeFhirDatastoreSseConfiguration)
//  .tags(IResolvable|java.util.List<HealthlakeFhirDatastoreTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.datastoreTypeVersion">datastoreTypeVersion</a></code> | <code>java.lang.String</code> | The FHIR version. Only R4 version data is supported. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.datastoreName">datastoreName</a></code> | <code>java.lang.String</code> | The user-generated name for the Data Store. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.identityProviderConfiguration">identityProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration">HealthlakeFhirDatastoreIdentityProviderConfiguration</a></code> | The identity provider configuration for the datastore. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.preloadDataConfig">preloadDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig">HealthlakeFhirDatastorePreloadDataConfig</a></code> | The preloaded data configuration for the Data Store. Only data preloaded from Synthea is supported. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.sseConfiguration">sseConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration">HealthlakeFhirDatastoreSseConfiguration</a></code> | The server-side encryption key configuration for a customer provided encryption key. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#tags HealthlakeFhirDatastore#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `datastoreTypeVersion`<sup>Required</sup> <a name="datastoreTypeVersion" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.datastoreTypeVersion"></a>

```java
public java.lang.String getDatastoreTypeVersion();
```

- *Type:* java.lang.String

The FHIR version. Only R4 version data is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#datastore_type_version HealthlakeFhirDatastore#datastore_type_version}

---

##### `datastoreName`<sup>Optional</sup> <a name="datastoreName" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.datastoreName"></a>

```java
public java.lang.String getDatastoreName();
```

- *Type:* java.lang.String

The user-generated name for the Data Store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#datastore_name HealthlakeFhirDatastore#datastore_name}

---

##### `identityProviderConfiguration`<sup>Optional</sup> <a name="identityProviderConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.identityProviderConfiguration"></a>

```java
public HealthlakeFhirDatastoreIdentityProviderConfiguration getIdentityProviderConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration">HealthlakeFhirDatastoreIdentityProviderConfiguration</a>

The identity provider configuration for the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#identity_provider_configuration HealthlakeFhirDatastore#identity_provider_configuration}

---

##### `preloadDataConfig`<sup>Optional</sup> <a name="preloadDataConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.preloadDataConfig"></a>

```java
public HealthlakeFhirDatastorePreloadDataConfig getPreloadDataConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig">HealthlakeFhirDatastorePreloadDataConfig</a>

The preloaded data configuration for the Data Store. Only data preloaded from Synthea is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#preload_data_config HealthlakeFhirDatastore#preload_data_config}

---

##### `sseConfiguration`<sup>Optional</sup> <a name="sseConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.sseConfiguration"></a>

```java
public HealthlakeFhirDatastoreSseConfiguration getSseConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration">HealthlakeFhirDatastoreSseConfiguration</a>

The server-side encryption key configuration for a customer provided encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#sse_configuration HealthlakeFhirDatastore#sse_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.tags"></a>

```java
public IResolvable|java.util.List<HealthlakeFhirDatastoreTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#tags HealthlakeFhirDatastore#tags}.

---

### HealthlakeFhirDatastoreCreatedAt <a name="HealthlakeFhirDatastoreCreatedAt" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAt.Initializer"></a>

```java
import io.cdktn.providers.awscc.healthlake_fhir_datastore.HealthlakeFhirDatastoreCreatedAt;

HealthlakeFhirDatastoreCreatedAt.builder()
    .build();
```


### HealthlakeFhirDatastoreIdentityProviderConfiguration <a name="HealthlakeFhirDatastoreIdentityProviderConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.healthlake_fhir_datastore.HealthlakeFhirDatastoreIdentityProviderConfiguration;

HealthlakeFhirDatastoreIdentityProviderConfiguration.builder()
//  .authorizationStrategy(java.lang.String)
//  .fineGrainedAuthorizationEnabled(java.lang.Boolean|IResolvable)
//  .idpLambdaArn(java.lang.String)
//  .metadata(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.property.authorizationStrategy">authorizationStrategy</a></code> | <code>java.lang.String</code> | Type of Authorization Strategy. The two types of supported Authorization strategies are SMART_ON_FHIR_V1 and AWS_AUTH. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.property.fineGrainedAuthorizationEnabled">fineGrainedAuthorizationEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Flag to indicate if fine-grained authorization will be enabled for the datastore. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.property.idpLambdaArn">idpLambdaArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Lambda function that will be used to decode the access token created by the authorization server. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.property.metadata">metadata</a></code> | <code>java.lang.String</code> | The JSON metadata elements for identity provider configuration. |

---

##### `authorizationStrategy`<sup>Optional</sup> <a name="authorizationStrategy" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.property.authorizationStrategy"></a>

```java
public java.lang.String getAuthorizationStrategy();
```

- *Type:* java.lang.String

Type of Authorization Strategy. The two types of supported Authorization strategies are SMART_ON_FHIR_V1 and AWS_AUTH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#authorization_strategy HealthlakeFhirDatastore#authorization_strategy}

---

##### `fineGrainedAuthorizationEnabled`<sup>Optional</sup> <a name="fineGrainedAuthorizationEnabled" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.property.fineGrainedAuthorizationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getFineGrainedAuthorizationEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Flag to indicate if fine-grained authorization will be enabled for the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#fine_grained_authorization_enabled HealthlakeFhirDatastore#fine_grained_authorization_enabled}

---

##### `idpLambdaArn`<sup>Optional</sup> <a name="idpLambdaArn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.property.idpLambdaArn"></a>

```java
public java.lang.String getIdpLambdaArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Lambda function that will be used to decode the access token created by the authorization server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#idp_lambda_arn HealthlakeFhirDatastore#idp_lambda_arn}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

The JSON metadata elements for identity provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#metadata HealthlakeFhirDatastore#metadata}

---

### HealthlakeFhirDatastorePreloadDataConfig <a name="HealthlakeFhirDatastorePreloadDataConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.healthlake_fhir_datastore.HealthlakeFhirDatastorePreloadDataConfig;

HealthlakeFhirDatastorePreloadDataConfig.builder()
//  .preloadDataType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig.property.preloadDataType">preloadDataType</a></code> | <code>java.lang.String</code> | The type of preloaded data. Only Synthea preloaded data is supported. |

---

##### `preloadDataType`<sup>Optional</sup> <a name="preloadDataType" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig.property.preloadDataType"></a>

```java
public java.lang.String getPreloadDataType();
```

- *Type:* java.lang.String

The type of preloaded data. Only Synthea preloaded data is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#preload_data_type HealthlakeFhirDatastore#preload_data_type}

---

### HealthlakeFhirDatastoreSseConfiguration <a name="HealthlakeFhirDatastoreSseConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.healthlake_fhir_datastore.HealthlakeFhirDatastoreSseConfiguration;

HealthlakeFhirDatastoreSseConfiguration.builder()
//  .kmsEncryptionConfig(HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration.property.kmsEncryptionConfig">kmsEncryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a></code> | The customer-managed-key (CMK) used when creating a Data Store. |

---

##### `kmsEncryptionConfig`<sup>Optional</sup> <a name="kmsEncryptionConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration.property.kmsEncryptionConfig"></a>

```java
public HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig getKmsEncryptionConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a>

The customer-managed-key (CMK) used when creating a Data Store.

If a customer owned key is not specified, an AWS owned key will be used for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#kms_encryption_config HealthlakeFhirDatastore#kms_encryption_config}

---

### HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig <a name="HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.healthlake_fhir_datastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig;

HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig.builder()
//  .cmkType(java.lang.String)
//  .kmsKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig.property.cmkType">cmkType</a></code> | <code>java.lang.String</code> | The type of customer-managed-key (CMK) used for encryption. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The KMS encryption key id/alias used to encrypt the Data Store contents at rest. |

---

##### `cmkType`<sup>Optional</sup> <a name="cmkType" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig.property.cmkType"></a>

```java
public java.lang.String getCmkType();
```

- *Type:* java.lang.String

The type of customer-managed-key (CMK) used for encryption.

The two types of supported CMKs are customer owned CMKs and AWS owned CMKs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#cmk_type HealthlakeFhirDatastore#cmk_type}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

The KMS encryption key id/alias used to encrypt the Data Store contents at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#kms_key_id HealthlakeFhirDatastore#kms_key_id}

---

### HealthlakeFhirDatastoreTags <a name="HealthlakeFhirDatastoreTags" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.healthlake_fhir_datastore.HealthlakeFhirDatastoreTags;

HealthlakeFhirDatastoreTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags.property.key">key</a></code> | <code>java.lang.String</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags.property.value">value</a></code> | <code>java.lang.String</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#key HealthlakeFhirDatastore#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#value HealthlakeFhirDatastore#value}

---

## Classes <a name="Classes" id="Classes"></a>

### HealthlakeFhirDatastoreCreatedAtOutputReference <a name="HealthlakeFhirDatastoreCreatedAtOutputReference" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.healthlake_fhir_datastore.HealthlakeFhirDatastoreCreatedAtOutputReference;

new HealthlakeFhirDatastoreCreatedAtOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.seconds">seconds</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAt">HealthlakeFhirDatastoreCreatedAt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.seconds"></a>

```java
public java.lang.String getSeconds();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.internalValue"></a>

```java
public HealthlakeFhirDatastoreCreatedAt getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAt">HealthlakeFhirDatastoreCreatedAt</a>

---


### HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference <a name="HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.healthlake_fhir_datastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference;

new HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resetAuthorizationStrategy">resetAuthorizationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resetFineGrainedAuthorizationEnabled">resetFineGrainedAuthorizationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resetIdpLambdaArn">resetIdpLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizationStrategy` <a name="resetAuthorizationStrategy" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resetAuthorizationStrategy"></a>

```java
public void resetAuthorizationStrategy()
```

##### `resetFineGrainedAuthorizationEnabled` <a name="resetFineGrainedAuthorizationEnabled" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resetFineGrainedAuthorizationEnabled"></a>

```java
public void resetFineGrainedAuthorizationEnabled()
```

##### `resetIdpLambdaArn` <a name="resetIdpLambdaArn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resetIdpLambdaArn"></a>

```java
public void resetIdpLambdaArn()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resetMetadata"></a>

```java
public void resetMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.authorizationStrategyInput">authorizationStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fineGrainedAuthorizationEnabledInput">fineGrainedAuthorizationEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.idpLambdaArnInput">idpLambdaArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.metadataInput">metadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.authorizationStrategy">authorizationStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fineGrainedAuthorizationEnabled">fineGrainedAuthorizationEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.idpLambdaArn">idpLambdaArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration">HealthlakeFhirDatastoreIdentityProviderConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationStrategyInput`<sup>Optional</sup> <a name="authorizationStrategyInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.authorizationStrategyInput"></a>

```java
public java.lang.String getAuthorizationStrategyInput();
```

- *Type:* java.lang.String

---

##### `fineGrainedAuthorizationEnabledInput`<sup>Optional</sup> <a name="fineGrainedAuthorizationEnabledInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fineGrainedAuthorizationEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getFineGrainedAuthorizationEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idpLambdaArnInput`<sup>Optional</sup> <a name="idpLambdaArnInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.idpLambdaArnInput"></a>

```java
public java.lang.String getIdpLambdaArnInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.metadataInput"></a>

```java
public java.lang.String getMetadataInput();
```

- *Type:* java.lang.String

---

##### `authorizationStrategy`<sup>Required</sup> <a name="authorizationStrategy" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.authorizationStrategy"></a>

```java
public java.lang.String getAuthorizationStrategy();
```

- *Type:* java.lang.String

---

##### `fineGrainedAuthorizationEnabled`<sup>Required</sup> <a name="fineGrainedAuthorizationEnabled" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fineGrainedAuthorizationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getFineGrainedAuthorizationEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idpLambdaArn`<sup>Required</sup> <a name="idpLambdaArn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.idpLambdaArn"></a>

```java
public java.lang.String getIdpLambdaArn();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|HealthlakeFhirDatastoreIdentityProviderConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration">HealthlakeFhirDatastoreIdentityProviderConfiguration</a>

---


### HealthlakeFhirDatastorePreloadDataConfigOutputReference <a name="HealthlakeFhirDatastorePreloadDataConfigOutputReference" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.healthlake_fhir_datastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference;

new HealthlakeFhirDatastorePreloadDataConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.resetPreloadDataType">resetPreloadDataType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPreloadDataType` <a name="resetPreloadDataType" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.resetPreloadDataType"></a>

```java
public void resetPreloadDataType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.preloadDataTypeInput">preloadDataTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.preloadDataType">preloadDataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig">HealthlakeFhirDatastorePreloadDataConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `preloadDataTypeInput`<sup>Optional</sup> <a name="preloadDataTypeInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.preloadDataTypeInput"></a>

```java
public java.lang.String getPreloadDataTypeInput();
```

- *Type:* java.lang.String

---

##### `preloadDataType`<sup>Required</sup> <a name="preloadDataType" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.preloadDataType"></a>

```java
public java.lang.String getPreloadDataType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|HealthlakeFhirDatastorePreloadDataConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig">HealthlakeFhirDatastorePreloadDataConfig</a>

---


### HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference <a name="HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.healthlake_fhir_datastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference;

new HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resetCmkType">resetCmkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCmkType` <a name="resetCmkType" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resetCmkType"></a>

```java
public void resetCmkType()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.cmkTypeInput">cmkTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.cmkType">cmkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cmkTypeInput`<sup>Optional</sup> <a name="cmkTypeInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.cmkTypeInput"></a>

```java
public java.lang.String getCmkTypeInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `cmkType`<sup>Required</sup> <a name="cmkType" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.cmkType"></a>

```java
public java.lang.String getCmkType();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a>

---


### HealthlakeFhirDatastoreSseConfigurationOutputReference <a name="HealthlakeFhirDatastoreSseConfigurationOutputReference" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.healthlake_fhir_datastore.HealthlakeFhirDatastoreSseConfigurationOutputReference;

new HealthlakeFhirDatastoreSseConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.putKmsEncryptionConfig">putKmsEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.resetKmsEncryptionConfig">resetKmsEncryptionConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKmsEncryptionConfig` <a name="putKmsEncryptionConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.putKmsEncryptionConfig"></a>

```java
public void putKmsEncryptionConfig(HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.putKmsEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a>

---

##### `resetKmsEncryptionConfig` <a name="resetKmsEncryptionConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.resetKmsEncryptionConfig"></a>

```java
public void resetKmsEncryptionConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.kmsEncryptionConfig">kmsEncryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.kmsEncryptionConfigInput">kmsEncryptionConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration">HealthlakeFhirDatastoreSseConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsEncryptionConfig`<sup>Required</sup> <a name="kmsEncryptionConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.kmsEncryptionConfig"></a>

```java
public HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference getKmsEncryptionConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference</a>

---

##### `kmsEncryptionConfigInput`<sup>Optional</sup> <a name="kmsEncryptionConfigInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.kmsEncryptionConfigInput"></a>

```java
public IResolvable|HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig getKmsEncryptionConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|HealthlakeFhirDatastoreSseConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration">HealthlakeFhirDatastoreSseConfiguration</a>

---


### HealthlakeFhirDatastoreTagsList <a name="HealthlakeFhirDatastoreTagsList" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.healthlake_fhir_datastore.HealthlakeFhirDatastoreTagsList;

new HealthlakeFhirDatastoreTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.get"></a>

```java
public HealthlakeFhirDatastoreTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<HealthlakeFhirDatastoreTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>>

---


### HealthlakeFhirDatastoreTagsOutputReference <a name="HealthlakeFhirDatastoreTagsOutputReference" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.healthlake_fhir_datastore.HealthlakeFhirDatastoreTagsOutputReference;

new HealthlakeFhirDatastoreTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|HealthlakeFhirDatastoreTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>

---



