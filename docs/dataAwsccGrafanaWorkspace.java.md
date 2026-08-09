# `dataAwsccGrafanaWorkspace` Submodule <a name="`dataAwsccGrafanaWorkspace` Submodule" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGrafanaWorkspace <a name="DataAwsccGrafanaWorkspace" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/grafana_workspace awscc_grafana_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_grafana_workspace.DataAwsccGrafanaWorkspace;

DataAwsccGrafanaWorkspace.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/grafana_workspace#id DataAwsccGrafanaWorkspace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGrafanaWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_grafana_workspace.DataAwsccGrafanaWorkspace;

DataAwsccGrafanaWorkspace.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_grafana_workspace.DataAwsccGrafanaWorkspace;

DataAwsccGrafanaWorkspace.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_grafana_workspace.DataAwsccGrafanaWorkspace;

DataAwsccGrafanaWorkspace.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_grafana_workspace.DataAwsccGrafanaWorkspace;

DataAwsccGrafanaWorkspace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccGrafanaWorkspace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccGrafanaWorkspace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccGrafanaWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccGrafanaWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/grafana_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGrafanaWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.accountAccessType">accountAccessType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.authenticationProviders">authenticationProviders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.clientToken">clientToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.dataSources">dataSources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.grafanaVersion">grafanaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.modificationTimestamp">modificationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.networkAccessControl">networkAccessControl</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference">DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.notificationDestinations">notificationDestinations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.organizationalUnits">organizationalUnits</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.organizationRoleName">organizationRoleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.permissionType">permissionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.pluginAdminEnabled">pluginAdminEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.samlConfiguration">samlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference">DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.samlConfigurationStatus">samlConfigurationStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.ssoClientId">ssoClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.stackSetName">stackSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList">DataAwsccGrafanaWorkspaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference">DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `accountAccessType`<sup>Required</sup> <a name="accountAccessType" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.accountAccessType"></a>

```java
public java.lang.String getAccountAccessType();
```

- *Type:* java.lang.String

---

##### `authenticationProviders`<sup>Required</sup> <a name="authenticationProviders" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.authenticationProviders"></a>

```java
public java.util.List<java.lang.String> getAuthenticationProviders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.clientToken"></a>

```java
public java.lang.String getClientToken();
```

- *Type:* java.lang.String

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `dataSources`<sup>Required</sup> <a name="dataSources" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.dataSources"></a>

```java
public java.util.List<java.lang.String> getDataSources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `grafanaVersion`<sup>Required</sup> <a name="grafanaVersion" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.grafanaVersion"></a>

```java
public java.lang.String getGrafanaVersion();
```

- *Type:* java.lang.String

---

##### `modificationTimestamp`<sup>Required</sup> <a name="modificationTimestamp" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.modificationTimestamp"></a>

```java
public java.lang.String getModificationTimestamp();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkAccessControl`<sup>Required</sup> <a name="networkAccessControl" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.networkAccessControl"></a>

```java
public DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference getNetworkAccessControl();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference">DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference</a>

---

##### `notificationDestinations`<sup>Required</sup> <a name="notificationDestinations" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.notificationDestinations"></a>

```java
public java.util.List<java.lang.String> getNotificationDestinations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organizationalUnits`<sup>Required</sup> <a name="organizationalUnits" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.organizationalUnits"></a>

```java
public java.util.List<java.lang.String> getOrganizationalUnits();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organizationRoleName`<sup>Required</sup> <a name="organizationRoleName" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.organizationRoleName"></a>

```java
public java.lang.String getOrganizationRoleName();
```

- *Type:* java.lang.String

---

##### `permissionType`<sup>Required</sup> <a name="permissionType" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.permissionType"></a>

```java
public java.lang.String getPermissionType();
```

- *Type:* java.lang.String

---

##### `pluginAdminEnabled`<sup>Required</sup> <a name="pluginAdminEnabled" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.pluginAdminEnabled"></a>

```java
public IResolvable getPluginAdminEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `samlConfiguration`<sup>Required</sup> <a name="samlConfiguration" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.samlConfiguration"></a>

```java
public DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference getSamlConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference">DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference</a>

---

##### `samlConfigurationStatus`<sup>Required</sup> <a name="samlConfigurationStatus" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.samlConfigurationStatus"></a>

```java
public java.lang.String getSamlConfigurationStatus();
```

- *Type:* java.lang.String

---

##### `ssoClientId`<sup>Required</sup> <a name="ssoClientId" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.ssoClientId"></a>

```java
public java.lang.String getSsoClientId();
```

- *Type:* java.lang.String

---

##### `stackSetName`<sup>Required</sup> <a name="stackSetName" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.stackSetName"></a>

```java
public java.lang.String getStackSetName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.tags"></a>

```java
public DataAwsccGrafanaWorkspaceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList">DataAwsccGrafanaWorkspaceTagsList</a>

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.vpcConfiguration"></a>

```java
public DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference getVpcConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference">DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference</a>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGrafanaWorkspaceConfig <a name="DataAwsccGrafanaWorkspaceConfig" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_grafana_workspace.DataAwsccGrafanaWorkspaceConfig;

DataAwsccGrafanaWorkspaceConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/grafana_workspace#id DataAwsccGrafanaWorkspace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGrafanaWorkspaceNetworkAccessControl <a name="DataAwsccGrafanaWorkspaceNetworkAccessControl" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControl.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_grafana_workspace.DataAwsccGrafanaWorkspaceNetworkAccessControl;

DataAwsccGrafanaWorkspaceNetworkAccessControl.builder()
    .build();
