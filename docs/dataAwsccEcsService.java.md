# `dataAwsccEcsService` Submodule <a name="`dataAwsccEcsService` Submodule" id="@cdktn/provider-awscc.dataAwsccEcsService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEcsService <a name="DataAwsccEcsService" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ecs_service awscc_ecs_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsService;

DataAwsccEcsService.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ecs_service#id DataAwsccEcsService#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEcsService resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsService;

DataAwsccEcsService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsService;

DataAwsccEcsService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsService;

DataAwsccEcsService.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsService;

DataAwsccEcsService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccEcsService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccEcsService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccEcsService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccEcsService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ecs_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEcsService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.availabilityZoneRebalancing">availabilityZoneRebalancing</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList">DataAwsccEcsServiceCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.deploymentConfiguration">deploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference">DataAwsccEcsServiceDeploymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.deploymentController">deploymentController</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference">DataAwsccEcsServiceDeploymentControllerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.desiredCount">desiredCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.enableEcsManagedTags">enableEcsManagedTags</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.forceNewDeployment">forceNewDeployment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference">DataAwsccEcsServiceForceNewDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.healthCheckGracePeriodSeconds">healthCheckGracePeriodSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.launchType">launchType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.loadBalancers">loadBalancers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList">DataAwsccEcsServiceLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.monitoring">monitoring</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference">DataAwsccEcsServiceMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference">DataAwsccEcsServiceNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.placementConstraints">placementConstraints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList">DataAwsccEcsServicePlacementConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.placementStrategies">placementStrategies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList">DataAwsccEcsServicePlacementStrategiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.platformVersion">platformVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.propagateTags">propagateTags</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.schedulingStrategy">schedulingStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.serviceArn">serviceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.serviceConnectConfiguration">serviceConnectConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference">DataAwsccEcsServiceServiceConnectConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.serviceRegistries">serviceRegistries</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList">DataAwsccEcsServiceServiceRegistriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList">DataAwsccEcsServiceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.taskDefinition">taskDefinition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.volumeConfigurations">volumeConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList">DataAwsccEcsServiceVolumeConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.vpcLatticeConfigurations">vpcLatticeConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList">DataAwsccEcsServiceVpcLatticeConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `availabilityZoneRebalancing`<sup>Required</sup> <a name="availabilityZoneRebalancing" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.availabilityZoneRebalancing"></a>

```java
public java.lang.String getAvailabilityZoneRebalancing();
```

- *Type:* java.lang.String

---

##### `capacityProviderStrategy`<sup>Required</sup> <a name="capacityProviderStrategy" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.capacityProviderStrategy"></a>

```java
public DataAwsccEcsServiceCapacityProviderStrategyList getCapacityProviderStrategy();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList">DataAwsccEcsServiceCapacityProviderStrategyList</a>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `deploymentConfiguration`<sup>Required</sup> <a name="deploymentConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.deploymentConfiguration"></a>

```java
public DataAwsccEcsServiceDeploymentConfigurationOutputReference getDeploymentConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference">DataAwsccEcsServiceDeploymentConfigurationOutputReference</a>

---

##### `deploymentController`<sup>Required</sup> <a name="deploymentController" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.deploymentController"></a>

```java
public DataAwsccEcsServiceDeploymentControllerOutputReference getDeploymentController();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference">DataAwsccEcsServiceDeploymentControllerOutputReference</a>

---

##### `desiredCount`<sup>Required</sup> <a name="desiredCount" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.desiredCount"></a>

```java
public java.lang.Number getDesiredCount();
```

- *Type:* java.lang.Number

---

##### `enableEcsManagedTags`<sup>Required</sup> <a name="enableEcsManagedTags" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.enableEcsManagedTags"></a>

```java
public IResolvable getEnableEcsManagedTags();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `enableExecuteCommand`<sup>Required</sup> <a name="enableExecuteCommand" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.enableExecuteCommand"></a>

```java
public IResolvable getEnableExecuteCommand();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `forceNewDeployment`<sup>Required</sup> <a name="forceNewDeployment" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.forceNewDeployment"></a>

```java
public DataAwsccEcsServiceForceNewDeploymentOutputReference getForceNewDeployment();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference">DataAwsccEcsServiceForceNewDeploymentOutputReference</a>

---

##### `healthCheckGracePeriodSeconds`<sup>Required</sup> <a name="healthCheckGracePeriodSeconds" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.healthCheckGracePeriodSeconds"></a>

```java
public java.lang.Number getHealthCheckGracePeriodSeconds();
```

- *Type:* java.lang.Number

---

##### `launchType`<sup>Required</sup> <a name="launchType" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.launchType"></a>

```java
public java.lang.String getLaunchType();
```

- *Type:* java.lang.String

---

##### `loadBalancers`<sup>Required</sup> <a name="loadBalancers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.loadBalancers"></a>

```java
public DataAwsccEcsServiceLoadBalancersList getLoadBalancers();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList">DataAwsccEcsServiceLoadBalancersList</a>

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.monitoring"></a>

```java
public DataAwsccEcsServiceMonitoringOutputReference getMonitoring();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference">DataAwsccEcsServiceMonitoringOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.networkConfiguration"></a>

