# `dataAwsccCloudformationStackSet` Submodule <a name="`dataAwsccCloudformationStackSet` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudformationStackSet <a name="DataAwsccCloudformationStackSet" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudformation_stack_set awscc_cloudformation_stack_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_stack_set.DataAwsccCloudformationStackSet;

DataAwsccCloudformationStackSet.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudformation_stack_set#id DataAwsccCloudformationStackSet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudformationStackSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_stack_set.DataAwsccCloudformationStackSet;

DataAwsccCloudformationStackSet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_stack_set.DataAwsccCloudformationStackSet;

DataAwsccCloudformationStackSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_stack_set.DataAwsccCloudformationStackSet;

DataAwsccCloudformationStackSet.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_stack_set.DataAwsccCloudformationStackSet;

DataAwsccCloudformationStackSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccCloudformationStackSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccCloudformationStackSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccCloudformationStackSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccCloudformationStackSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudformation_stack_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudformationStackSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.administrationRoleArn">administrationRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.autoDeployment">autoDeployment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference">DataAwsccCloudformationStackSetAutoDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.callAs">callAs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.executionRoleName">executionRoleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.managedExecution">managedExecution</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference">DataAwsccCloudformationStackSetManagedExecutionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.operationPreferences">operationPreferences</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference">DataAwsccCloudformationStackSetOperationPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList">DataAwsccCloudformationStackSetParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.permissionModel">permissionModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.stackInstancesGroup">stackInstancesGroup</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList">DataAwsccCloudformationStackSetStackInstancesGroupList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.stackSetId">stackSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.stackSetName">stackSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList">DataAwsccCloudformationStackSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.templateBody">templateBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.templateUrl">templateUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `administrationRoleArn`<sup>Required</sup> <a name="administrationRoleArn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.administrationRoleArn"></a>

```java
public java.lang.String getAdministrationRoleArn();
```

- *Type:* java.lang.String

---

##### `autoDeployment`<sup>Required</sup> <a name="autoDeployment" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.autoDeployment"></a>

```java
public DataAwsccCloudformationStackSetAutoDeploymentOutputReference getAutoDeployment();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference">DataAwsccCloudformationStackSetAutoDeploymentOutputReference</a>

---

##### `callAs`<sup>Required</sup> <a name="callAs" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.callAs"></a>

```java
public java.lang.String getCallAs();
```

- *Type:* java.lang.String

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.capabilities"></a>

```java
public java.util.List<java.lang.String> getCapabilities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `executionRoleName`<sup>Required</sup> <a name="executionRoleName" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.executionRoleName"></a>

```java
public java.lang.String getExecutionRoleName();
```

- *Type:* java.lang.String

---

##### `managedExecution`<sup>Required</sup> <a name="managedExecution" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.managedExecution"></a>

```java
public DataAwsccCloudformationStackSetManagedExecutionOutputReference getManagedExecution();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference">DataAwsccCloudformationStackSetManagedExecutionOutputReference</a>

---

##### `operationPreferences`<sup>Required</sup> <a name="operationPreferences" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.operationPreferences"></a>

```java
public DataAwsccCloudformationStackSetOperationPreferencesOutputReference getOperationPreferences();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference">DataAwsccCloudformationStackSetOperationPreferencesOutputReference</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.parameters"></a>

```java
public DataAwsccCloudformationStackSetParametersList getParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList">DataAwsccCloudformationStackSetParametersList</a>

---

##### `permissionModel`<sup>Required</sup> <a name="permissionModel" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.permissionModel"></a>

```java
public java.lang.String getPermissionModel();
```

- *Type:* java.lang.String

---

##### `stackInstancesGroup`<sup>Required</sup> <a name="stackInstancesGroup" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.stackInstancesGroup"></a>

```java
public DataAwsccCloudformationStackSetStackInstancesGroupList getStackInstancesGroup();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList">DataAwsccCloudformationStackSetStackInstancesGroupList</a>

---

##### `stackSetId`<sup>Required</sup> <a name="stackSetId" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.stackSetId"></a>

```java
public java.lang.String getStackSetId();
```

- *Type:* java.lang.String

---

##### `stackSetName`<sup>Required</sup> <a name="stackSetName" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.stackSetName"></a>

```java
public java.lang.String getStackSetName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.tags"></a>

```java
public DataAwsccCloudformationStackSetTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList">DataAwsccCloudformationStackSetTagsList</a>

---

##### `templateBody`<sup>Required</sup> <a name="templateBody" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.templateBody"></a>

```java
public java.lang.String getTemplateBody();
```

- *Type:* java.lang.String

---

##### `templateUrl`<sup>Required</sup> <a name="templateUrl" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.templateUrl"></a>

```java
public java.lang.String getTemplateUrl();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudformationStackSetAutoDeployment <a name="DataAwsccCloudformationStackSetAutoDeployment" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeployment.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_stack_set.DataAwsccCloudformationStackSetAutoDeployment;

DataAwsccCloudformationStackSetAutoDeployment.builder()
    .build();
```


