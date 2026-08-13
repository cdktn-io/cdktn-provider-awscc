# `dataAwsccDmsDataMigration` Submodule <a name="`dataAwsccDmsDataMigration` Submodule" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDmsDataMigration <a name="DataAwsccDmsDataMigration" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/dms_data_migration awscc_dms_data_migration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_data_migration.DataAwsccDmsDataMigration;

DataAwsccDmsDataMigration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/dms_data_migration#id DataAwsccDmsDataMigration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDmsDataMigration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_data_migration.DataAwsccDmsDataMigration;

DataAwsccDmsDataMigration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_data_migration.DataAwsccDmsDataMigration;

DataAwsccDmsDataMigration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_data_migration.DataAwsccDmsDataMigration;

DataAwsccDmsDataMigration.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_data_migration.DataAwsccDmsDataMigration;

DataAwsccDmsDataMigration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccDmsDataMigration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccDmsDataMigration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccDmsDataMigration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccDmsDataMigration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/dms_data_migration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDmsDataMigration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.dataMigrationArn">dataMigrationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.dataMigrationCreateTime">dataMigrationCreateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.dataMigrationIdentifier">dataMigrationIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.dataMigrationName">dataMigrationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.dataMigrationSettings">dataMigrationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference">DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.dataMigrationType">dataMigrationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.migrationProjectIdentifier">migrationProjectIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.sourceDataSettings">sourceDataSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsList">DataAwsccDmsDataMigrationSourceDataSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsList">DataAwsccDmsDataMigrationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `dataMigrationArn`<sup>Required</sup> <a name="dataMigrationArn" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.dataMigrationArn"></a>

```java
public java.lang.String getDataMigrationArn();
```

- *Type:* java.lang.String

---

##### `dataMigrationCreateTime`<sup>Required</sup> <a name="dataMigrationCreateTime" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.dataMigrationCreateTime"></a>

```java
public java.lang.String getDataMigrationCreateTime();
```

- *Type:* java.lang.String

---

##### `dataMigrationIdentifier`<sup>Required</sup> <a name="dataMigrationIdentifier" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.dataMigrationIdentifier"></a>

```java
public java.lang.String getDataMigrationIdentifier();
```

- *Type:* java.lang.String

---

##### `dataMigrationName`<sup>Required</sup> <a name="dataMigrationName" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.dataMigrationName"></a>

```java
public java.lang.String getDataMigrationName();
```

- *Type:* java.lang.String

---

##### `dataMigrationSettings`<sup>Required</sup> <a name="dataMigrationSettings" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.dataMigrationSettings"></a>

```java
public DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference getDataMigrationSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference">DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference</a>

---

##### `dataMigrationType`<sup>Required</sup> <a name="dataMigrationType" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.dataMigrationType"></a>

```java
public java.lang.String getDataMigrationType();
```

- *Type:* java.lang.String

---

##### `migrationProjectIdentifier`<sup>Required</sup> <a name="migrationProjectIdentifier" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.migrationProjectIdentifier"></a>

```java
public java.lang.String getMigrationProjectIdentifier();
```

- *Type:* java.lang.String

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `sourceDataSettings`<sup>Required</sup> <a name="sourceDataSettings" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.sourceDataSettings"></a>

```java
public DataAwsccDmsDataMigrationSourceDataSettingsList getSourceDataSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsList">DataAwsccDmsDataMigrationSourceDataSettingsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.tags"></a>

```java
public DataAwsccDmsDataMigrationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsList">DataAwsccDmsDataMigrationTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDmsDataMigrationConfig <a name="DataAwsccDmsDataMigrationConfig" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_data_migration.DataAwsccDmsDataMigrationConfig;

DataAwsccDmsDataMigrationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/dms_data_migration#id DataAwsccDmsDataMigration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDmsDataMigrationDataMigrationSettings <a name="DataAwsccDmsDataMigrationDataMigrationSettings" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_data_migration.DataAwsccDmsDataMigrationDataMigrationSettings;

DataAwsccDmsDataMigrationDataMigrationSettings.builder()
    .build();
```