```java
public DataAwsccEcsServiceNetworkConfigurationOutputReference getNetworkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference">DataAwsccEcsServiceNetworkConfigurationOutputReference</a>

---

##### `placementConstraints`<sup>Required</sup> <a name="placementConstraints" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.placementConstraints"></a>

```java
public DataAwsccEcsServicePlacementConstraintsList getPlacementConstraints();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList">DataAwsccEcsServicePlacementConstraintsList</a>

---

##### `placementStrategies`<sup>Required</sup> <a name="placementStrategies" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.placementStrategies"></a>

```java
public DataAwsccEcsServicePlacementStrategiesList getPlacementStrategies();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList">DataAwsccEcsServicePlacementStrategiesList</a>

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.platformVersion"></a>

```java
public java.lang.String getPlatformVersion();
```

- *Type:* java.lang.String

---

##### `propagateTags`<sup>Required</sup> <a name="propagateTags" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.propagateTags"></a>

```java
public java.lang.String getPropagateTags();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `schedulingStrategy`<sup>Required</sup> <a name="schedulingStrategy" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.schedulingStrategy"></a>

```java
public java.lang.String getSchedulingStrategy();
```

- *Type:* java.lang.String

---

##### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.serviceArn"></a>

```java
public java.lang.String getServiceArn();
```

- *Type:* java.lang.String

---

##### `serviceConnectConfiguration`<sup>Required</sup> <a name="serviceConnectConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.serviceConnectConfiguration"></a>

```java
public DataAwsccEcsServiceServiceConnectConfigurationOutputReference getServiceConnectConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference">DataAwsccEcsServiceServiceConnectConfigurationOutputReference</a>

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `serviceRegistries`<sup>Required</sup> <a name="serviceRegistries" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.serviceRegistries"></a>

```java
public DataAwsccEcsServiceServiceRegistriesList getServiceRegistries();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList">DataAwsccEcsServiceServiceRegistriesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.tags"></a>

```java
public DataAwsccEcsServiceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList">DataAwsccEcsServiceTagsList</a>

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.taskDefinition"></a>

```java
public java.lang.String getTaskDefinition();
```

- *Type:* java.lang.String

---

##### `volumeConfigurations`<sup>Required</sup> <a name="volumeConfigurations" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.volumeConfigurations"></a>

```java
public DataAwsccEcsServiceVolumeConfigurationsList getVolumeConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList">DataAwsccEcsServiceVolumeConfigurationsList</a>

---

##### `vpcLatticeConfigurations`<sup>Required</sup> <a name="vpcLatticeConfigurations" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.vpcLatticeConfigurations"></a>

```java
public DataAwsccEcsServiceVpcLatticeConfigurationsList getVpcLatticeConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList">DataAwsccEcsServiceVpcLatticeConfigurationsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEcsServiceCapacityProviderStrategy <a name="DataAwsccEcsServiceCapacityProviderStrategy" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategy.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceCapacityProviderStrategy;

DataAwsccEcsServiceCapacityProviderStrategy.builder()
    .build();
```


### DataAwsccEcsServiceConfig <a name="DataAwsccEcsServiceConfig" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceConfig;

DataAwsccEcsServiceConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ecs_service#id DataAwsccEcsService#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEcsServiceDeploymentConfiguration <a name="DataAwsccEcsServiceDeploymentConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceDeploymentConfiguration;

DataAwsccEcsServiceDeploymentConfiguration.builder()
    .build();
```


### DataAwsccEcsServiceDeploymentConfigurationAlarms <a name="DataAwsccEcsServiceDeploymentConfigurationAlarms" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarms.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceDeploymentConfigurationAlarms;

DataAwsccEcsServiceDeploymentConfigurationAlarms.builder()
    .build();
```


### DataAwsccEcsServiceDeploymentConfigurationCanaryConfiguration <a name="DataAwsccEcsServiceDeploymentConfigurationCanaryConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceDeploymentConfigurationCanaryConfiguration;

DataAwsccEcsServiceDeploymentConfigurationCanaryConfiguration.builder()
    .build();
```


### DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreaker <a name="DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreaker" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreaker"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreaker.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreaker;

DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreaker.builder()
    .build();
```


### DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfiguration <a name="DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfiguration;

DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfiguration.builder()
    .build();
```


### DataAwsccEcsServiceDeploymentConfigurationLifecycleHooks <a name="DataAwsccEcsServiceDeploymentConfigurationLifecycleHooks" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooks.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooks;

DataAwsccEcsServiceDeploymentConfigurationLifecycleHooks.builder()
    .build();
```


### DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfiguration <a name="DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfiguration;

DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfiguration.builder()
    .build();
```


### DataAwsccEcsServiceDeploymentConfigurationLinearConfiguration <a name="DataAwsccEcsServiceDeploymentConfigurationLinearConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceDeploymentConfigurationLinearConfiguration;

DataAwsccEcsServiceDeploymentConfigurationLinearConfiguration.builder()
    .build();
```


### DataAwsccEcsServiceDeploymentController <a name="DataAwsccEcsServiceDeploymentController" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentController"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentController.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceDeploymentController;

DataAwsccEcsServiceDeploymentController.builder()
    .build();
```


### DataAwsccEcsServiceForceNewDeployment <a name="DataAwsccEcsServiceForceNewDeployment" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeployment.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceForceNewDeployment;

DataAwsccEcsServiceForceNewDeployment.builder()
    .build();
```


