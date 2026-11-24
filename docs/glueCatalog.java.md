# `glueCatalog` Submodule <a name="`glueCatalog` Submodule" id="@cdktn/provider-awscc.glueCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueCatalog <a name="GlueCatalog" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog awscc_glue_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalog;

GlueCatalog.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .allowFullTableExternalDataAccess(java.lang.String)
//  .catalogProperties(GlueCatalogCatalogProperties)
//  .createDatabaseDefaultPermissions(IResolvable|java.util.List<GlueCatalogCreateDatabaseDefaultPermissions>)
//  .createTableDefaultPermissions(IResolvable|java.util.List<GlueCatalogCreateTableDefaultPermissions>)
//  .description(java.lang.String)
//  .federatedCatalog(GlueCatalogFederatedCatalog)
//  .overwriteChildResourcePermissionsWithDefault(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .tags(IResolvable|java.util.List<GlueCatalogTags>)
//  .targetRedshiftCatalog(GlueCatalogTargetRedshiftCatalog)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the catalog to create. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.allowFullTableExternalDataAccess">allowFullTableExternalDataAccess</a></code> | <code>java.lang.String</code> | Allows third-party engines to access data in Amazon S3 locations that are registered with Lake Formation. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.catalogProperties">catalogProperties</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogProperties">GlueCatalogCatalogProperties</a></code> | A structure that specifies data lake access properties and other custom properties. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.createDatabaseDefaultPermissions">createDatabaseDefaultPermissions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions">GlueCatalogCreateDatabaseDefaultPermissions</a>></code> | An array of PrincipalPermissions objects for default database permissions. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.createTableDefaultPermissions">createTableDefaultPermissions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissions">GlueCatalogCreateTableDefaultPermissions</a>></code> | An array of PrincipalPermissions objects for default table permissions. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the catalog. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.federatedCatalog">federatedCatalog</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalog">GlueCatalogFederatedCatalog</a></code> | A FederatedCatalog structure that references an entity outside the Glue Data Catalog. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.overwriteChildResourcePermissionsWithDefault">overwriteChildResourcePermissionsWithDefault</a></code> | <code>java.lang.String</code> | Specifies whether to overwrite child resource permissions with the default permissions. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of key-value pairs that define parameters and properties of the catalog. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTags">GlueCatalogTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.targetRedshiftCatalog">targetRedshiftCatalog</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalog">GlueCatalogTargetRedshiftCatalog</a></code> | A structure that describes a target catalog for resource linking. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the catalog to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#name GlueCatalog#name}

---

##### `allowFullTableExternalDataAccess`<sup>Optional</sup> <a name="allowFullTableExternalDataAccess" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.allowFullTableExternalDataAccess"></a>

- *Type:* java.lang.String

Allows third-party engines to access data in Amazon S3 locations that are registered with Lake Formation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#allow_full_table_external_data_access GlueCatalog#allow_full_table_external_data_access}

---

##### `catalogProperties`<sup>Optional</sup> <a name="catalogProperties" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.catalogProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogProperties">GlueCatalogCatalogProperties</a>

A structure that specifies data lake access properties and other custom properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#catalog_properties GlueCatalog#catalog_properties}

---

##### `createDatabaseDefaultPermissions`<sup>Optional</sup> <a name="createDatabaseDefaultPermissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.createDatabaseDefaultPermissions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions">GlueCatalogCreateDatabaseDefaultPermissions</a>>

An array of PrincipalPermissions objects for default database permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#create_database_default_permissions GlueCatalog#create_database_default_permissions}

---

##### `createTableDefaultPermissions`<sup>Optional</sup> <a name="createTableDefaultPermissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.createTableDefaultPermissions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissions">GlueCatalogCreateTableDefaultPermissions</a>>

An array of PrincipalPermissions objects for default table permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#create_table_default_permissions GlueCatalog#create_table_default_permissions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#description GlueCatalog#description}

---

##### `federatedCatalog`<sup>Optional</sup> <a name="federatedCatalog" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.federatedCatalog"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalog">GlueCatalogFederatedCatalog</a>

A FederatedCatalog structure that references an entity outside the Glue Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#federated_catalog GlueCatalog#federated_catalog}

---

##### `overwriteChildResourcePermissionsWithDefault`<sup>Optional</sup> <a name="overwriteChildResourcePermissionsWithDefault" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.overwriteChildResourcePermissionsWithDefault"></a>

- *Type:* java.lang.String

Specifies whether to overwrite child resource permissions with the default permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#overwrite_child_resource_permissions_with_default GlueCatalog#overwrite_child_resource_permissions_with_default}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.parameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of key-value pairs that define parameters and properties of the catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#parameters GlueCatalog#parameters}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTags">GlueCatalogTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#tags GlueCatalog#tags}

---

##### `targetRedshiftCatalog`<sup>Optional</sup> <a name="targetRedshiftCatalog" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.targetRedshiftCatalog"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalog">GlueCatalogTargetRedshiftCatalog</a>

A structure that describes a target catalog for resource linking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#target_redshift_catalog GlueCatalog#target_redshift_catalog}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.putCatalogProperties">putCatalogProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.putCreateDatabaseDefaultPermissions">putCreateDatabaseDefaultPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.putCreateTableDefaultPermissions">putCreateTableDefaultPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.putFederatedCatalog">putFederatedCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.putTargetRedshiftCatalog">putTargetRedshiftCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetAllowFullTableExternalDataAccess">resetAllowFullTableExternalDataAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetCatalogProperties">resetCatalogProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetCreateDatabaseDefaultPermissions">resetCreateDatabaseDefaultPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetCreateTableDefaultPermissions">resetCreateTableDefaultPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetFederatedCatalog">resetFederatedCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetOverwriteChildResourcePermissionsWithDefault">resetOverwriteChildResourcePermissionsWithDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetTargetRedshiftCatalog">resetTargetRedshiftCatalog</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCatalogProperties` <a name="putCatalogProperties" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.putCatalogProperties"></a>