### DataAwsccCloudformationStackSetConfig <a name="DataAwsccCloudformationStackSetConfig" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_stack_set.DataAwsccCloudformationStackSetConfig;

DataAwsccCloudformationStackSetConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudformation_stack_set#id DataAwsccCloudformationStackSet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudformationStackSetManagedExecution <a name="DataAwsccCloudformationStackSetManagedExecution" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecution.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_stack_set.DataAwsccCloudformationStackSetManagedExecution;

DataAwsccCloudformationStackSetManagedExecution.builder()
    .build();
```


### DataAwsccCloudformationStackSetOperationPreferences <a name="DataAwsccCloudformationStackSetOperationPreferences" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferences.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_stack_set.DataAwsccCloudformationStackSetOperationPreferences;

DataAwsccCloudformationStackSetOperationPreferences.builder()
    .build();
```


### DataAwsccCloudformationStackSetParameters <a name="DataAwsccCloudformationStackSetParameters" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_stack_set.DataAwsccCloudformationStackSetParameters;

DataAwsccCloudformationStackSetParameters.builder()
    .build();
```


### DataAwsccCloudformationStackSetStackInstancesGroup <a name="DataAwsccCloudformationStackSetStackInstancesGroup" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_stack_set.DataAwsccCloudformationStackSetStackInstancesGroup;

DataAwsccCloudformationStackSetStackInstancesGroup.builder()
    .build();
```


### DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargets <a name="DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargets" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargets.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_stack_set.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargets;

DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargets.builder()
    .build();
```


### DataAwsccCloudformationStackSetStackInstancesGroupParameterOverrides <a name="DataAwsccCloudformationStackSetStackInstancesGroupParameterOverrides" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverrides.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_stack_set.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverrides;

DataAwsccCloudformationStackSetStackInstancesGroupParameterOverrides.builder()
    .build();
```


### DataAwsccCloudformationStackSetTags <a name="DataAwsccCloudformationStackSetTags" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_stack_set.DataAwsccCloudformationStackSetTags;

DataAwsccCloudformationStackSetTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudformationStackSetAutoDeploymentOutputReference <a name="DataAwsccCloudformationStackSetAutoDeploymentOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_stack_set.DataAwsccCloudformationStackSetAutoDeploymentOutputReference;

new DataAwsccCloudformationStackSetAutoDeploymentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.property.retainStacksOnAccountRemoval">retainStacksOnAccountRemoval</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeployment">DataAwsccCloudformationStackSetAutoDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dependsOn`<sup>Required</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `retainStacksOnAccountRemoval`<sup>Required</sup> <a name="retainStacksOnAccountRemoval" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.property.retainStacksOnAccountRemoval"></a>

```java
public IResolvable getRetainStacksOnAccountRemoval();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudformationStackSetAutoDeployment getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeployment">DataAwsccCloudformationStackSetAutoDeployment</a>

---


### DataAwsccCloudformationStackSetManagedExecutionOutputReference <a name="DataAwsccCloudformationStackSetManagedExecutionOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_stack_set.DataAwsccCloudformationStackSetManagedExecutionOutputReference;

new DataAwsccCloudformationStackSetManagedExecutionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.property.active">active</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecution">DataAwsccCloudformationStackSetManagedExecution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.property.active"></a>

```java
public IResolvable getActive();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudformationStackSetManagedExecution getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecution">DataAwsccCloudformationStackSetManagedExecution</a>

---


### DataAwsccCloudformationStackSetOperationPreferencesOutputReference <a name="DataAwsccCloudformationStackSetOperationPreferencesOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_stack_set.DataAwsccCloudformationStackSetOperationPreferencesOutputReference;

new DataAwsccCloudformationStackSetOperationPreferencesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.concurrencyMode">concurrencyMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.failureToleranceCount">failureToleranceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.failureTolerancePercentage">failureTolerancePercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentCount">maxConcurrentCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentPercentage">maxConcurrentPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.regionConcurrencyType">regionConcurrencyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.regionOrder">regionOrder</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferences">DataAwsccCloudformationStackSetOperationPreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `concurrencyMode`<sup>Required</sup> <a name="concurrencyMode" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.concurrencyMode"></a>

```java
public java.lang.String getConcurrencyMode();
```

- *Type:* java.lang.String

---

##### `failureToleranceCount`<sup>Required</sup> <a name="failureToleranceCount" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.failureToleranceCount"></a>

```java
public java.lang.Number getFailureToleranceCount();
```

- *Type:* java.lang.Number

---

##### `failureTolerancePercentage`<sup>Required</sup> <a name="failureTolerancePercentage" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.failureTolerancePercentage"></a>

```java
public java.lang.Number getFailureTolerancePercentage();
```

- *Type:* java.lang.Number

---

##### `maxConcurrentCount`<sup>Required</sup> <a name="maxConcurrentCount" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentCount"></a>

```java
public java.lang.Number getMaxConcurrentCount();
```

- *Type:* java.lang.Number

---

##### `maxConcurrentPercentage`<sup>Required</sup> <a name="maxConcurrentPercentage" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentPercentage"></a>

```java
public java.lang.Number getMaxConcurrentPercentage();
```

- *Type:* java.lang.Number

---

##### `regionConcurrencyType`<sup>Required</sup> <a name="regionConcurrencyType" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.regionConcurrencyType"></a>

```java
public java.lang.String getRegionConcurrencyType();
```

- *Type:* java.lang.String

---

##### `regionOrder`<sup>Required</sup> <a name="regionOrder" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.regionOrder"></a>

```java
public java.util.List<java.lang.String> getRegionOrder();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudformationStackSetOperationPreferences getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferences">DataAwsccCloudformationStackSetOperationPreferences</a>