### DataAwsccEcsServiceLoadBalancers <a name="DataAwsccEcsServiceLoadBalancers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancers.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceLoadBalancers;

DataAwsccEcsServiceLoadBalancers.builder()
    .build();
```


### DataAwsccEcsServiceLoadBalancersAdvancedConfiguration <a name="DataAwsccEcsServiceLoadBalancersAdvancedConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceLoadBalancersAdvancedConfiguration;

DataAwsccEcsServiceLoadBalancersAdvancedConfiguration.builder()
    .build();
```


### DataAwsccEcsServiceMonitoring <a name="DataAwsccEcsServiceMonitoring" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoring.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceMonitoring;

DataAwsccEcsServiceMonitoring.builder()
    .build();
```


### DataAwsccEcsServiceMonitoringMetricConfigurations <a name="DataAwsccEcsServiceMonitoringMetricConfigurations" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceMonitoringMetricConfigurations;

DataAwsccEcsServiceMonitoringMetricConfigurations.builder()
    .build();
```


### DataAwsccEcsServiceNetworkConfiguration <a name="DataAwsccEcsServiceNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceNetworkConfiguration;

DataAwsccEcsServiceNetworkConfiguration.builder()
    .build();
```


### DataAwsccEcsServiceNetworkConfigurationAwsvpcConfiguration <a name="DataAwsccEcsServiceNetworkConfigurationAwsvpcConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfiguration;

DataAwsccEcsServiceNetworkConfigurationAwsvpcConfiguration.builder()
    .build();
```


### DataAwsccEcsServicePlacementConstraints <a name="DataAwsccEcsServicePlacementConstraints" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraints.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServicePlacementConstraints;

DataAwsccEcsServicePlacementConstraints.builder()
    .build();
```


### DataAwsccEcsServicePlacementStrategies <a name="DataAwsccEcsServicePlacementStrategies" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategies.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServicePlacementStrategies;

DataAwsccEcsServicePlacementStrategies.builder()
    .build();
```


### DataAwsccEcsServiceServiceConnectConfiguration <a name="DataAwsccEcsServiceServiceConnectConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceServiceConnectConfiguration;

DataAwsccEcsServiceServiceConnectConfiguration.builder()
    .build();
```


### DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfiguration <a name="DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfiguration;

DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfiguration.builder()
    .build();
```


### DataAwsccEcsServiceServiceConnectConfigurationLogConfiguration <a name="DataAwsccEcsServiceServiceConnectConfigurationLogConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceServiceConnectConfigurationLogConfiguration;

DataAwsccEcsServiceServiceConnectConfigurationLogConfiguration.builder()
    .build();
```


### DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptions <a name="DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptions" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptions;

DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptions.builder()
    .build();
```


### DataAwsccEcsServiceServiceConnectConfigurationServices <a name="DataAwsccEcsServiceServiceConnectConfigurationServices" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServices.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceServiceConnectConfigurationServices;

DataAwsccEcsServiceServiceConnectConfigurationServices.builder()
    .build();
```


### DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliases <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliases" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliases"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliases.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliases;

DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliases.builder()
    .build();
```


### DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRules <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRules" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRules;

DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRules.builder()
    .build();
```


### DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeader <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeader" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeader.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeader;

DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeader.builder()
    .build();
```


### DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValue <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValue.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValue;

DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValue.builder()
    .build();
```


### DataAwsccEcsServiceServiceConnectConfigurationServicesTimeout <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesTimeout" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeout.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeout;

DataAwsccEcsServiceServiceConnectConfigurationServicesTimeout.builder()
    .build();
```


### DataAwsccEcsServiceServiceConnectConfigurationServicesTls <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesTls" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTls.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceServiceConnectConfigurationServicesTls;

DataAwsccEcsServiceServiceConnectConfigurationServicesTls.builder()
    .build();
```


### DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthority <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthority" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthority.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthority;

DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthority.builder()
    .build();
```


### DataAwsccEcsServiceServiceRegistries <a name="DataAwsccEcsServiceServiceRegistries" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistries.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceServiceRegistries;

DataAwsccEcsServiceServiceRegistries.builder()
    .build();
```


### DataAwsccEcsServiceTags <a name="DataAwsccEcsServiceTags" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceTags;

DataAwsccEcsServiceTags.builder()
    .build();
```


### DataAwsccEcsServiceVolumeConfigurations <a name="DataAwsccEcsServiceVolumeConfigurations" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceVolumeConfigurations;

DataAwsccEcsServiceVolumeConfigurations.builder()
    .build();
```


### DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolume <a name="DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolume" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolume.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolume;

DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolume.builder()
    .build();
```


### DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecifications <a name="DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecifications" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecifications.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecifications;

DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecifications.builder()
    .build();
```


### DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTags <a name="DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTags" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTags;

DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTags.builder()
    .build();
```


### DataAwsccEcsServiceVpcLatticeConfigurations <a name="DataAwsccEcsServiceVpcLatticeConfigurations" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceVpcLatticeConfigurations;

DataAwsccEcsServiceVpcLatticeConfigurations.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEcsServiceCapacityProviderStrategyList <a name="DataAwsccEcsServiceCapacityProviderStrategyList" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceCapacityProviderStrategyList;

new DataAwsccEcsServiceCapacityProviderStrategyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.get"></a>