### DataAwsccDmsDataMigrationSourceDataSettings <a name="DataAwsccDmsDataMigrationSourceDataSettings" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_data_migration.DataAwsccDmsDataMigrationSourceDataSettings;

DataAwsccDmsDataMigrationSourceDataSettings.builder()
    .build();
```


### DataAwsccDmsDataMigrationTags <a name="DataAwsccDmsDataMigrationTags" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_data_migration.DataAwsccDmsDataMigrationTags;

DataAwsccDmsDataMigrationTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference <a name="DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_data_migration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference;

new DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.property.cloudwatchLogsEnabled">cloudwatchLogsEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.property.numberOfJobs">numberOfJobs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.property.selectionRules">selectionRules</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettings">DataAwsccDmsDataMigrationDataMigrationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogsEnabled`<sup>Required</sup> <a name="cloudwatchLogsEnabled" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.property.cloudwatchLogsEnabled"></a>

```java
public IResolvable getCloudwatchLogsEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `numberOfJobs`<sup>Required</sup> <a name="numberOfJobs" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.property.numberOfJobs"></a>

```java
public java.lang.Number getNumberOfJobs();
```

- *Type:* java.lang.Number

---

##### `selectionRules`<sup>Required</sup> <a name="selectionRules" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.property.selectionRules"></a>

```java
public java.lang.String getSelectionRules();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDmsDataMigrationDataMigrationSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationDataMigrationSettings">DataAwsccDmsDataMigrationDataMigrationSettings</a>

---


### DataAwsccDmsDataMigrationSourceDataSettingsList <a name="DataAwsccDmsDataMigrationSourceDataSettingsList" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_data_migration.DataAwsccDmsDataMigrationSourceDataSettingsList;

new DataAwsccDmsDataMigrationSourceDataSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsList.get"></a>

```java
public DataAwsccDmsDataMigrationSourceDataSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccDmsDataMigrationSourceDataSettingsOutputReference <a name="DataAwsccDmsDataMigrationSourceDataSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_data_migration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference;

new DataAwsccDmsDataMigrationSourceDataSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartPosition">cdcStartPosition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartTime">cdcStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.property.cdcStopTime">cdcStopTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.property.slotName">slotName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettings">DataAwsccDmsDataMigrationSourceDataSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cdcStartPosition`<sup>Required</sup> <a name="cdcStartPosition" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartPosition"></a>

```java
public java.lang.String getCdcStartPosition();
```

- *Type:* java.lang.String

---

##### `cdcStartTime`<sup>Required</sup> <a name="cdcStartTime" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartTime"></a>

```java
public java.lang.String getCdcStartTime();
```

- *Type:* java.lang.String

---

##### `cdcStopTime`<sup>Required</sup> <a name="cdcStopTime" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.property.cdcStopTime"></a>

```java
public java.lang.String getCdcStopTime();
```

- *Type:* java.lang.String

---

##### `slotName`<sup>Required</sup> <a name="slotName" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.property.slotName"></a>

```java
public java.lang.String getSlotName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDmsDataMigrationSourceDataSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationSourceDataSettings">DataAwsccDmsDataMigrationSourceDataSettings</a>

---


### DataAwsccDmsDataMigrationTagsList <a name="DataAwsccDmsDataMigrationTagsList" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_data_migration.DataAwsccDmsDataMigrationTagsList;

new DataAwsccDmsDataMigrationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsList.get"></a>

```java
public DataAwsccDmsDataMigrationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccDmsDataMigrationTagsOutputReference <a name="DataAwsccDmsDataMigrationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_data_migration.DataAwsccDmsDataMigrationTagsOutputReference;

new DataAwsccDmsDataMigrationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTags">DataAwsccDmsDataMigrationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccDmsDataMigrationTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataMigration.DataAwsccDmsDataMigrationTags">DataAwsccDmsDataMigrationTags</a>

---



