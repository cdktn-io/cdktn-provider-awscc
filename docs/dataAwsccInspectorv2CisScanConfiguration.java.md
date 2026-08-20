# `dataAwsccInspectorv2CisScanConfiguration` Submodule <a name="`dataAwsccInspectorv2CisScanConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccInspectorv2CisScanConfiguration <a name="DataAwsccInspectorv2CisScanConfiguration" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/inspectorv2_cis_scan_configuration awscc_inspectorv2_cis_scan_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_inspectorv2_cis_scan_configuration.DataAwsccInspectorv2CisScanConfiguration;

DataAwsccInspectorv2CisScanConfiguration.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/inspectorv2_cis_scan_configuration#id DataAwsccInspectorv2CisScanConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccInspectorv2CisScanConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_inspectorv2_cis_scan_configuration.DataAwsccInspectorv2CisScanConfiguration;

DataAwsccInspectorv2CisScanConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_inspectorv2_cis_scan_configuration.DataAwsccInspectorv2CisScanConfiguration;

DataAwsccInspectorv2CisScanConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_inspectorv2_cis_scan_configuration.DataAwsccInspectorv2CisScanConfiguration;

DataAwsccInspectorv2CisScanConfiguration.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_inspectorv2_cis_scan_configuration.DataAwsccInspectorv2CisScanConfiguration;

DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccInspectorv2CisScanConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccInspectorv2CisScanConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccInspectorv2CisScanConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/inspectorv2_cis_scan_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccInspectorv2CisScanConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.scanName">scanName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.securityLevel">securityLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.tags">tags</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference">DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `scanName`<sup>Required</sup> <a name="scanName" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.scanName"></a>

```java
public java.lang.String getScanName();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.schedule"></a>

```java
public DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference</a>

---

##### `securityLevel`<sup>Required</sup> <a name="securityLevel" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.securityLevel"></a>

```java
public java.lang.String getSecurityLevel();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.targets"></a>

```java
public DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference getTargets();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference">DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccInspectorv2CisScanConfigurationConfig <a name="DataAwsccInspectorv2CisScanConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_inspectorv2_cis_scan_configuration.DataAwsccInspectorv2CisScanConfigurationConfig;

DataAwsccInspectorv2CisScanConfigurationConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/inspectorv2_cis_scan_configuration#id DataAwsccInspectorv2CisScanConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccInspectorv2CisScanConfigurationSchedule <a name="DataAwsccInspectorv2CisScanConfigurationSchedule" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationSchedule.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_inspectorv2_cis_scan_configuration.DataAwsccInspectorv2CisScanConfigurationSchedule;

DataAwsccInspectorv2CisScanConfigurationSchedule.builder()
    .build();
```


### DataAwsccInspectorv2CisScanConfigurationScheduleDaily <a name="DataAwsccInspectorv2CisScanConfigurationScheduleDaily" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDaily"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDaily.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_inspectorv2_cis_scan_configuration.DataAwsccInspectorv2CisScanConfigurationScheduleDaily;

DataAwsccInspectorv2CisScanConfigurationScheduleDaily.builder()
    .build();
```


### DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime <a name="DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_inspectorv2_cis_scan_configuration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime;

DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime.builder()
    .build();
```


### DataAwsccInspectorv2CisScanConfigurationScheduleMonthly <a name="DataAwsccInspectorv2CisScanConfigurationScheduleMonthly" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthly.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_inspectorv2_cis_scan_configuration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthly;

DataAwsccInspectorv2CisScanConfigurationScheduleMonthly.builder()
    .build();
```


### DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime <a name="DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_inspectorv2_cis_scan_configuration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime;

DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime.builder()
    .build();
```


### DataAwsccInspectorv2CisScanConfigurationScheduleWeekly <a name="DataAwsccInspectorv2CisScanConfigurationScheduleWeekly" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeekly.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_inspectorv2_cis_scan_configuration.DataAwsccInspectorv2CisScanConfigurationScheduleWeekly;

DataAwsccInspectorv2CisScanConfigurationScheduleWeekly.builder()
    .build();
```


### DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime <a name="DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_inspectorv2_cis_scan_configuration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime;

DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime.builder()
    .build();