```java
public DataAwsccEcsServiceCapacityProviderStrategyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEcsServiceCapacityProviderStrategyOutputReference <a name="DataAwsccEcsServiceCapacityProviderStrategyOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceCapacityProviderStrategyOutputReference;

new DataAwsccEcsServiceCapacityProviderStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.property.base">base</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.property.capacityProvider">capacityProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategy">DataAwsccEcsServiceCapacityProviderStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.property.base"></a>

```java
public java.lang.Number getBase();
```

- *Type:* java.lang.Number

---

##### `capacityProvider`<sup>Required</sup> <a name="capacityProvider" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```java
public java.lang.String getCapacityProvider();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceCapacityProviderStrategy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategy">DataAwsccEcsServiceCapacityProviderStrategy</a>

---


### DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference <a name="DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference;

new DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.property.alarmNames">alarmNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.property.enable">enable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.property.rollback">rollback</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarms">DataAwsccEcsServiceDeploymentConfigurationAlarms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alarmNames`<sup>Required</sup> <a name="alarmNames" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.property.alarmNames"></a>

```java
public java.util.List<java.lang.String> getAlarmNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.property.enable"></a>

```java
public IResolvable getEnable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `rollback`<sup>Required</sup> <a name="rollback" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.property.rollback"></a>

```java
public IResolvable getRollback();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceDeploymentConfigurationAlarms getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarms">DataAwsccEcsServiceDeploymentConfigurationAlarms</a>

---


### DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference <a name="DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference;

new DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.canaryBakeTimeInMinutes">canaryBakeTimeInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.canaryPercent">canaryPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfiguration">DataAwsccEcsServiceDeploymentConfigurationCanaryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `canaryBakeTimeInMinutes`<sup>Required</sup> <a name="canaryBakeTimeInMinutes" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.canaryBakeTimeInMinutes"></a>

```java
public java.lang.Number getCanaryBakeTimeInMinutes();
```

- *Type:* java.lang.Number

---

##### `canaryPercent`<sup>Required</sup> <a name="canaryPercent" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.canaryPercent"></a>

```java
public java.lang.Number getCanaryPercent();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceDeploymentConfigurationCanaryConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfiguration">DataAwsccEcsServiceDeploymentConfigurationCanaryConfiguration</a>

---


### DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference <a name="DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference;

new DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.enable">enable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.resetOnHealthyTask">resetOnHealthyTask</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.rollback">rollback</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.thresholdConfiguration">thresholdConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference">DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreaker">DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreaker</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.enable"></a>

```java
public IResolvable getEnable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `resetOnHealthyTask`<sup>Required</sup> <a name="resetOnHealthyTask" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.resetOnHealthyTask"></a>

```java
public IResolvable getResetOnHealthyTask();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `rollback`<sup>Required</sup> <a name="rollback" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.rollback"></a>

```java
public IResolvable getRollback();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `thresholdConfiguration`<sup>Required</sup> <a name="thresholdConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.thresholdConfiguration"></a>

```java
public DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference getThresholdConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference">DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreaker getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreaker">DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreaker</a>

---


### DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference <a name="DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference;

new DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfiguration">DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfiguration">DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfiguration</a>

---


### DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList <a name="DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList;

new DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.get"></a>

```java
public DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference <a name="DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference;

new DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.hookDetails">hookDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.hookTargetArn">hookTargetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.lifecycleStages">lifecycleStages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.targetType">targetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.timeoutConfiguration">timeoutConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference">DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooks">DataAwsccEcsServiceDeploymentConfigurationLifecycleHooks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hookDetails`<sup>Required</sup> <a name="hookDetails" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.hookDetails"></a>

```java
public java.lang.String getHookDetails();
```

- *Type:* java.lang.String

---

##### `hookTargetArn`<sup>Required</sup> <a name="hookTargetArn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.hookTargetArn"></a>

```java
public java.lang.String getHookTargetArn();
```

- *Type:* java.lang.String

---

##### `lifecycleStages`<sup>Required</sup> <a name="lifecycleStages" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.lifecycleStages"></a>

```java
public java.util.List<java.lang.String> getLifecycleStages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.targetType"></a>

```java
public java.lang.String getTargetType();
```

- *Type:* java.lang.String

---

##### `timeoutConfiguration`<sup>Required</sup> <a name="timeoutConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.timeoutConfiguration"></a>

```java
public DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference getTimeoutConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference">DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceDeploymentConfigurationLifecycleHooks getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooks">DataAwsccEcsServiceDeploymentConfigurationLifecycleHooks</a>

---


### DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference <a name="DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference;

new DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.property.timeoutInMinutes">timeoutInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfiguration">DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `timeoutInMinutes`<sup>Required</sup> <a name="timeoutInMinutes" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.property.timeoutInMinutes"></a>

```java
public java.lang.Number getTimeoutInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfiguration">DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfiguration</a>

---


### DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference <a name="DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference;

new DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.stepBakeTimeInMinutes">stepBakeTimeInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.stepPercent">stepPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfiguration">DataAwsccEcsServiceDeploymentConfigurationLinearConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `stepBakeTimeInMinutes`<sup>Required</sup> <a name="stepBakeTimeInMinutes" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.stepBakeTimeInMinutes"></a>

```java
public java.lang.Number getStepBakeTimeInMinutes();
```

- *Type:* java.lang.Number

---

##### `stepPercent`<sup>Required</sup> <a name="stepPercent" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.stepPercent"></a>

```java
public java.lang.Number getStepPercent();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceDeploymentConfigurationLinearConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfiguration">DataAwsccEcsServiceDeploymentConfigurationLinearConfiguration</a>