```java
public void putCatalogProperties(GlueCatalogCatalogProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.putCatalogProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogProperties">GlueCatalogCatalogProperties</a>

---

##### `putCreateDatabaseDefaultPermissions` <a name="putCreateDatabaseDefaultPermissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.putCreateDatabaseDefaultPermissions"></a>

```java
public void putCreateDatabaseDefaultPermissions(IResolvable|java.util.List<GlueCatalogCreateDatabaseDefaultPermissions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.putCreateDatabaseDefaultPermissions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions">GlueCatalogCreateDatabaseDefaultPermissions</a>>

---

##### `putCreateTableDefaultPermissions` <a name="putCreateTableDefaultPermissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.putCreateTableDefaultPermissions"></a>

```java
public void putCreateTableDefaultPermissions(IResolvable|java.util.List<GlueCatalogCreateTableDefaultPermissions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.putCreateTableDefaultPermissions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissions">GlueCatalogCreateTableDefaultPermissions</a>>

---

##### `putFederatedCatalog` <a name="putFederatedCatalog" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.putFederatedCatalog"></a>

```java
public void putFederatedCatalog(GlueCatalogFederatedCatalog value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.putFederatedCatalog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalog">GlueCatalogFederatedCatalog</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<GlueCatalogTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTags">GlueCatalogTags</a>>

---

##### `putTargetRedshiftCatalog` <a name="putTargetRedshiftCatalog" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.putTargetRedshiftCatalog"></a>

```java
public void putTargetRedshiftCatalog(GlueCatalogTargetRedshiftCatalog value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.putTargetRedshiftCatalog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalog">GlueCatalogTargetRedshiftCatalog</a>

---

##### `resetAllowFullTableExternalDataAccess` <a name="resetAllowFullTableExternalDataAccess" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetAllowFullTableExternalDataAccess"></a>

```java
public void resetAllowFullTableExternalDataAccess()
```

##### `resetCatalogProperties` <a name="resetCatalogProperties" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetCatalogProperties"></a>

```java
public void resetCatalogProperties()
```

##### `resetCreateDatabaseDefaultPermissions` <a name="resetCreateDatabaseDefaultPermissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetCreateDatabaseDefaultPermissions"></a>

```java
public void resetCreateDatabaseDefaultPermissions()
```

##### `resetCreateTableDefaultPermissions` <a name="resetCreateTableDefaultPermissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetCreateTableDefaultPermissions"></a>

```java
public void resetCreateTableDefaultPermissions()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFederatedCatalog` <a name="resetFederatedCatalog" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetFederatedCatalog"></a>

```java
public void resetFederatedCatalog()
```

##### `resetOverwriteChildResourcePermissionsWithDefault` <a name="resetOverwriteChildResourcePermissionsWithDefault" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetOverwriteChildResourcePermissionsWithDefault"></a>

```java
public void resetOverwriteChildResourcePermissionsWithDefault()
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetTags"></a>

```java
public void resetTags()
```

##### `resetTargetRedshiftCatalog` <a name="resetTargetRedshiftCatalog" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetTargetRedshiftCatalog"></a>

```java
public void resetTargetRedshiftCatalog()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GlueCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.isConstruct"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalog;

GlueCatalog.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalog;

GlueCatalog.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalog;

GlueCatalog.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalog;

GlueCatalog.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GlueCatalog.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GlueCatalog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GlueCatalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GlueCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GlueCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.catalogProperties">catalogProperties</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference">GlueCatalogCatalogPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.createDatabaseDefaultPermissions">createDatabaseDefaultPermissions</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList">GlueCatalogCreateDatabaseDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.createTableDefaultPermissions">createTableDefaultPermissions</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList">GlueCatalogCreateTableDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.federatedCatalog">federatedCatalog</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference">GlueCatalogFederatedCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList">GlueCatalogTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.targetRedshiftCatalog">targetRedshiftCatalog</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference">GlueCatalogTargetRedshiftCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.allowFullTableExternalDataAccessInput">allowFullTableExternalDataAccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.catalogPropertiesInput">catalogPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogProperties">GlueCatalogCatalogProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.createDatabaseDefaultPermissionsInput">createDatabaseDefaultPermissionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions">GlueCatalogCreateDatabaseDefaultPermissions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.createTableDefaultPermissionsInput">createTableDefaultPermissionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissions">GlueCatalogCreateTableDefaultPermissions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.federatedCatalogInput">federatedCatalogInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalog">GlueCatalogFederatedCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.overwriteChildResourcePermissionsWithDefaultInput">overwriteChildResourcePermissionsWithDefaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTags">GlueCatalogTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.targetRedshiftCatalogInput">targetRedshiftCatalogInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalog">GlueCatalogTargetRedshiftCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.allowFullTableExternalDataAccess">allowFullTableExternalDataAccess</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.overwriteChildResourcePermissionsWithDefault">overwriteChildResourcePermissionsWithDefault</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `catalogProperties`<sup>Required</sup> <a name="catalogProperties" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.catalogProperties"></a>

```java
public GlueCatalogCatalogPropertiesOutputReference getCatalogProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference">GlueCatalogCatalogPropertiesOutputReference</a>

---

##### `createDatabaseDefaultPermissions`<sup>Required</sup> <a name="createDatabaseDefaultPermissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.createDatabaseDefaultPermissions"></a>

```java
public GlueCatalogCreateDatabaseDefaultPermissionsList getCreateDatabaseDefaultPermissions();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList">GlueCatalogCreateDatabaseDefaultPermissionsList</a>

---

##### `createTableDefaultPermissions`<sup>Required</sup> <a name="createTableDefaultPermissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.createTableDefaultPermissions"></a>

```java
public GlueCatalogCreateTableDefaultPermissionsList getCreateTableDefaultPermissions();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList">GlueCatalogCreateTableDefaultPermissionsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `federatedCatalog`<sup>Required</sup> <a name="federatedCatalog" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.federatedCatalog"></a>

```java
public GlueCatalogFederatedCatalogOutputReference getFederatedCatalog();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference">GlueCatalogFederatedCatalogOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.tags"></a>

```java
public GlueCatalogTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList">GlueCatalogTagsList</a>

---

##### `targetRedshiftCatalog`<sup>Required</sup> <a name="targetRedshiftCatalog" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.targetRedshiftCatalog"></a>

```java
public GlueCatalogTargetRedshiftCatalogOutputReference getTargetRedshiftCatalog();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference">GlueCatalogTargetRedshiftCatalogOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `allowFullTableExternalDataAccessInput`<sup>Optional</sup> <a name="allowFullTableExternalDataAccessInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.allowFullTableExternalDataAccessInput"></a>

```java
public java.lang.String getAllowFullTableExternalDataAccessInput();
```

- *Type:* java.lang.String

---

##### `catalogPropertiesInput`<sup>Optional</sup> <a name="catalogPropertiesInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.catalogPropertiesInput"></a>

```java
public IResolvable|GlueCatalogCatalogProperties getCatalogPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogProperties">GlueCatalogCatalogProperties</a>

---

##### `createDatabaseDefaultPermissionsInput`<sup>Optional</sup> <a name="createDatabaseDefaultPermissionsInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.createDatabaseDefaultPermissionsInput"></a>

```java
public IResolvable|java.util.List<GlueCatalogCreateDatabaseDefaultPermissions> getCreateDatabaseDefaultPermissionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions">GlueCatalogCreateDatabaseDefaultPermissions</a>>

---

##### `createTableDefaultPermissionsInput`<sup>Optional</sup> <a name="createTableDefaultPermissionsInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.createTableDefaultPermissionsInput"></a>

```java
public IResolvable|java.util.List<GlueCatalogCreateTableDefaultPermissions> getCreateTableDefaultPermissionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissions">GlueCatalogCreateTableDefaultPermissions</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `federatedCatalogInput`<sup>Optional</sup> <a name="federatedCatalogInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.federatedCatalogInput"></a>

```java
public IResolvable|GlueCatalogFederatedCatalog getFederatedCatalogInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalog">GlueCatalogFederatedCatalog</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `overwriteChildResourcePermissionsWithDefaultInput`<sup>Optional</sup> <a name="overwriteChildResourcePermissionsWithDefaultInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.overwriteChildResourcePermissionsWithDefaultInput"></a>

```java
public java.lang.String getOverwriteChildResourcePermissionsWithDefaultInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.tagsInput"></a>

```java
public IResolvable|java.util.List<GlueCatalogTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTags">GlueCatalogTags</a>>

---

##### `targetRedshiftCatalogInput`<sup>Optional</sup> <a name="targetRedshiftCatalogInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.targetRedshiftCatalogInput"></a>

```java
public IResolvable|GlueCatalogTargetRedshiftCatalog getTargetRedshiftCatalogInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalog">GlueCatalogTargetRedshiftCatalog</a>

---

##### `allowFullTableExternalDataAccess`<sup>Required</sup> <a name="allowFullTableExternalDataAccess" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.allowFullTableExternalDataAccess"></a>

```java
public java.lang.String getAllowFullTableExternalDataAccess();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `overwriteChildResourcePermissionsWithDefault`<sup>Required</sup> <a name="overwriteChildResourcePermissionsWithDefault" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.overwriteChildResourcePermissionsWithDefault"></a>

```java
public java.lang.String getOverwriteChildResourcePermissionsWithDefault();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GlueCatalogCatalogProperties <a name="GlueCatalogCatalogProperties" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogCatalogProperties;

GlueCatalogCatalogProperties.builder()
//  .dataLakeAccessProperties(GlueCatalogCatalogPropertiesDataLakeAccessProperties)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogProperties.property.dataLakeAccessProperties">dataLakeAccessProperties</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties">GlueCatalogCatalogPropertiesDataLakeAccessProperties</a></code> | Data lake access properties for the catalog. |

---

##### `dataLakeAccessProperties`<sup>Optional</sup> <a name="dataLakeAccessProperties" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogProperties.property.dataLakeAccessProperties"></a>

```java
public GlueCatalogCatalogPropertiesDataLakeAccessProperties getDataLakeAccessProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties">GlueCatalogCatalogPropertiesDataLakeAccessProperties</a>

Data lake access properties for the catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#data_lake_access_properties GlueCatalog#data_lake_access_properties}

---

### GlueCatalogCatalogPropertiesDataLakeAccessProperties <a name="GlueCatalogCatalogPropertiesDataLakeAccessProperties" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties;

GlueCatalogCatalogPropertiesDataLakeAccessProperties.builder()
//  .allowFullTableExternalDataAccess(java.lang.String)
//  .catalogType(java.lang.String)
//  .dataLakeAccess(java.lang.Boolean|IResolvable)
//  .dataTransferRole(java.lang.String)
//  .kmsKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.allowFullTableExternalDataAccess">allowFullTableExternalDataAccess</a></code> | <code>java.lang.String</code> | Allows third-party engines to access data in Amazon S3 locations that are registered with Lake Formation. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.catalogType">catalogType</a></code> | <code>java.lang.String</code> | Specifies a federated catalog type for the native catalog resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.dataLakeAccess">dataLakeAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Turns on or off data lake access for Apache Spark applications that access Amazon Redshift databases in the Data Catalog from any non-Redshift engine. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.dataTransferRole">dataTransferRole</a></code> | <code>java.lang.String</code> | A role that will be assumed by Glue for transferring data into/out of the staging bucket during a query. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | An encryption key that will be used for the staging bucket that will be created along with the catalog. |

---

##### `allowFullTableExternalDataAccess`<sup>Optional</sup> <a name="allowFullTableExternalDataAccess" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.allowFullTableExternalDataAccess"></a>

```java
public java.lang.String getAllowFullTableExternalDataAccess();
```

- *Type:* java.lang.String

Allows third-party engines to access data in Amazon S3 locations that are registered with Lake Formation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#allow_full_table_external_data_access GlueCatalog#allow_full_table_external_data_access}

---

##### `catalogType`<sup>Optional</sup> <a name="catalogType" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.catalogType"></a>

```java
public java.lang.String getCatalogType();
```

- *Type:* java.lang.String

Specifies a federated catalog type for the native catalog resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#catalog_type GlueCatalog#catalog_type}

---

##### `dataLakeAccess`<sup>Optional</sup> <a name="dataLakeAccess" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.dataLakeAccess"></a>

```java
public java.lang.Boolean|IResolvable getDataLakeAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Turns on or off data lake access for Apache Spark applications that access Amazon Redshift databases in the Data Catalog from any non-Redshift engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#data_lake_access GlueCatalog#data_lake_access}

---

##### `dataTransferRole`<sup>Optional</sup> <a name="dataTransferRole" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.dataTransferRole"></a>

```java
public java.lang.String getDataTransferRole();
```

- *Type:* java.lang.String

A role that will be assumed by Glue for transferring data into/out of the staging bucket during a query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#data_transfer_role GlueCatalog#data_transfer_role}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

An encryption key that will be used for the staging bucket that will be created along with the catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#kms_key GlueCatalog#kms_key}

---

### GlueCatalogConfig <a name="GlueCatalogConfig" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogConfig;

GlueCatalogConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .allowFullTableExternalDataAccess(java.lang.String)
//  .catalogProperties(GlueCatalogCatalogProperties)
//  .createDatabaseDefaultPermissions(IResolvable|java.util.List<GlueCatalogCreateDatabaseDefaultPermissions>)
//  .createTableDefaultPermissions(IResolvable|java.util.List<GlueCatalogCreateTableDefaultPermissions>)
//  .description(java.lang.String)
//  .federatedCatalog(GlueCatalogFederatedCatalog)
//  .overwriteChildResourcePermissionsWithDefault(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .tags(IResolvable|java.util.List<GlueCatalogTags>)
//  .targetRedshiftCatalog(GlueCatalogTargetRedshiftCatalog)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the catalog to create. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.allowFullTableExternalDataAccess">allowFullTableExternalDataAccess</a></code> | <code>java.lang.String</code> | Allows third-party engines to access data in Amazon S3 locations that are registered with Lake Formation. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.catalogProperties">catalogProperties</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogProperties">GlueCatalogCatalogProperties</a></code> | A structure that specifies data lake access properties and other custom properties. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.createDatabaseDefaultPermissions">createDatabaseDefaultPermissions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions">GlueCatalogCreateDatabaseDefaultPermissions</a>></code> | An array of PrincipalPermissions objects for default database permissions. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.createTableDefaultPermissions">createTableDefaultPermissions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissions">GlueCatalogCreateTableDefaultPermissions</a>></code> | An array of PrincipalPermissions objects for default table permissions. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the catalog. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.federatedCatalog">federatedCatalog</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalog">GlueCatalogFederatedCatalog</a></code> | A FederatedCatalog structure that references an entity outside the Glue Data Catalog. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.overwriteChildResourcePermissionsWithDefault">overwriteChildResourcePermissionsWithDefault</a></code> | <code>java.lang.String</code> | Specifies whether to overwrite child resource permissions with the default permissions. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of key-value pairs that define parameters and properties of the catalog. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTags">GlueCatalogTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.targetRedshiftCatalog">targetRedshiftCatalog</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalog">GlueCatalogTargetRedshiftCatalog</a></code> | A structure that describes a target catalog for resource linking. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the catalog to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#name GlueCatalog#name}

---

##### `allowFullTableExternalDataAccess`<sup>Optional</sup> <a name="allowFullTableExternalDataAccess" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.allowFullTableExternalDataAccess"></a>

```java
public java.lang.String getAllowFullTableExternalDataAccess();
```

- *Type:* java.lang.String

Allows third-party engines to access data in Amazon S3 locations that are registered with Lake Formation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#allow_full_table_external_data_access GlueCatalog#allow_full_table_external_data_access}

---

##### `catalogProperties`<sup>Optional</sup> <a name="catalogProperties" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.catalogProperties"></a>

```java
public GlueCatalogCatalogProperties getCatalogProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogProperties">GlueCatalogCatalogProperties</a>

A structure that specifies data lake access properties and other custom properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#catalog_properties GlueCatalog#catalog_properties}

---

##### `createDatabaseDefaultPermissions`<sup>Optional</sup> <a name="createDatabaseDefaultPermissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.createDatabaseDefaultPermissions"></a>

```java
public IResolvable|java.util.List<GlueCatalogCreateDatabaseDefaultPermissions> getCreateDatabaseDefaultPermissions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions">GlueCatalogCreateDatabaseDefaultPermissions</a>>

An array of PrincipalPermissions objects for default database permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#create_database_default_permissions GlueCatalog#create_database_default_permissions}

---

##### `createTableDefaultPermissions`<sup>Optional</sup> <a name="createTableDefaultPermissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.createTableDefaultPermissions"></a>

```java
public IResolvable|java.util.List<GlueCatalogCreateTableDefaultPermissions> getCreateTableDefaultPermissions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissions">GlueCatalogCreateTableDefaultPermissions</a>>

An array of PrincipalPermissions objects for default table permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#create_table_default_permissions GlueCatalog#create_table_default_permissions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#description GlueCatalog#description}

---

##### `federatedCatalog`<sup>Optional</sup> <a name="federatedCatalog" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.federatedCatalog"></a>

```java
public GlueCatalogFederatedCatalog getFederatedCatalog();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalog">GlueCatalogFederatedCatalog</a>

A FederatedCatalog structure that references an entity outside the Glue Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#federated_catalog GlueCatalog#federated_catalog}

---

##### `overwriteChildResourcePermissionsWithDefault`<sup>Optional</sup> <a name="overwriteChildResourcePermissionsWithDefault" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.overwriteChildResourcePermissionsWithDefault"></a>

```java
public java.lang.String getOverwriteChildResourcePermissionsWithDefault();
```

- *Type:* java.lang.String

Specifies whether to overwrite child resource permissions with the default permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#overwrite_child_resource_permissions_with_default GlueCatalog#overwrite_child_resource_permissions_with_default}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of key-value pairs that define parameters and properties of the catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#parameters GlueCatalog#parameters}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.tags"></a>

```java
public IResolvable|java.util.List<GlueCatalogTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTags">GlueCatalogTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#tags GlueCatalog#tags}

---

##### `targetRedshiftCatalog`<sup>Optional</sup> <a name="targetRedshiftCatalog" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.targetRedshiftCatalog"></a>

```java
public GlueCatalogTargetRedshiftCatalog getTargetRedshiftCatalog();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalog">GlueCatalogTargetRedshiftCatalog</a>

A structure that describes a target catalog for resource linking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#target_redshift_catalog GlueCatalog#target_redshift_catalog}

---

### GlueCatalogCreateDatabaseDefaultPermissions <a name="GlueCatalogCreateDatabaseDefaultPermissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogCreateDatabaseDefaultPermissions;

GlueCatalogCreateDatabaseDefaultPermissions.builder()
//  .permissions(java.util.List<java.lang.String>)
//  .principal(GlueCatalogCreateDatabaseDefaultPermissionsPrincipal)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions.property.permissions">permissions</a></code> | <code>java.util.List<java.lang.String></code> | The permissions that are granted to the principal. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal">GlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a></code> | The Lake Formation principal. |

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions.property.permissions"></a>

```java
public java.util.List<java.lang.String> getPermissions();
```

- *Type:* java.util.List<java.lang.String>

The permissions that are granted to the principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#permissions GlueCatalog#permissions}

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions.property.principal"></a>

```java
public GlueCatalogCreateDatabaseDefaultPermissionsPrincipal getPrincipal();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal">GlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a>

The Lake Formation principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#principal GlueCatalog#principal}

---

### GlueCatalogCreateDatabaseDefaultPermissionsPrincipal <a name="GlueCatalogCreateDatabaseDefaultPermissionsPrincipal" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal;

GlueCatalogCreateDatabaseDefaultPermissionsPrincipal.builder()
//  .dataLakePrincipalIdentifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal.property.dataLakePrincipalIdentifier">dataLakePrincipalIdentifier</a></code> | <code>java.lang.String</code> | An identifier for the Lake Formation principal. |

---

##### `dataLakePrincipalIdentifier`<sup>Optional</sup> <a name="dataLakePrincipalIdentifier" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal.property.dataLakePrincipalIdentifier"></a>

```java
public java.lang.String getDataLakePrincipalIdentifier();
```

- *Type:* java.lang.String

An identifier for the Lake Formation principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#data_lake_principal_identifier GlueCatalog#data_lake_principal_identifier}

---

### GlueCatalogCreateTableDefaultPermissions <a name="GlueCatalogCreateTableDefaultPermissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissions.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogCreateTableDefaultPermissions;

GlueCatalogCreateTableDefaultPermissions.builder()
//  .permissions(java.util.List<java.lang.String>)
//  .principal(GlueCatalogCreateTableDefaultPermissionsPrincipal)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissions.property.permissions">permissions</a></code> | <code>java.util.List<java.lang.String></code> | The permissions that are granted to the principal. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissions.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal">GlueCatalogCreateTableDefaultPermissionsPrincipal</a></code> | The Lake Formation principal. |

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissions.property.permissions"></a>

```java
public java.util.List<java.lang.String> getPermissions();
```

- *Type:* java.util.List<java.lang.String>

The permissions that are granted to the principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#permissions GlueCatalog#permissions}

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissions.property.principal"></a>

```java
public GlueCatalogCreateTableDefaultPermissionsPrincipal getPrincipal();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal">GlueCatalogCreateTableDefaultPermissionsPrincipal</a>

The Lake Formation principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#principal GlueCatalog#principal}

---

### GlueCatalogCreateTableDefaultPermissionsPrincipal <a name="GlueCatalogCreateTableDefaultPermissionsPrincipal" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogCreateTableDefaultPermissionsPrincipal;

GlueCatalogCreateTableDefaultPermissionsPrincipal.builder()
//  .dataLakePrincipalIdentifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal.property.dataLakePrincipalIdentifier">dataLakePrincipalIdentifier</a></code> | <code>java.lang.String</code> | An identifier for the Lake Formation principal. |

---

##### `dataLakePrincipalIdentifier`<sup>Optional</sup> <a name="dataLakePrincipalIdentifier" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal.property.dataLakePrincipalIdentifier"></a>

```java
public java.lang.String getDataLakePrincipalIdentifier();
```

- *Type:* java.lang.String

An identifier for the Lake Formation principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#data_lake_principal_identifier GlueCatalog#data_lake_principal_identifier}

---

### GlueCatalogFederatedCatalog <a name="GlueCatalogFederatedCatalog" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalog.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogFederatedCatalog;

GlueCatalogFederatedCatalog.builder()
//  .connectionName(java.lang.String)
//  .connectionType(java.lang.String)
//  .identifier(java.lang.String)
//  .syncConfiguration(GlueCatalogFederatedCatalogSyncConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalog.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | The name of the connection to an external data source. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalog.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | The type of connection used to access the federated catalog. Synchronization is only supported for certain connection types. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalog.property.identifier">identifier</a></code> | <code>java.lang.String</code> | A unique identifier for the federated catalog. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalog.property.syncConfiguration">syncConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfiguration">GlueCatalogFederatedCatalogSyncConfiguration</a></code> | Configuration for synchronizing a federated catalog with its external data source. |

---

##### `connectionName`<sup>Optional</sup> <a name="connectionName" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalog.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

The name of the connection to an external data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#connection_name GlueCatalog#connection_name}

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalog.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

The type of connection used to access the federated catalog. Synchronization is only supported for certain connection types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#connection_type GlueCatalog#connection_type}

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalog.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

A unique identifier for the federated catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#identifier GlueCatalog#identifier}

---

##### `syncConfiguration`<sup>Optional</sup> <a name="syncConfiguration" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalog.property.syncConfiguration"></a>

```java
public GlueCatalogFederatedCatalogSyncConfiguration getSyncConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfiguration">GlueCatalogFederatedCatalogSyncConfiguration</a>

Configuration for synchronizing a federated catalog with its external data source.

Removing this property does not disable synchronization: Glue keeps the stored configuration for anything omitted from an update. To stop synchronizing, set the Status of each mode to DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#sync_configuration GlueCatalog#sync_configuration}

---

### GlueCatalogFederatedCatalogSyncConfiguration <a name="GlueCatalogFederatedCatalogSyncConfiguration" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogFederatedCatalogSyncConfiguration;

GlueCatalogFederatedCatalogSyncConfiguration.builder()
//  .assetsSyncConfiguration(GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfiguration)
//  .lineageSyncConfiguration(GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfiguration)
//  .roleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfiguration.property.assetsSyncConfiguration">assetsSyncConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfiguration">GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfiguration</a></code> | Configuration for synchronizing assets from the external data source. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfiguration.property.lineageSyncConfiguration">lineageSyncConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfiguration">GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfiguration</a></code> | Configuration for synchronizing lineage from the external data source. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfiguration.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The IAM role, in the catalog owner's account, that the crawlers Glue manages on your behalf assume. |

---

##### `assetsSyncConfiguration`<sup>Optional</sup> <a name="assetsSyncConfiguration" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfiguration.property.assetsSyncConfiguration"></a>

```java
public GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfiguration getAssetsSyncConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfiguration">GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfiguration</a>

Configuration for synchronizing assets from the external data source.

Omitting this property on an update leaves the stored configuration unchanged; set Status to DISABLED to stop synchronizing assets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#assets_sync_configuration GlueCatalog#assets_sync_configuration}

---

##### `lineageSyncConfiguration`<sup>Optional</sup> <a name="lineageSyncConfiguration" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfiguration.property.lineageSyncConfiguration"></a>

```java
public GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfiguration getLineageSyncConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfiguration">GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfiguration</a>

Configuration for synchronizing lineage from the external data source.

Omitting this property on an update leaves the stored configuration unchanged; set Status to DISABLED to stop synchronizing lineage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#lineage_sync_configuration GlueCatalog#lineage_sync_configuration}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfiguration.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The IAM role, in the catalog owner's account, that the crawlers Glue manages on your behalf assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#role_arn GlueCatalog#role_arn}

---

### GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfiguration <a name="GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfiguration" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfiguration;

GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfiguration.builder()
//  .refreshIntervalMinutes(java.lang.Number)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfiguration.property.refreshIntervalMinutes">refreshIntervalMinutes</a></code> | <code>java.lang.Number</code> | How often the crawler synchronizes assets, in minutes. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfiguration.property.status">status</a></code> | <code>java.lang.String</code> | Whether asset synchronization is enabled. |

---

##### `refreshIntervalMinutes`<sup>Optional</sup> <a name="refreshIntervalMinutes" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfiguration.property.refreshIntervalMinutes"></a>

```java
public java.lang.Number getRefreshIntervalMinutes();
```

- *Type:* java.lang.Number

How often the crawler synchronizes assets, in minutes.

Glue enforces a service-side minimum that may be higher than the minimum accepted here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#refresh_interval_minutes GlueCatalog#refresh_interval_minutes}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfiguration.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Whether asset synchronization is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#status GlueCatalog#status}

---

### GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetails <a name="GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetails" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetails;

GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetails.builder()
    .build();
```


### GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsError <a name="GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsError" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsError.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsError;

GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsError.builder()
    .build();
```


### GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfiguration <a name="GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfiguration" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfiguration;

GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfiguration.builder()
//  .refreshIntervalMinutes(java.lang.Number)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfiguration.property.refreshIntervalMinutes">refreshIntervalMinutes</a></code> | <code>java.lang.Number</code> | How often the crawler synchronizes lineage, in minutes. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfiguration.property.status">status</a></code> | <code>java.lang.String</code> | Whether lineage synchronization is enabled. |

---

##### `refreshIntervalMinutes`<sup>Optional</sup> <a name="refreshIntervalMinutes" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfiguration.property.refreshIntervalMinutes"></a>

```java
public java.lang.Number getRefreshIntervalMinutes();
```

- *Type:* java.lang.Number

How often the crawler synchronizes lineage, in minutes.

Glue enforces a service-side minimum that may be higher than the minimum accepted here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#refresh_interval_minutes GlueCatalog#refresh_interval_minutes}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfiguration.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Whether lineage synchronization is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#status GlueCatalog#status}

---

### GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetails <a name="GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetails" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetails;

GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetails.builder()
    .build();
```


### GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsError <a name="GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsError" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsError.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsError;

GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsError.builder()
    .build();
```


### GlueCatalogTags <a name="GlueCatalogTags" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogTags;

GlueCatalogTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#key GlueCatalog#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#value GlueCatalog#value}

---

### GlueCatalogTargetRedshiftCatalog <a name="GlueCatalogTargetRedshiftCatalog" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalog.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogTargetRedshiftCatalog;

GlueCatalogTargetRedshiftCatalog.builder()
//  .catalogArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalog.property.catalogArn">catalogArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the catalog resource. |

---

##### `catalogArn`<sup>Optional</sup> <a name="catalogArn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalog.property.catalogArn"></a>

```java
public java.lang.String getCatalogArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the catalog resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/glue_catalog#catalog_arn GlueCatalog#catalog_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference <a name="GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference;

new GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetAllowFullTableExternalDataAccess">resetAllowFullTableExternalDataAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetCatalogType">resetCatalogType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetDataLakeAccess">resetDataLakeAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetDataTransferRole">resetDataTransferRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowFullTableExternalDataAccess` <a name="resetAllowFullTableExternalDataAccess" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetAllowFullTableExternalDataAccess"></a>

```java
public void resetAllowFullTableExternalDataAccess()
```

##### `resetCatalogType` <a name="resetCatalogType" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetCatalogType"></a>

```java
public void resetCatalogType()
```

##### `resetDataLakeAccess` <a name="resetDataLakeAccess" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetDataLakeAccess"></a>

```java
public void resetDataLakeAccess()
```

##### `resetDataTransferRole` <a name="resetDataTransferRole" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetDataTransferRole"></a>

```java
public void resetDataTransferRole()
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetKmsKey"></a>

```java
public void resetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupName">managedWorkgroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupStatus">managedWorkgroupStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.redshiftDatabaseName">redshiftDatabaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.allowFullTableExternalDataAccessInput">allowFullTableExternalDataAccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.catalogTypeInput">catalogTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataLakeAccessInput">dataLakeAccessInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataTransferRoleInput">dataTransferRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.allowFullTableExternalDataAccess">allowFullTableExternalDataAccess</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.catalogType">catalogType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataLakeAccess">dataLakeAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataTransferRole">dataTransferRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties">GlueCatalogCatalogPropertiesDataLakeAccessProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedWorkgroupName`<sup>Required</sup> <a name="managedWorkgroupName" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupName"></a>

```java
public java.lang.String getManagedWorkgroupName();
```

- *Type:* java.lang.String

---

##### `managedWorkgroupStatus`<sup>Required</sup> <a name="managedWorkgroupStatus" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupStatus"></a>

```java
public java.lang.String getManagedWorkgroupStatus();
```

- *Type:* java.lang.String

---

##### `redshiftDatabaseName`<sup>Required</sup> <a name="redshiftDatabaseName" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.redshiftDatabaseName"></a>

```java
public java.lang.String getRedshiftDatabaseName();
```

- *Type:* java.lang.String

---

##### `allowFullTableExternalDataAccessInput`<sup>Optional</sup> <a name="allowFullTableExternalDataAccessInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.allowFullTableExternalDataAccessInput"></a>

```java
public java.lang.String getAllowFullTableExternalDataAccessInput();
```

- *Type:* java.lang.String

---

##### `catalogTypeInput`<sup>Optional</sup> <a name="catalogTypeInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.catalogTypeInput"></a>

```java
public java.lang.String getCatalogTypeInput();
```

- *Type:* java.lang.String

---

##### `dataLakeAccessInput`<sup>Optional</sup> <a name="dataLakeAccessInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataLakeAccessInput"></a>

```java
public java.lang.Boolean|IResolvable getDataLakeAccessInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dataTransferRoleInput`<sup>Optional</sup> <a name="dataTransferRoleInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataTransferRoleInput"></a>

```java
public java.lang.String getDataTransferRoleInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `allowFullTableExternalDataAccess`<sup>Required</sup> <a name="allowFullTableExternalDataAccess" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.allowFullTableExternalDataAccess"></a>

```java
public java.lang.String getAllowFullTableExternalDataAccess();
```

- *Type:* java.lang.String

---

##### `catalogType`<sup>Required</sup> <a name="catalogType" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.catalogType"></a>

```java
public java.lang.String getCatalogType();
```

- *Type:* java.lang.String

---

##### `dataLakeAccess`<sup>Required</sup> <a name="dataLakeAccess" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataLakeAccess"></a>

```java
public java.lang.Boolean|IResolvable getDataLakeAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dataTransferRole`<sup>Required</sup> <a name="dataTransferRole" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataTransferRole"></a>

```java
public java.lang.String getDataTransferRole();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueCatalogCatalogPropertiesDataLakeAccessProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties">GlueCatalogCatalogPropertiesDataLakeAccessProperties</a>

---


### GlueCatalogCatalogPropertiesOutputReference <a name="GlueCatalogCatalogPropertiesOutputReference" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogCatalogPropertiesOutputReference;

new GlueCatalogCatalogPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.putDataLakeAccessProperties">putDataLakeAccessProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.resetDataLakeAccessProperties">resetDataLakeAccessProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataLakeAccessProperties` <a name="putDataLakeAccessProperties" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.putDataLakeAccessProperties"></a>

```java
public void putDataLakeAccessProperties(GlueCatalogCatalogPropertiesDataLakeAccessProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.putDataLakeAccessProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties">GlueCatalogCatalogPropertiesDataLakeAccessProperties</a>

---

##### `resetDataLakeAccessProperties` <a name="resetDataLakeAccessProperties" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.resetDataLakeAccessProperties"></a>

```java
public void resetDataLakeAccessProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.customProperties">customProperties</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.dataLakeAccessProperties">dataLakeAccessProperties</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference">GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.dataLakeAccessPropertiesInput">dataLakeAccessPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties">GlueCatalogCatalogPropertiesDataLakeAccessProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogProperties">GlueCatalogCatalogProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customProperties`<sup>Required</sup> <a name="customProperties" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.customProperties"></a>

```java
public StringMap getCustomProperties();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `dataLakeAccessProperties`<sup>Required</sup> <a name="dataLakeAccessProperties" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.dataLakeAccessProperties"></a>

```java
public GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference getDataLakeAccessProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference">GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference</a>

---

##### `dataLakeAccessPropertiesInput`<sup>Optional</sup> <a name="dataLakeAccessPropertiesInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.dataLakeAccessPropertiesInput"></a>

```java
public IResolvable|GlueCatalogCatalogPropertiesDataLakeAccessProperties getDataLakeAccessPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties">GlueCatalogCatalogPropertiesDataLakeAccessProperties</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueCatalogCatalogProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogProperties">GlueCatalogCatalogProperties</a>

---


### GlueCatalogCreateDatabaseDefaultPermissionsList <a name="GlueCatalogCreateDatabaseDefaultPermissionsList" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogCreateDatabaseDefaultPermissionsList;

new GlueCatalogCreateDatabaseDefaultPermissionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.get"></a>

```java
public GlueCatalogCreateDatabaseDefaultPermissionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions">GlueCatalogCreateDatabaseDefaultPermissions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GlueCatalogCreateDatabaseDefaultPermissions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions">GlueCatalogCreateDatabaseDefaultPermissions</a>>

---


### GlueCatalogCreateDatabaseDefaultPermissionsOutputReference <a name="GlueCatalogCreateDatabaseDefaultPermissionsOutputReference" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference;

new GlueCatalogCreateDatabaseDefaultPermissionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.putPrincipal">putPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resetPrincipal">resetPrincipal</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrincipal` <a name="putPrincipal" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.putPrincipal"></a>

```java
public void putPrincipal(GlueCatalogCreateDatabaseDefaultPermissionsPrincipal value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.putPrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal">GlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a>

---

##### `resetPermissions` <a name="resetPermissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resetPermissions"></a>

```java
public void resetPermissions()
```

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resetPrincipal"></a>

```java
public void resetPrincipal()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference">GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.permissionsInput">permissionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.principalInput">principalInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal">GlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.permissions">permissions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions">GlueCatalogCreateDatabaseDefaultPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.principal"></a>

```java
public GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference getPrincipal();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference">GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference</a>

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.permissionsInput"></a>

```java
public java.util.List<java.lang.String> getPermissionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.principalInput"></a>

```java
public IResolvable|GlueCatalogCreateDatabaseDefaultPermissionsPrincipal getPrincipalInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal">GlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a>

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.permissions"></a>

```java
public java.util.List<java.lang.String> getPermissions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueCatalogCreateDatabaseDefaultPermissions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions">GlueCatalogCreateDatabaseDefaultPermissions</a>

---


### GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference <a name="GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference;

new GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resetDataLakePrincipalIdentifier">resetDataLakePrincipalIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataLakePrincipalIdentifier` <a name="resetDataLakePrincipalIdentifier" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resetDataLakePrincipalIdentifier"></a>

```java
public void resetDataLakePrincipalIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifierInput">dataLakePrincipalIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier">dataLakePrincipalIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal">GlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataLakePrincipalIdentifierInput`<sup>Optional</sup> <a name="dataLakePrincipalIdentifierInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifierInput"></a>

```java
public java.lang.String getDataLakePrincipalIdentifierInput();
```

- *Type:* java.lang.String

---

##### `dataLakePrincipalIdentifier`<sup>Required</sup> <a name="dataLakePrincipalIdentifier" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```java
public java.lang.String getDataLakePrincipalIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueCatalogCreateDatabaseDefaultPermissionsPrincipal getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal">GlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a>

---


### GlueCatalogCreateTableDefaultPermissionsList <a name="GlueCatalogCreateTableDefaultPermissionsList" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogCreateTableDefaultPermissionsList;

new GlueCatalogCreateTableDefaultPermissionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.get"></a>

```java
public GlueCatalogCreateTableDefaultPermissionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissions">GlueCatalogCreateTableDefaultPermissions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GlueCatalogCreateTableDefaultPermissions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissions">GlueCatalogCreateTableDefaultPermissions</a>>

---


### GlueCatalogCreateTableDefaultPermissionsOutputReference <a name="GlueCatalogCreateTableDefaultPermissionsOutputReference" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogCreateTableDefaultPermissionsOutputReference;

new GlueCatalogCreateTableDefaultPermissionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.putPrincipal">putPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.resetPrincipal">resetPrincipal</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrincipal` <a name="putPrincipal" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.putPrincipal"></a>

```java
public void putPrincipal(GlueCatalogCreateTableDefaultPermissionsPrincipal value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.putPrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal">GlueCatalogCreateTableDefaultPermissionsPrincipal</a>

---

##### `resetPermissions` <a name="resetPermissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.resetPermissions"></a>

```java
public void resetPermissions()
```

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.resetPrincipal"></a>

```java
public void resetPrincipal()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference">GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.permissionsInput">permissionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.principalInput">principalInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal">GlueCatalogCreateTableDefaultPermissionsPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.permissions">permissions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissions">GlueCatalogCreateTableDefaultPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.principal"></a>

```java
public GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference getPrincipal();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference">GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference</a>

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.permissionsInput"></a>

```java
public java.util.List<java.lang.String> getPermissionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.principalInput"></a>

```java
public IResolvable|GlueCatalogCreateTableDefaultPermissionsPrincipal getPrincipalInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal">GlueCatalogCreateTableDefaultPermissionsPrincipal</a>

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.permissions"></a>

```java
public java.util.List<java.lang.String> getPermissions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueCatalogCreateTableDefaultPermissions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissions">GlueCatalogCreateTableDefaultPermissions</a>

---


### GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference <a name="GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference;

new GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resetDataLakePrincipalIdentifier">resetDataLakePrincipalIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataLakePrincipalIdentifier` <a name="resetDataLakePrincipalIdentifier" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resetDataLakePrincipalIdentifier"></a>

```java
public void resetDataLakePrincipalIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifierInput">dataLakePrincipalIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier">dataLakePrincipalIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal">GlueCatalogCreateTableDefaultPermissionsPrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataLakePrincipalIdentifierInput`<sup>Optional</sup> <a name="dataLakePrincipalIdentifierInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifierInput"></a>

```java
public java.lang.String getDataLakePrincipalIdentifierInput();
```

- *Type:* java.lang.String

---

##### `dataLakePrincipalIdentifier`<sup>Required</sup> <a name="dataLakePrincipalIdentifier" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```java
public java.lang.String getDataLakePrincipalIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueCatalogCreateTableDefaultPermissionsPrincipal getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal">GlueCatalogCreateTableDefaultPermissionsPrincipal</a>

---


### GlueCatalogFederatedCatalogOutputReference <a name="GlueCatalogFederatedCatalogOutputReference" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogFederatedCatalogOutputReference;

new GlueCatalogFederatedCatalogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.putSyncConfiguration">putSyncConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resetConnectionName">resetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resetConnectionType">resetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resetIdentifier">resetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resetSyncConfiguration">resetSyncConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSyncConfiguration` <a name="putSyncConfiguration" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.putSyncConfiguration"></a>

```java
public void putSyncConfiguration(GlueCatalogFederatedCatalogSyncConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.putSyncConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfiguration">GlueCatalogFederatedCatalogSyncConfiguration</a>

---

##### `resetConnectionName` <a name="resetConnectionName" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resetConnectionName"></a>

```java
public void resetConnectionName()
```

##### `resetConnectionType` <a name="resetConnectionType" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resetConnectionType"></a>

```java
public void resetConnectionType()
```

##### `resetIdentifier` <a name="resetIdentifier" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resetIdentifier"></a>

```java
public void resetIdentifier()
```

##### `resetSyncConfiguration` <a name="resetSyncConfiguration" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resetSyncConfiguration"></a>

```java
public void resetSyncConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.syncConfiguration">syncConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference">GlueCatalogFederatedCatalogSyncConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.connectionTypeInput">connectionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.identifierInput">identifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.syncConfigurationInput">syncConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfiguration">GlueCatalogFederatedCatalogSyncConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalog">GlueCatalogFederatedCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `syncConfiguration`<sup>Required</sup> <a name="syncConfiguration" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.syncConfiguration"></a>

```java
public GlueCatalogFederatedCatalogSyncConfigurationOutputReference getSyncConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference">GlueCatalogFederatedCatalogSyncConfigurationOutputReference</a>

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.connectionNameInput"></a>

```java
public java.lang.String getConnectionNameInput();
```

- *Type:* java.lang.String

---

##### `connectionTypeInput`<sup>Optional</sup> <a name="connectionTypeInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.connectionTypeInput"></a>

```java
public java.lang.String getConnectionTypeInput();
```

- *Type:* java.lang.String

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.identifierInput"></a>

```java
public java.lang.String getIdentifierInput();
```

- *Type:* java.lang.String

---

##### `syncConfigurationInput`<sup>Optional</sup> <a name="syncConfigurationInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.syncConfigurationInput"></a>

```java
public IResolvable|GlueCatalogFederatedCatalogSyncConfiguration getSyncConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfiguration">GlueCatalogFederatedCatalogSyncConfiguration</a>

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueCatalogFederatedCatalog getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalog">GlueCatalogFederatedCatalog</a>

---


### GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference <a name="GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference;

new GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.property.errorCode">errorCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.property.errorMessage">errorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsError">GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errorCode`<sup>Required</sup> <a name="errorCode" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.property.errorCode"></a>

```java
public java.lang.String getErrorCode();
```

- *Type:* java.lang.String

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.property.errorMessage"></a>

```java
public java.lang.String getErrorMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference.property.internalValue"></a>

```java
public GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsError getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsError">GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsError</a>

---


### GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference <a name="GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference;

new GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.property.crawlerArn">crawlerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference">GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetails">GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `crawlerArn`<sup>Required</sup> <a name="crawlerArn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.property.crawlerArn"></a>

```java
public java.lang.String getCrawlerArn();
```

- *Type:* java.lang.String

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.property.error"></a>

```java
public GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference getError();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference">GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsErrorOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference.property.internalValue"></a>

```java
public GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetails getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetails">GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetails</a>

---


### GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference <a name="GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference;

new GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.resetRefreshIntervalMinutes">resetRefreshIntervalMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRefreshIntervalMinutes` <a name="resetRefreshIntervalMinutes" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.resetRefreshIntervalMinutes"></a>

```java
public void resetRefreshIntervalMinutes()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.property.managedCrawlerDetails">managedCrawlerDetails</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference">GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.property.refreshIntervalMinutesInput">refreshIntervalMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.property.refreshIntervalMinutes">refreshIntervalMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfiguration">GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedCrawlerDetails`<sup>Required</sup> <a name="managedCrawlerDetails" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.property.managedCrawlerDetails"></a>

```java
public GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference getManagedCrawlerDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference">GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationManagedCrawlerDetailsOutputReference</a>

---

##### `refreshIntervalMinutesInput`<sup>Optional</sup> <a name="refreshIntervalMinutesInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.property.refreshIntervalMinutesInput"></a>

```java
public java.lang.Number getRefreshIntervalMinutesInput();
```

- *Type:* java.lang.Number

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `refreshIntervalMinutes`<sup>Required</sup> <a name="refreshIntervalMinutes" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.property.refreshIntervalMinutes"></a>

```java
public java.lang.Number getRefreshIntervalMinutes();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfiguration">GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfiguration</a>

---


### GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference <a name="GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference;

new GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.property.errorCode">errorCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.property.errorMessage">errorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsError">GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errorCode`<sup>Required</sup> <a name="errorCode" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.property.errorCode"></a>

```java
public java.lang.String getErrorCode();
```

- *Type:* java.lang.String

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.property.errorMessage"></a>

```java
public java.lang.String getErrorMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference.property.internalValue"></a>

```java
public GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsError getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsError">GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsError</a>

---


### GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference <a name="GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference;

new GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.property.crawlerArn">crawlerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference">GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetails">GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `crawlerArn`<sup>Required</sup> <a name="crawlerArn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.property.crawlerArn"></a>

```java
public java.lang.String getCrawlerArn();
```

- *Type:* java.lang.String

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.property.error"></a>

```java
public GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference getError();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference">GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsErrorOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference.property.internalValue"></a>

```java
public GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetails getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetails">GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetails</a>

---


### GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference <a name="GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference;

new GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.resetRefreshIntervalMinutes">resetRefreshIntervalMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRefreshIntervalMinutes` <a name="resetRefreshIntervalMinutes" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.resetRefreshIntervalMinutes"></a>

```java
public void resetRefreshIntervalMinutes()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.property.managedCrawlerDetails">managedCrawlerDetails</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference">GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.property.refreshIntervalMinutesInput">refreshIntervalMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.property.refreshIntervalMinutes">refreshIntervalMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfiguration">GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedCrawlerDetails`<sup>Required</sup> <a name="managedCrawlerDetails" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.property.managedCrawlerDetails"></a>

```java
public GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference getManagedCrawlerDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference">GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationManagedCrawlerDetailsOutputReference</a>

---

##### `refreshIntervalMinutesInput`<sup>Optional</sup> <a name="refreshIntervalMinutesInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.property.refreshIntervalMinutesInput"></a>

```java
public java.lang.Number getRefreshIntervalMinutesInput();
```

- *Type:* java.lang.Number

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `refreshIntervalMinutes`<sup>Required</sup> <a name="refreshIntervalMinutes" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.property.refreshIntervalMinutes"></a>

```java
public java.lang.Number getRefreshIntervalMinutes();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfiguration">GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfiguration</a>

---


### GlueCatalogFederatedCatalogSyncConfigurationOutputReference <a name="GlueCatalogFederatedCatalogSyncConfigurationOutputReference" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference;

new GlueCatalogFederatedCatalogSyncConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.putAssetsSyncConfiguration">putAssetsSyncConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.putLineageSyncConfiguration">putLineageSyncConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.resetAssetsSyncConfiguration">resetAssetsSyncConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.resetLineageSyncConfiguration">resetLineageSyncConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAssetsSyncConfiguration` <a name="putAssetsSyncConfiguration" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.putAssetsSyncConfiguration"></a>

```java
public void putAssetsSyncConfiguration(GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.putAssetsSyncConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfiguration">GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfiguration</a>

---

##### `putLineageSyncConfiguration` <a name="putLineageSyncConfiguration" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.putLineageSyncConfiguration"></a>

```java
public void putLineageSyncConfiguration(GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.putLineageSyncConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfiguration">GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfiguration</a>

---

##### `resetAssetsSyncConfiguration` <a name="resetAssetsSyncConfiguration" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.resetAssetsSyncConfiguration"></a>

```java
public void resetAssetsSyncConfiguration()
```

##### `resetLineageSyncConfiguration` <a name="resetLineageSyncConfiguration" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.resetLineageSyncConfiguration"></a>

```java
public void resetLineageSyncConfiguration()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.property.assetsSyncConfiguration">assetsSyncConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference">GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.property.lineageSyncConfiguration">lineageSyncConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference">GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.property.assetsSyncConfigurationInput">assetsSyncConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfiguration">GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.property.lineageSyncConfigurationInput">lineageSyncConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfiguration">GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfiguration">GlueCatalogFederatedCatalogSyncConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assetsSyncConfiguration`<sup>Required</sup> <a name="assetsSyncConfiguration" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.property.assetsSyncConfiguration"></a>

```java
public GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference getAssetsSyncConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference">GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfigurationOutputReference</a>

---

##### `lineageSyncConfiguration`<sup>Required</sup> <a name="lineageSyncConfiguration" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.property.lineageSyncConfiguration"></a>

```java
public GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference getLineageSyncConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference">GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfigurationOutputReference</a>

---

##### `assetsSyncConfigurationInput`<sup>Optional</sup> <a name="assetsSyncConfigurationInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.property.assetsSyncConfigurationInput"></a>

```java
public IResolvable|GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfiguration getAssetsSyncConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfiguration">GlueCatalogFederatedCatalogSyncConfigurationAssetsSyncConfiguration</a>

---

##### `lineageSyncConfigurationInput`<sup>Optional</sup> <a name="lineageSyncConfigurationInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.property.lineageSyncConfigurationInput"></a>

```java
public IResolvable|GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfiguration getLineageSyncConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfiguration">GlueCatalogFederatedCatalogSyncConfigurationLineageSyncConfiguration</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueCatalogFederatedCatalogSyncConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogSyncConfiguration">GlueCatalogFederatedCatalogSyncConfiguration</a>

---


### GlueCatalogTagsList <a name="GlueCatalogTagsList" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogTagsList;

new GlueCatalogTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.get"></a>

```java
public GlueCatalogTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTags">GlueCatalogTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GlueCatalogTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTags">GlueCatalogTags</a>>

---


### GlueCatalogTagsOutputReference <a name="GlueCatalogTagsOutputReference" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogTagsOutputReference;

new GlueCatalogTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTags">GlueCatalogTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueCatalogTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTags">GlueCatalogTags</a>

---


### GlueCatalogTargetRedshiftCatalogOutputReference <a name="GlueCatalogTargetRedshiftCatalogOutputReference" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_catalog.GlueCatalogTargetRedshiftCatalogOutputReference;

new GlueCatalogTargetRedshiftCatalogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.resetCatalogArn">resetCatalogArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogArn` <a name="resetCatalogArn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.resetCatalogArn"></a>

```java
public void resetCatalogArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.catalogArnInput">catalogArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.catalogArn">catalogArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalog">GlueCatalogTargetRedshiftCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogArnInput`<sup>Optional</sup> <a name="catalogArnInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.catalogArnInput"></a>

```java
public java.lang.String getCatalogArnInput();
```

- *Type:* java.lang.String

---

##### `catalogArn`<sup>Required</sup> <a name="catalogArn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.catalogArn"></a>

```java
public java.lang.String getCatalogArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueCatalogTargetRedshiftCatalog getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalog">GlueCatalogTargetRedshiftCatalog</a>

---