---


### DataAwsccCloudformationStackSetParametersList <a name="DataAwsccCloudformationStackSetParametersList" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_stack_set.DataAwsccCloudformationStackSetParametersList;

new DataAwsccCloudformationStackSetParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.get"></a>

```java
public DataAwsccCloudformationStackSetParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCloudformationStackSetParametersOutputReference <a name="DataAwsccCloudformationStackSetParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_stack_set.DataAwsccCloudformationStackSetParametersOutputReference;

new DataAwsccCloudformationStackSetParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.property.parameterKey">parameterKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.property.parameterValue">parameterValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParameters">DataAwsccCloudformationStackSetParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameterKey`<sup>Required</sup> <a name="parameterKey" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.property.parameterKey"></a>

```java
public java.lang.String getParameterKey();
```

- *Type:* java.lang.String

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.property.parameterValue"></a>

```java
public java.lang.String getParameterValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudformationStackSetParameters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParameters">DataAwsccCloudformationStackSetParameters</a>

---


### DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference <a name="DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_stack_set.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference;

new DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accountFilterType">accountFilterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accounts">accounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accountsUrl">accountsUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.organizationalUnitIds">organizationalUnitIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargets">DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountFilterType`<sup>Required</sup> <a name="accountFilterType" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accountFilterType"></a>

```java
public java.lang.String getAccountFilterType();
```

- *Type:* java.lang.String

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accounts"></a>

```java
public java.util.List<java.lang.String> getAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accountsUrl`<sup>Required</sup> <a name="accountsUrl" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accountsUrl"></a>

```java
public java.lang.String getAccountsUrl();
```

- *Type:* java.lang.String

---

##### `organizationalUnitIds`<sup>Required</sup> <a name="organizationalUnitIds" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.organizationalUnitIds"></a>

```java
public java.util.List<java.lang.String> getOrganizationalUnitIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargets getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargets">DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargets</a>

---


### DataAwsccCloudformationStackSetStackInstancesGroupList <a name="DataAwsccCloudformationStackSetStackInstancesGroupList" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_stack_set.DataAwsccCloudformationStackSetStackInstancesGroupList;

new DataAwsccCloudformationStackSetStackInstancesGroupList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.get"></a>

```java
public DataAwsccCloudformationStackSetStackInstancesGroupOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCloudformationStackSetStackInstancesGroupOutputReference <a name="DataAwsccCloudformationStackSetStackInstancesGroupOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_stack_set.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference;

new DataAwsccCloudformationStackSetStackInstancesGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.property.deploymentTargets">deploymentTargets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference">DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.property.parameterOverrides">parameterOverrides</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList">DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroup">DataAwsccCloudformationStackSetStackInstancesGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deploymentTargets`<sup>Required</sup> <a name="deploymentTargets" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.property.deploymentTargets"></a>

```java
public DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference getDeploymentTargets();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference">DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference</a>

---

##### `parameterOverrides`<sup>Required</sup> <a name="parameterOverrides" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.property.parameterOverrides"></a>

```java
public DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList getParameterOverrides();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList">DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList</a>

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudformationStackSetStackInstancesGroup getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroup">DataAwsccCloudformationStackSetStackInstancesGroup</a>

---


### DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList <a name="DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_stack_set.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList;

new DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.get"></a>

```java
public DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference <a name="DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_stack_set.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference;

new DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.parameterKey">parameterKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.parameterValue">parameterValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverrides">DataAwsccCloudformationStackSetStackInstancesGroupParameterOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameterKey`<sup>Required</sup> <a name="parameterKey" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.parameterKey"></a>

```java
public java.lang.String getParameterKey();
```

- *Type:* java.lang.String

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.parameterValue"></a>

```java
public java.lang.String getParameterValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudformationStackSetStackInstancesGroupParameterOverrides getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverrides">DataAwsccCloudformationStackSetStackInstancesGroupParameterOverrides</a>

---


### DataAwsccCloudformationStackSetTagsList <a name="DataAwsccCloudformationStackSetTagsList" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_stack_set.DataAwsccCloudformationStackSetTagsList;

new DataAwsccCloudformationStackSetTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.get"></a>

```java
public DataAwsccCloudformationStackSetTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCloudformationStackSetTagsOutputReference <a name="DataAwsccCloudformationStackSetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_stack_set.DataAwsccCloudformationStackSetTagsOutputReference;

new DataAwsccCloudformationStackSetTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTags">DataAwsccCloudformationStackSetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudformationStackSetTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTags">DataAwsccCloudformationStackSetTags</a>

---