---


### DataAwsccEcsServiceDeploymentConfigurationOutputReference <a name="DataAwsccEcsServiceDeploymentConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceDeploymentConfigurationOutputReference;

new DataAwsccEcsServiceDeploymentConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.alarms">alarms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference">DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.bakeTimeInMinutes">bakeTimeInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.canaryConfiguration">canaryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference">DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.deploymentCircuitBreaker">deploymentCircuitBreaker</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference">DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.lifecycleHooks">lifecycleHooks</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList">DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.linearConfiguration">linearConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference">DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.maximumPercent">maximumPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.minimumHealthyPercent">minimumHealthyPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.strategy">strategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfiguration">DataAwsccEcsServiceDeploymentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.alarms"></a>

```java
public DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference getAlarms();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference">DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference</a>

---

##### `bakeTimeInMinutes`<sup>Required</sup> <a name="bakeTimeInMinutes" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.bakeTimeInMinutes"></a>

```java
public java.lang.Number getBakeTimeInMinutes();
```

- *Type:* java.lang.Number

---

##### `canaryConfiguration`<sup>Required</sup> <a name="canaryConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.canaryConfiguration"></a>

```java
public DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference getCanaryConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference">DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference</a>

---

##### `deploymentCircuitBreaker`<sup>Required</sup> <a name="deploymentCircuitBreaker" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.deploymentCircuitBreaker"></a>

```java
public DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference getDeploymentCircuitBreaker();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference">DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference</a>

---

##### `lifecycleHooks`<sup>Required</sup> <a name="lifecycleHooks" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.lifecycleHooks"></a>

```java
public DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList getLifecycleHooks();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList">DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList</a>

---

##### `linearConfiguration`<sup>Required</sup> <a name="linearConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.linearConfiguration"></a>

```java
public DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference getLinearConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference">DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference</a>

---

##### `maximumPercent`<sup>Required</sup> <a name="maximumPercent" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.maximumPercent"></a>

```java
public java.lang.Number getMaximumPercent();
```

- *Type:* java.lang.Number

---

##### `minimumHealthyPercent`<sup>Required</sup> <a name="minimumHealthyPercent" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.minimumHealthyPercent"></a>

```java
public java.lang.Number getMinimumHealthyPercent();
```

- *Type:* java.lang.Number

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.strategy"></a>

```java
public java.lang.String getStrategy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceDeploymentConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfiguration">DataAwsccEcsServiceDeploymentConfiguration</a>

---


### DataAwsccEcsServiceDeploymentControllerOutputReference <a name="DataAwsccEcsServiceDeploymentControllerOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceDeploymentControllerOutputReference;

new DataAwsccEcsServiceDeploymentControllerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentController">DataAwsccEcsServiceDeploymentController</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceDeploymentController getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentController">DataAwsccEcsServiceDeploymentController</a>

---


### DataAwsccEcsServiceForceNewDeploymentOutputReference <a name="DataAwsccEcsServiceForceNewDeploymentOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceForceNewDeploymentOutputReference;

new DataAwsccEcsServiceForceNewDeploymentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.property.enableForceNewDeployment">enableForceNewDeployment</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.property.forceNewDeploymentNonce">forceNewDeploymentNonce</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeployment">DataAwsccEcsServiceForceNewDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableForceNewDeployment`<sup>Required</sup> <a name="enableForceNewDeployment" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.property.enableForceNewDeployment"></a>

```java
public IResolvable getEnableForceNewDeployment();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `forceNewDeploymentNonce`<sup>Required</sup> <a name="forceNewDeploymentNonce" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.property.forceNewDeploymentNonce"></a>

```java
public java.lang.String getForceNewDeploymentNonce();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceForceNewDeployment getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeployment">DataAwsccEcsServiceForceNewDeployment</a>

---


### DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference <a name="DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference;

new DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.property.alternateTargetGroupArn">alternateTargetGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.property.productionListenerRule">productionListenerRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.property.testListenerRule">testListenerRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfiguration">DataAwsccEcsServiceLoadBalancersAdvancedConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alternateTargetGroupArn`<sup>Required</sup> <a name="alternateTargetGroupArn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.property.alternateTargetGroupArn"></a>

```java
public java.lang.String getAlternateTargetGroupArn();
```

- *Type:* java.lang.String

---

##### `productionListenerRule`<sup>Required</sup> <a name="productionListenerRule" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.property.productionListenerRule"></a>

```java
public java.lang.String getProductionListenerRule();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `testListenerRule`<sup>Required</sup> <a name="testListenerRule" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.property.testListenerRule"></a>

```java
public java.lang.String getTestListenerRule();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceLoadBalancersAdvancedConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfiguration">DataAwsccEcsServiceLoadBalancersAdvancedConfiguration</a>

---


### DataAwsccEcsServiceLoadBalancersList <a name="DataAwsccEcsServiceLoadBalancersList" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceLoadBalancersList;

new DataAwsccEcsServiceLoadBalancersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.get"></a>

```java
public DataAwsccEcsServiceLoadBalancersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEcsServiceLoadBalancersOutputReference <a name="DataAwsccEcsServiceLoadBalancersOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceLoadBalancersOutputReference;

new DataAwsccEcsServiceLoadBalancersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.property.advancedConfiguration">advancedConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference">DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.property.containerName">containerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.property.loadBalancerName">loadBalancerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.property.targetGroupArn">targetGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancers">DataAwsccEcsServiceLoadBalancers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `advancedConfiguration`<sup>Required</sup> <a name="advancedConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.property.advancedConfiguration"></a>

```java
public DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference getAdvancedConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference">DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference</a>

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.property.loadBalancerName"></a>

```java
public java.lang.String getLoadBalancerName();
```

- *Type:* java.lang.String

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.property.targetGroupArn"></a>

```java
public java.lang.String getTargetGroupArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceLoadBalancers getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancers">DataAwsccEcsServiceLoadBalancers</a>

---


### DataAwsccEcsServiceMonitoringMetricConfigurationsList <a name="DataAwsccEcsServiceMonitoringMetricConfigurationsList" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceMonitoringMetricConfigurationsList;

new DataAwsccEcsServiceMonitoringMetricConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.get"></a>

```java
public DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference <a name="DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference;

new DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.property.metricNames">metricNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.property.resolutionSeconds">resolutionSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurations">DataAwsccEcsServiceMonitoringMetricConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricNames`<sup>Required</sup> <a name="metricNames" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.property.metricNames"></a>

```java
public java.util.List<java.lang.String> getMetricNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resolutionSeconds`<sup>Required</sup> <a name="resolutionSeconds" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.property.resolutionSeconds"></a>

```java
public java.lang.Number getResolutionSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceMonitoringMetricConfigurations getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurations">DataAwsccEcsServiceMonitoringMetricConfigurations</a>

---


### DataAwsccEcsServiceMonitoringOutputReference <a name="DataAwsccEcsServiceMonitoringOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceMonitoringOutputReference;

new DataAwsccEcsServiceMonitoringOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.property.metricConfigurations">metricConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList">DataAwsccEcsServiceMonitoringMetricConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoring">DataAwsccEcsServiceMonitoring</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricConfigurations`<sup>Required</sup> <a name="metricConfigurations" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.property.metricConfigurations"></a>

```java
public DataAwsccEcsServiceMonitoringMetricConfigurationsList getMetricConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList">DataAwsccEcsServiceMonitoringMetricConfigurationsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceMonitoring getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoring">DataAwsccEcsServiceMonitoring</a>

---


### DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference <a name="DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference;

new DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.property.assignPublicIp">assignPublicIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfiguration">DataAwsccEcsServiceNetworkConfigurationAwsvpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assignPublicIp`<sup>Required</sup> <a name="assignPublicIp" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.property.assignPublicIp"></a>

```java
public java.lang.String getAssignPublicIp();
```

- *Type:* java.lang.String

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceNetworkConfigurationAwsvpcConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfiguration">DataAwsccEcsServiceNetworkConfigurationAwsvpcConfiguration</a>

---


### DataAwsccEcsServiceNetworkConfigurationOutputReference <a name="DataAwsccEcsServiceNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceNetworkConfigurationOutputReference;

new DataAwsccEcsServiceNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.property.awsvpcConfiguration">awsvpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference">DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfiguration">DataAwsccEcsServiceNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsvpcConfiguration`<sup>Required</sup> <a name="awsvpcConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.property.awsvpcConfiguration"></a>

```java
public DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference getAwsvpcConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference">DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceNetworkConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfiguration">DataAwsccEcsServiceNetworkConfiguration</a>

---


### DataAwsccEcsServicePlacementConstraintsList <a name="DataAwsccEcsServicePlacementConstraintsList" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServicePlacementConstraintsList;

new DataAwsccEcsServicePlacementConstraintsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.get"></a>

```java
public DataAwsccEcsServicePlacementConstraintsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEcsServicePlacementConstraintsOutputReference <a name="DataAwsccEcsServicePlacementConstraintsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServicePlacementConstraintsOutputReference;

new DataAwsccEcsServicePlacementConstraintsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraints">DataAwsccEcsServicePlacementConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServicePlacementConstraints getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraints">DataAwsccEcsServicePlacementConstraints</a>

---


### DataAwsccEcsServicePlacementStrategiesList <a name="DataAwsccEcsServicePlacementStrategiesList" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServicePlacementStrategiesList;

new DataAwsccEcsServicePlacementStrategiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.get"></a>

```java
public DataAwsccEcsServicePlacementStrategiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEcsServicePlacementStrategiesOutputReference <a name="DataAwsccEcsServicePlacementStrategiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServicePlacementStrategiesOutputReference;

new DataAwsccEcsServicePlacementStrategiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.property.field">field</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategies">DataAwsccEcsServicePlacementStrategies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServicePlacementStrategies getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategies">DataAwsccEcsServicePlacementStrategies</a>

---


### DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference <a name="DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference;

new DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.property.includeQueryParameters">includeQueryParameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfiguration">DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `includeQueryParameters`<sup>Required</sup> <a name="includeQueryParameters" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.property.includeQueryParameters"></a>

```java
public java.lang.String getIncludeQueryParameters();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfiguration">DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfiguration</a>

