# `dataAwsccEcsDaemonTaskDefinition` Submodule <a name="`dataAwsccEcsDaemonTaskDefinition` Submodule" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEcsDaemonTaskDefinition <a name="DataAwsccEcsDaemonTaskDefinition" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ecs_daemon_task_definition awscc_ecs_daemon_task_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinition;

DataAwsccEcsDaemonTaskDefinition.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ecs_daemon_task_definition#id DataAwsccEcsDaemonTaskDefinition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEcsDaemonTaskDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinition;

DataAwsccEcsDaemonTaskDefinition.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinition;

DataAwsccEcsDaemonTaskDefinition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinition;

DataAwsccEcsDaemonTaskDefinition.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinition;

DataAwsccEcsDaemonTaskDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccEcsDaemonTaskDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccEcsDaemonTaskDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccEcsDaemonTaskDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccEcsDaemonTaskDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ecs_daemon_task_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEcsDaemonTaskDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.containerDefinitions">containerDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.cpu">cpu</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.daemonTaskDefinitionArn">daemonTaskDefinitionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.family">family</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.ipcMode">ipcMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.memory">memory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.pidMode">pidMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList">DataAwsccEcsDaemonTaskDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.taskRoleArn">taskRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.volumes">volumes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList">DataAwsccEcsDaemonTaskDefinitionVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `containerDefinitions`<sup>Required</sup> <a name="containerDefinitions" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.containerDefinitions"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList getContainerDefinitions();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList</a>

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.cpu"></a>

```java
public java.lang.String getCpu();
```

- *Type:* java.lang.String

---

##### `daemonTaskDefinitionArn`<sup>Required</sup> <a name="daemonTaskDefinitionArn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.daemonTaskDefinitionArn"></a>

```java
public java.lang.String getDaemonTaskDefinitionArn();
```

- *Type:* java.lang.String

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.family"></a>

```java
public java.lang.String getFamily();
```

- *Type:* java.lang.String

---

##### `ipcMode`<sup>Required</sup> <a name="ipcMode" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.ipcMode"></a>

```java
public java.lang.String getIpcMode();
```

- *Type:* java.lang.String

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

---

##### `pidMode`<sup>Required</sup> <a name="pidMode" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.pidMode"></a>

```java
public java.lang.String getPidMode();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.tags"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList">DataAwsccEcsDaemonTaskDefinitionTagsList</a>

---

##### `taskRoleArn`<sup>Required</sup> <a name="taskRoleArn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.taskRoleArn"></a>

```java
public java.lang.String getTaskRoleArn();
```

- *Type:* java.lang.String

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.volumes"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionVolumesList getVolumes();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList">DataAwsccEcsDaemonTaskDefinitionVolumesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEcsDaemonTaskDefinitionConfig <a name="DataAwsccEcsDaemonTaskDefinitionConfig" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionConfig;

DataAwsccEcsDaemonTaskDefinitionConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ecs_daemon_task_definition#id DataAwsccEcsDaemonTaskDefinition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEcsDaemonTaskDefinitionContainerDefinitions <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitions" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitions.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitions;

DataAwsccEcsDaemonTaskDefinitionContainerDefinitions.builder()
    .build();
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOn <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOn.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOn;

DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOn.builder()
    .build();
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironment <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironment" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironment.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironment;

DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironment.builder()
    .build();
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles;

DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles.builder()
    .build();
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration;

DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration.builder()
    .build();
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheck <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheck" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheck.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheck;

DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheck.builder()
    .build();
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters;

DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters.builder()
    .build();
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities;

DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities.builder()
    .build();
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices;

DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices.builder()
    .build();
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs;

DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs.builder()
    .build();
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration;

DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration.builder()
    .build();
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions;

DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions.builder()
    .build();
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPoints <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPoints" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPoints.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPoints;

DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPoints.builder()
    .build();
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials;

DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials.builder()
    .build();
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy;

DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy.builder()
    .build();
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecrets <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecrets" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecrets.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecrets;

DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecrets.builder()
    .build();
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControls <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControls" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControls.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControls;

DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControls.builder()
    .build();
```


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimits <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimits" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimits.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimits;

DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimits.builder()
    .build();
```


### DataAwsccEcsDaemonTaskDefinitionTags <a name="DataAwsccEcsDaemonTaskDefinitionTags" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionTags;

DataAwsccEcsDaemonTaskDefinitionTags.builder()
    .build();
```


### DataAwsccEcsDaemonTaskDefinitionVolumes <a name="DataAwsccEcsDaemonTaskDefinitionVolumes" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumes.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionVolumes;

DataAwsccEcsDaemonTaskDefinitionVolumes.builder()
    .build();
```


### DataAwsccEcsDaemonTaskDefinitionVolumesHost <a name="DataAwsccEcsDaemonTaskDefinitionVolumesHost" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHost.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionVolumesHost;

DataAwsccEcsDaemonTaskDefinitionVolumesHost.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList;

new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.get"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference;

new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.containerName">containerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOn">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOn getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOn">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOn</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList;

new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.get"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference;

new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList;

new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.get"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference;

new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironment">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironment getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironment">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironment</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference;

new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.options">options</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.options"></a>

```java
public StringMap getOptions();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference;

new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.retries">retries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.startPeriod">startPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheck">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

---

##### `startPeriod`<sup>Required</sup> <a name="startPeriod" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.startPeriod"></a>

```java
public java.lang.Number getStartPeriod();
```

- *Type:* java.lang.Number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheck getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheck">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheck</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference;

new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.add">add</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.drop">drop</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.add"></a>

```java
public java.util.List<java.lang.String> getAdd();
```

- *Type:* java.util.List<java.lang.String>

---

##### `drop`<sup>Required</sup> <a name="drop" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.drop"></a>

```java
public java.util.List<java.lang.String> getDrop();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList;

new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.get"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference;

new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.containerPath">containerPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.hostPath">hostPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.permissions">permissions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerPath`<sup>Required</sup> <a name="containerPath" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.containerPath"></a>

```java
public java.lang.String getContainerPath();
```

- *Type:* java.lang.String

---

##### `hostPath`<sup>Required</sup> <a name="hostPath" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.hostPath"></a>

```java
public java.lang.String getHostPath();
```

- *Type:* java.lang.String

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.permissions"></a>

```java
public java.util.List<java.lang.String> getPermissions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference;

new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.capabilities">capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.devices">devices</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.initProcessEnabled">initProcessEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.tmpfs">tmpfs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.capabilities"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference getCapabilities();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference</a>

---

##### `devices`<sup>Required</sup> <a name="devices" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.devices"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList getDevices();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList</a>

---

##### `initProcessEnabled`<sup>Required</sup> <a name="initProcessEnabled" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.initProcessEnabled"></a>

```java
public IResolvable getInitProcessEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `tmpfs`<sup>Required</sup> <a name="tmpfs" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.tmpfs"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList getTmpfs();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList;

new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.get"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference;

new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.containerPath">containerPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.mountOptions">mountOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerPath`<sup>Required</sup> <a name="containerPath" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.containerPath"></a>

```java
public java.lang.String getContainerPath();
```

- *Type:* java.lang.String

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.mountOptions"></a>

```java
public java.util.List<java.lang.String> getMountOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList;

new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.get"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference;

new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.logDriver">logDriver</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.options">options</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.secretOptions">secretOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logDriver`<sup>Required</sup> <a name="logDriver" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.logDriver"></a>

```java
public java.lang.String getLogDriver();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.options"></a>

```java
public StringMap getOptions();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `secretOptions`<sup>Required</sup> <a name="secretOptions" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.secretOptions"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList getSecretOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList;

new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.get"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference;

new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.valueFrom">valueFrom</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.valueFrom"></a>