```


### DataAwsccGrafanaWorkspaceSamlConfiguration <a name="DataAwsccGrafanaWorkspaceSamlConfiguration" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_grafana_workspace.DataAwsccGrafanaWorkspaceSamlConfiguration;

DataAwsccGrafanaWorkspaceSamlConfiguration.builder()
    .build();
```


### DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes <a name="DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_grafana_workspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes;

DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes.builder()
    .build();
```


### DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata <a name="DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_grafana_workspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata;

DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata.builder()
    .build();
```


### DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues <a name="DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_grafana_workspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues;

DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues.builder()
    .build();
```


### DataAwsccGrafanaWorkspaceTags <a name="DataAwsccGrafanaWorkspaceTags" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_grafana_workspace.DataAwsccGrafanaWorkspaceTags;

DataAwsccGrafanaWorkspaceTags.builder()
    .build();
```


### DataAwsccGrafanaWorkspaceVpcConfiguration <a name="DataAwsccGrafanaWorkspaceVpcConfiguration" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_grafana_workspace.DataAwsccGrafanaWorkspaceVpcConfiguration;

DataAwsccGrafanaWorkspaceVpcConfiguration.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference <a name="DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_grafana_workspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference;

new DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.prefixListIds">prefixListIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.vpceIds">vpceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControl">DataAwsccGrafanaWorkspaceNetworkAccessControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `prefixListIds`<sup>Required</sup> <a name="prefixListIds" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.prefixListIds"></a>

```java
public java.util.List<java.lang.String> getPrefixListIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpceIds`<sup>Required</sup> <a name="vpceIds" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.vpceIds"></a>

```java
public java.util.List<java.lang.String> getVpceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.internalValue"></a>

```java
public DataAwsccGrafanaWorkspaceNetworkAccessControl getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControl">DataAwsccGrafanaWorkspaceNetworkAccessControl</a>

---


### DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference <a name="DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_grafana_workspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference;

new DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.groups">groups</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.login">login</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.org">org</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes">DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.groups"></a>

```java
public java.lang.String getGroups();
```

- *Type:* java.lang.String

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.login"></a>

```java
public java.lang.String getLogin();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `org`<sup>Required</sup> <a name="org" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.org"></a>

```java
public java.lang.String getOrg();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.internalValue"></a>

```java
public DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes">DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes</a>

---


### DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference <a name="DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_grafana_workspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference;

new DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.xml">xml</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata">DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `xml`<sup>Required</sup> <a name="xml" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.xml"></a>

```java
public java.lang.String getXml();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.internalValue"></a>

```java
public DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata">DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata</a>

---


### DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference <a name="DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_grafana_workspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference;

new DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.allowedOrganizations">allowedOrganizations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.assertionAttributes">assertionAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference">DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.idpMetadata">idpMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference">DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.loginValidityDuration">loginValidityDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.roleValues">roleValues</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference">DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfiguration">DataAwsccGrafanaWorkspaceSamlConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedOrganizations`<sup>Required</sup> <a name="allowedOrganizations" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.allowedOrganizations"></a>

```java
public java.util.List<java.lang.String> getAllowedOrganizations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `assertionAttributes`<sup>Required</sup> <a name="assertionAttributes" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.assertionAttributes"></a>

```java
public DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference getAssertionAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference">DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference</a>

---

##### `idpMetadata`<sup>Required</sup> <a name="idpMetadata" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.idpMetadata"></a>

```java
public DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference getIdpMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference">DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference</a>

---

##### `loginValidityDuration`<sup>Required</sup> <a name="loginValidityDuration" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.loginValidityDuration"></a>

```java
public java.lang.Number getLoginValidityDuration();
```

- *Type:* java.lang.Number

---

##### `roleValues`<sup>Required</sup> <a name="roleValues" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.roleValues"></a>

```java
public DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference getRoleValues();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference">DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccGrafanaWorkspaceSamlConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfiguration">DataAwsccGrafanaWorkspaceSamlConfiguration</a>

---


### DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference <a name="DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_grafana_workspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference;

new DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.admin">admin</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.editor">editor</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues">DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `admin`<sup>Required</sup> <a name="admin" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.admin"></a>

```java
public java.util.List<java.lang.String> getAdmin();
```

- *Type:* java.util.List<java.lang.String>

---

##### `editor`<sup>Required</sup> <a name="editor" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.editor"></a>

```java
public java.util.List<java.lang.String> getEditor();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.internalValue"></a>

```java
public DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues">DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues</a>

---


### DataAwsccGrafanaWorkspaceTagsList <a name="DataAwsccGrafanaWorkspaceTagsList" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_grafana_workspace.DataAwsccGrafanaWorkspaceTagsList;

new DataAwsccGrafanaWorkspaceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.get"></a>

```java
public DataAwsccGrafanaWorkspaceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccGrafanaWorkspaceTagsOutputReference <a name="DataAwsccGrafanaWorkspaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_grafana_workspace.DataAwsccGrafanaWorkspaceTagsOutputReference;

new DataAwsccGrafanaWorkspaceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTags">DataAwsccGrafanaWorkspaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccGrafanaWorkspaceTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTags">DataAwsccGrafanaWorkspaceTags</a>

---


### DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference <a name="DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_grafana_workspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference;

new DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfiguration">DataAwsccGrafanaWorkspaceVpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccGrafanaWorkspaceVpcConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfiguration">DataAwsccGrafanaWorkspaceVpcConfiguration</a>

---