---


### DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference <a name="DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference;

new DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.logDriver">logDriver</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.options">options</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.secretOptions">secretOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList">DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfiguration">DataAwsccEcsServiceServiceConnectConfigurationLogConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logDriver`<sup>Required</sup> <a name="logDriver" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.logDriver"></a>

```java
public java.lang.String getLogDriver();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.options"></a>

```java
public StringMap getOptions();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `secretOptions`<sup>Required</sup> <a name="secretOptions" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.secretOptions"></a>

```java
public DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList getSecretOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList">DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceServiceConnectConfigurationLogConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfiguration">DataAwsccEcsServiceServiceConnectConfigurationLogConfiguration</a>

---


### DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList <a name="DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList;

new DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.get"></a>

```java
public DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference <a name="DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference;

new DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.property.valueFrom">valueFrom</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptions">DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.property.valueFrom"></a>

```java
public java.lang.String getValueFrom();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptions">DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptions</a>

---


### DataAwsccEcsServiceServiceConnectConfigurationOutputReference <a name="DataAwsccEcsServiceServiceConnectConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceServiceConnectConfigurationOutputReference;

new DataAwsccEcsServiceServiceConnectConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.property.accessLogConfiguration">accessLogConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference">DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference">DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.property.services">services</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList">DataAwsccEcsServiceServiceConnectConfigurationServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfiguration">DataAwsccEcsServiceServiceConnectConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessLogConfiguration`<sup>Required</sup> <a name="accessLogConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.property.accessLogConfiguration"></a>

```java
public DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference getAccessLogConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference">DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `logConfiguration`<sup>Required</sup> <a name="logConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.property.logConfiguration"></a>

```java
public DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference getLogConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference">DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference</a>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.property.services"></a>

```java
public DataAwsccEcsServiceServiceConnectConfigurationServicesList getServices();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList">DataAwsccEcsServiceServiceConnectConfigurationServicesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceServiceConnectConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfiguration">DataAwsccEcsServiceServiceConnectConfiguration</a>

---


### DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList;

new DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.get"></a>

```java
public DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference;

new DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.property.testTrafficRules">testTrafficRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference">DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliases">DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `testTrafficRules`<sup>Required</sup> <a name="testTrafficRules" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.property.testTrafficRules"></a>

```java
public DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference getTestTrafficRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference">DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliases getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliases">DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliases</a>

---


### DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference;

new DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference">DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeader">DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.property.value"></a>

```java
public DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference getValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference">DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeader getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeader">DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeader</a>

---


### DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference;

new DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.property.exact">exact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValue">DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValue getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValue">DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValue</a>

---


### DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference;

new DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.property.header">header</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference">DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRules">DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.property.header"></a>

```java
public DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference getHeader();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference">DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRules getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRules">DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRules</a>

---


### DataAwsccEcsServiceServiceConnectConfigurationServicesList <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesList" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceServiceConnectConfigurationServicesList;

new DataAwsccEcsServiceServiceConnectConfigurationServicesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.get"></a>

```java
public DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference;

new DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.clientAliases">clientAliases</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList">DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.discoveryName">discoveryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.ingressPortOverride">ingressPortOverride</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.portName">portName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.timeout">timeout</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference">DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.tls">tls</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference">DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServices">DataAwsccEcsServiceServiceConnectConfigurationServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientAliases`<sup>Required</sup> <a name="clientAliases" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.clientAliases"></a>

```java
public DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList getClientAliases();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList">DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList</a>

---

##### `discoveryName`<sup>Required</sup> <a name="discoveryName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.discoveryName"></a>

```java
public java.lang.String getDiscoveryName();
```

- *Type:* java.lang.String

---

##### `ingressPortOverride`<sup>Required</sup> <a name="ingressPortOverride" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.ingressPortOverride"></a>

```java
public java.lang.Number getIngressPortOverride();
```

- *Type:* java.lang.Number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.timeout"></a>

```java
public DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference getTimeout();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference">DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference</a>

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.tls"></a>

```java
public DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference getTls();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference">DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceServiceConnectConfigurationServices getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServices">DataAwsccEcsServiceServiceConnectConfigurationServices</a>

---


### DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference;

new DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.property.idleTimeoutSeconds">idleTimeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.property.perRequestTimeoutSeconds">perRequestTimeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeout">DataAwsccEcsServiceServiceConnectConfigurationServicesTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idleTimeoutSeconds`<sup>Required</sup> <a name="idleTimeoutSeconds" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.property.idleTimeoutSeconds"></a>

```java
public java.lang.Number getIdleTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `perRequestTimeoutSeconds`<sup>Required</sup> <a name="perRequestTimeoutSeconds" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.property.perRequestTimeoutSeconds"></a>

```java
public java.lang.Number getPerRequestTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceServiceConnectConfigurationServicesTimeout getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeout">DataAwsccEcsServiceServiceConnectConfigurationServicesTimeout</a>

---


### DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference;

new DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.property.awsPcaAuthorityArn">awsPcaAuthorityArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthority">DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthority</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsPcaAuthorityArn`<sup>Required</sup> <a name="awsPcaAuthorityArn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.property.awsPcaAuthorityArn"></a>

```java
public java.lang.String getAwsPcaAuthorityArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthority getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthority">DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthority</a>