```java
public java.lang.String getValueFrom();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList;

new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.get"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference;

new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.containerPath">containerPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.readOnly">readOnly</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.sourceVolume">sourceVolume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPoints">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerPath`<sup>Required</sup> <a name="containerPath" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.containerPath"></a>

```java
public java.lang.String getContainerPath();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.readOnly"></a>

```java
public IResolvable getReadOnly();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `sourceVolume`<sup>Required</sup> <a name="sourceVolume" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.sourceVolume"></a>

```java
public java.lang.String getSourceVolume();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPoints getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPoints">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPoints</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference;

new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.cpu">cpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.dependsOn">dependsOn</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.entryPoint">entryPoint</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.environment">environment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.environmentFiles">environmentFiles</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.essential">essential</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.firelensConfiguration">firelensConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.interactive">interactive</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.linuxParameters">linuxParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.memory">memory</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.memoryReservation">memoryReservation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.mountPoints">mountPoints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.privileged">privileged</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.pseudoTerminal">pseudoTerminal</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.readonlyRootFilesystem">readonlyRootFilesystem</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.repositoryCredentials">repositoryCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.restartPolicy">restartPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.secrets">secrets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.startTimeout">startTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.stopTimeout">stopTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.systemControls">systemControls</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.ulimits">ulimits</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.workingDirectory">workingDirectory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitions">DataAwsccEcsDaemonTaskDefinitionContainerDefinitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.cpu"></a>

```java
public java.lang.Number getCpu();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Required</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.dependsOn"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList getDependsOn();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList</a>

---

##### `entryPoint`<sup>Required</sup> <a name="entryPoint" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.entryPoint"></a>

```java
public java.util.List<java.lang.String> getEntryPoint();
```

- *Type:* java.util.List<java.lang.String>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.environment"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList getEnvironment();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList</a>

---

##### `environmentFiles`<sup>Required</sup> <a name="environmentFiles" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.environmentFiles"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList getEnvironmentFiles();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList</a>

---

##### `essential`<sup>Required</sup> <a name="essential" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.essential"></a>

```java
public IResolvable getEssential();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `firelensConfiguration`<sup>Required</sup> <a name="firelensConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.firelensConfiguration"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference getFirelensConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference</a>

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.healthCheck"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference getHealthCheck();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference</a>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `interactive`<sup>Required</sup> <a name="interactive" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.interactive"></a>

```java
public IResolvable getInteractive();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `linuxParameters`<sup>Required</sup> <a name="linuxParameters" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.linuxParameters"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference getLinuxParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference</a>

---

##### `logConfiguration`<sup>Required</sup> <a name="logConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.logConfiguration"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference getLogConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference</a>

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.memory"></a>

```java
public java.lang.Number getMemory();
```

- *Type:* java.lang.Number

---

##### `memoryReservation`<sup>Required</sup> <a name="memoryReservation" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.memoryReservation"></a>

```java
public java.lang.Number getMemoryReservation();
```

- *Type:* java.lang.Number

---

##### `mountPoints`<sup>Required</sup> <a name="mountPoints" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.mountPoints"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList getMountPoints();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `privileged`<sup>Required</sup> <a name="privileged" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.privileged"></a>

```java
public IResolvable getPrivileged();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `pseudoTerminal`<sup>Required</sup> <a name="pseudoTerminal" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.pseudoTerminal"></a>

```java
public IResolvable getPseudoTerminal();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `readonlyRootFilesystem`<sup>Required</sup> <a name="readonlyRootFilesystem" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.readonlyRootFilesystem"></a>