```


### DataAwsccInspectorv2CisScanConfigurationTargets <a name="DataAwsccInspectorv2CisScanConfigurationTargets" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargets.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_inspectorv2_cis_scan_configuration.DataAwsccInspectorv2CisScanConfigurationTargets;

DataAwsccInspectorv2CisScanConfigurationTargets.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_inspectorv2_cis_scan_configuration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference;

new DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDaily">DataAwsccInspectorv2CisScanConfigurationScheduleDaily</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.startTime"></a>

```java
public DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference getStartTime();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.internalValue"></a>

```java
public DataAwsccInspectorv2CisScanConfigurationScheduleDaily getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDaily">DataAwsccInspectorv2CisScanConfigurationScheduleDaily</a>

---


### DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_inspectorv2_cis_scan_configuration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference;

new DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeOfDay">timeOfDay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime">DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeOfDay`<sup>Required</sup> <a name="timeOfDay" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeOfDay"></a>

```java
public java.lang.String getTimeOfDay();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.internalValue"></a>

```java
public DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime">DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime</a>

---


### DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_inspectorv2_cis_scan_configuration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference;

new DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.day">day</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthly">DataAwsccInspectorv2CisScanConfigurationScheduleMonthly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.startTime"></a>

```java
public DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference getStartTime();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.internalValue"></a>

```java
public DataAwsccInspectorv2CisScanConfigurationScheduleMonthly getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthly">DataAwsccInspectorv2CisScanConfigurationScheduleMonthly</a>

---


### DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_inspectorv2_cis_scan_configuration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference;

new DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeOfDay">timeOfDay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime">DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeOfDay`<sup>Required</sup> <a name="timeOfDay" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeOfDay"></a>

```java
public java.lang.String getTimeOfDay();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.internalValue"></a>

```java
public DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime">DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime</a>

---


### DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_inspectorv2_cis_scan_configuration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference;

new DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.daily">daily</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.monthly">monthly</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.oneTime">oneTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.weekly">weekly</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationSchedule">DataAwsccInspectorv2CisScanConfigurationSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daily`<sup>Required</sup> <a name="daily" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.daily"></a>

```java
public DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference getDaily();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference</a>

---

##### `monthly`<sup>Required</sup> <a name="monthly" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.monthly"></a>

```java
public DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference getMonthly();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference</a>

---

##### `oneTime`<sup>Required</sup> <a name="oneTime" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.oneTime"></a>

```java
public java.lang.String getOneTime();
```

- *Type:* java.lang.String

---

##### `weekly`<sup>Required</sup> <a name="weekly" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.weekly"></a>

```java
public DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference getWeekly();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.internalValue"></a>

```java
public DataAwsccInspectorv2CisScanConfigurationSchedule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationSchedule">DataAwsccInspectorv2CisScanConfigurationSchedule</a>

---


### DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_inspectorv2_cis_scan_configuration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference;

new DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.days">days</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeekly">DataAwsccInspectorv2CisScanConfigurationScheduleWeekly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.days"></a>

```java
public java.util.List<java.lang.String> getDays();
```

- *Type:* java.util.List<java.lang.String>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.startTime"></a>

```java
public DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference getStartTime();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.internalValue"></a>

```java
public DataAwsccInspectorv2CisScanConfigurationScheduleWeekly getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeekly">DataAwsccInspectorv2CisScanConfigurationScheduleWeekly</a>

---


### DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_inspectorv2_cis_scan_configuration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference;

new DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeOfDay">timeOfDay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime">DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeOfDay`<sup>Required</sup> <a name="timeOfDay" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeOfDay"></a>

```java
public java.lang.String getTimeOfDay();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.internalValue"></a>

```java
public DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime">DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime</a>

---


### DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_inspectorv2_cis_scan_configuration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference;

new DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.accountIds">accountIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.targetResourceTags">targetResourceTags</a></code> | <code>io.cdktn.cdktn.StringListMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargets">DataAwsccInspectorv2CisScanConfigurationTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountIds`<sup>Required</sup> <a name="accountIds" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.accountIds"></a>

```java
public java.util.List<java.lang.String> getAccountIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetResourceTags`<sup>Required</sup> <a name="targetResourceTags" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.targetResourceTags"></a>

```java
public StringListMap getTargetResourceTags();
```

- *Type:* io.cdktn.cdktn.StringListMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.internalValue"></a>

```java
public DataAwsccInspectorv2CisScanConfigurationTargets getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargets">DataAwsccInspectorv2CisScanConfigurationTargets</a>

---