---


### DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference;

new DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.property.issuerCertificateAuthority">issuerCertificateAuthority</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference">DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTls">DataAwsccEcsServiceServiceConnectConfigurationServicesTls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `issuerCertificateAuthority`<sup>Required</sup> <a name="issuerCertificateAuthority" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.property.issuerCertificateAuthority"></a>

```java
public DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference getIssuerCertificateAuthority();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference">DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference</a>

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceServiceConnectConfigurationServicesTls getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTls">DataAwsccEcsServiceServiceConnectConfigurationServicesTls</a>

---


### DataAwsccEcsServiceServiceRegistriesList <a name="DataAwsccEcsServiceServiceRegistriesList" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceServiceRegistriesList;

new DataAwsccEcsServiceServiceRegistriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.get"></a>

```java
public DataAwsccEcsServiceServiceRegistriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEcsServiceServiceRegistriesOutputReference <a name="DataAwsccEcsServiceServiceRegistriesOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceServiceRegistriesOutputReference;

new DataAwsccEcsServiceServiceRegistriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.property.containerName">containerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.property.registryArn">registryArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistries">DataAwsccEcsServiceServiceRegistries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `registryArn`<sup>Required</sup> <a name="registryArn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.property.registryArn"></a>

```java
public java.lang.String getRegistryArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceServiceRegistries getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistries">DataAwsccEcsServiceServiceRegistries</a>

---


### DataAwsccEcsServiceTagsList <a name="DataAwsccEcsServiceTagsList" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceTagsList;

new DataAwsccEcsServiceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.get"></a>

```java
public DataAwsccEcsServiceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEcsServiceTagsOutputReference <a name="DataAwsccEcsServiceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceTagsOutputReference;

new DataAwsccEcsServiceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTags">DataAwsccEcsServiceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTags">DataAwsccEcsServiceTags</a>

---


### DataAwsccEcsServiceVolumeConfigurationsList <a name="DataAwsccEcsServiceVolumeConfigurationsList" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceVolumeConfigurationsList;

new DataAwsccEcsServiceVolumeConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.get"></a>

```java
public DataAwsccEcsServiceVolumeConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference <a name="DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference;

new DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.encrypted">encrypted</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.filesystemType">filesystemType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.sizeInGiB">sizeInGiB</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.tagSpecifications">tagSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList">DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.volumeInitializationRate">volumeInitializationRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolume">DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.encrypted"></a>

```java
public IResolvable getEncrypted();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `filesystemType`<sup>Required</sup> <a name="filesystemType" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.filesystemType"></a>

```java
public java.lang.String getFilesystemType();
```

- *Type:* java.lang.String

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `sizeInGiB`<sup>Required</sup> <a name="sizeInGiB" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.sizeInGiB"></a>

```java
public java.lang.Number getSizeInGiB();
```

- *Type:* java.lang.Number

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

---

##### `tagSpecifications`<sup>Required</sup> <a name="tagSpecifications" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.tagSpecifications"></a>

```java
public DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList getTagSpecifications();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList">DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList</a>

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

---

##### `volumeInitializationRate`<sup>Required</sup> <a name="volumeInitializationRate" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.volumeInitializationRate"></a>

```java
public java.lang.Number getVolumeInitializationRate();
```

- *Type:* java.lang.Number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolume getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolume">DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolume</a>

---


### DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList <a name="DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList;

new DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.get"></a>

```java
public DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference <a name="DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference;

new DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.property.propagateTags">propagateTags</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList">DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecifications">DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `propagateTags`<sup>Required</sup> <a name="propagateTags" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.property.propagateTags"></a>

```java
public java.lang.String getPropagateTags();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.property.tags"></a>

```java
public DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList">DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecifications getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecifications">DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecifications</a>

---


### DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList <a name="DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList;

new DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.get"></a>

```java
public DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference <a name="DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference;

new DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTags">DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTags">DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTags</a>

---


### DataAwsccEcsServiceVolumeConfigurationsOutputReference <a name="DataAwsccEcsServiceVolumeConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceVolumeConfigurationsOutputReference;

new DataAwsccEcsServiceVolumeConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.property.managedEbsVolume">managedEbsVolume</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference">DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurations">DataAwsccEcsServiceVolumeConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedEbsVolume`<sup>Required</sup> <a name="managedEbsVolume" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.property.managedEbsVolume"></a>

```java
public DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference getManagedEbsVolume();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference">DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceVolumeConfigurations getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurations">DataAwsccEcsServiceVolumeConfigurations</a>

---


### DataAwsccEcsServiceVpcLatticeConfigurationsList <a name="DataAwsccEcsServiceVpcLatticeConfigurationsList" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceVpcLatticeConfigurationsList;

new DataAwsccEcsServiceVpcLatticeConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.get"></a>

```java
public DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference <a name="DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_service.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference;

new DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.property.portName">portName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.property.targetGroupArn">targetGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurations">DataAwsccEcsServiceVpcLatticeConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.property.targetGroupArn"></a>

```java
public java.lang.String getTargetGroupArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsServiceVpcLatticeConfigurations getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurations">DataAwsccEcsServiceVpcLatticeConfigurations</a>

---