```java
public IResolvable getReadonlyRootFilesystem();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `repositoryCredentials`<sup>Required</sup> <a name="repositoryCredentials" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.repositoryCredentials"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference getRepositoryCredentials();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference</a>

---

##### `restartPolicy`<sup>Required</sup> <a name="restartPolicy" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.restartPolicy"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference getRestartPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference</a>

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.secrets"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList getSecrets();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList</a>

---

##### `startTimeout`<sup>Required</sup> <a name="startTimeout" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.startTimeout"></a>

```java
public java.lang.Number getStartTimeout();
```

- *Type:* java.lang.Number

---

##### `stopTimeout`<sup>Required</sup> <a name="stopTimeout" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.stopTimeout"></a>

```java
public java.lang.Number getStopTimeout();
```

- *Type:* java.lang.Number

---

##### `systemControls`<sup>Required</sup> <a name="systemControls" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.systemControls"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList getSystemControls();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList</a>

---

##### `ulimits`<sup>Required</sup> <a name="ulimits" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.ulimits"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList getUlimits();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

##### `workingDirectory`<sup>Required</sup> <a name="workingDirectory" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.workingDirectory"></a>

```java
public java.lang.String getWorkingDirectory();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitions">DataAwsccEcsDaemonTaskDefinitionContainerDefinitions</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference;

new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.property.credentialsParameter">credentialsParameter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `credentialsParameter`<sup>Required</sup> <a name="credentialsParameter" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.property.credentialsParameter"></a>

```java
public java.lang.String getCredentialsParameter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference;

new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.ignoredExitCodes">ignoredExitCodes</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.restartAttemptPeriod">restartAttemptPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `ignoredExitCodes`<sup>Required</sup> <a name="ignoredExitCodes" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.ignoredExitCodes"></a>

```java
public java.util.List<java.lang.Number> getIgnoredExitCodes();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `restartAttemptPeriod`<sup>Required</sup> <a name="restartAttemptPeriod" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.restartAttemptPeriod"></a>

```java
public java.lang.Number getRestartAttemptPeriod();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList;

new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.get"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference;

new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.property.valueFrom">valueFrom</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecrets">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecrets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.property.valueFrom"></a>

```java
public java.lang.String getValueFrom();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecrets getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecrets">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecrets</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList;

new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.get"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference;

new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControls">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControls getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControls">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControls</a>

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList;

new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.get"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference;

new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.hardLimit">hardLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.softLimit">softLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimits">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hardLimit`<sup>Required</sup> <a name="hardLimit" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.hardLimit"></a>

```java
public java.lang.Number getHardLimit();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `softLimit`<sup>Required</sup> <a name="softLimit" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.softLimit"></a>

```java
public java.lang.Number getSoftLimit();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimits getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimits">DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimits</a>

---


### DataAwsccEcsDaemonTaskDefinitionTagsList <a name="DataAwsccEcsDaemonTaskDefinitionTagsList" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionTagsList;

new DataAwsccEcsDaemonTaskDefinitionTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.get"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEcsDaemonTaskDefinitionTagsOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference;

new DataAwsccEcsDaemonTaskDefinitionTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTags">DataAwsccEcsDaemonTaskDefinitionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionTags">DataAwsccEcsDaemonTaskDefinitionTags</a>

---


### DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference;

new DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.property.sourcePath">sourcePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHost">DataAwsccEcsDaemonTaskDefinitionVolumesHost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourcePath`<sup>Required</sup> <a name="sourcePath" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.property.sourcePath"></a>

```java
public java.lang.String getSourcePath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionVolumesHost getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHost">DataAwsccEcsDaemonTaskDefinitionVolumesHost</a>

---


### DataAwsccEcsDaemonTaskDefinitionVolumesList <a name="DataAwsccEcsDaemonTaskDefinitionVolumesList" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionVolumesList;

new DataAwsccEcsDaemonTaskDefinitionVolumesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.get"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference <a name="DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_daemon_task_definition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference;

new DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.property.host">host</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference">DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumes">DataAwsccEcsDaemonTaskDefinitionVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.property.host"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference getHost();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference">DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsDaemonTaskDefinitionVolumes getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsDaemonTaskDefinition.DataAwsccEcsDaemonTaskDefinitionVolumes">DataAwsccEcsDaemonTaskDefinitionVolumes</a>

---



