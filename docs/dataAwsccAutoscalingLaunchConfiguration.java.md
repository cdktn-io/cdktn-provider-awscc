# `dataAwsccAutoscalingLaunchConfiguration` Submodule <a name="`dataAwsccAutoscalingLaunchConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAutoscalingLaunchConfiguration <a name="DataAwsccAutoscalingLaunchConfiguration" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/autoscaling_launch_configuration awscc_autoscaling_launch_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_autoscaling_launch_configuration.DataAwsccAutoscalingLaunchConfiguration;

DataAwsccAutoscalingLaunchConfiguration.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/autoscaling_launch_configuration#id DataAwsccAutoscalingLaunchConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAutoscalingLaunchConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_autoscaling_launch_configuration.DataAwsccAutoscalingLaunchConfiguration;

DataAwsccAutoscalingLaunchConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_autoscaling_launch_configuration.DataAwsccAutoscalingLaunchConfiguration;

DataAwsccAutoscalingLaunchConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_autoscaling_launch_configuration.DataAwsccAutoscalingLaunchConfiguration;

DataAwsccAutoscalingLaunchConfiguration.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_autoscaling_launch_configuration.DataAwsccAutoscalingLaunchConfiguration;

DataAwsccAutoscalingLaunchConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccAutoscalingLaunchConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccAutoscalingLaunchConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccAutoscalingLaunchConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccAutoscalingLaunchConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/autoscaling_launch_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAutoscalingLaunchConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList">DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.classicLinkVpcId">classicLinkVpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.classicLinkVpcSecurityGroups">classicLinkVpcSecurityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.ebsOptimized">ebsOptimized</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.imageId">imageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.instanceMonitoring">instanceMonitoring</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.kernelId">kernelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.launchConfigurationName">launchConfigurationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference">DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.placementTenancy">placementTenancy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.ramDiskId">ramDiskId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.spotPrice">spotPrice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.userData">userData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `associatePublicIpAddress`<sup>Required</sup> <a name="associatePublicIpAddress" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.associatePublicIpAddress"></a>

```java
public IResolvable getAssociatePublicIpAddress();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `blockDeviceMappings`<sup>Required</sup> <a name="blockDeviceMappings" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.blockDeviceMappings"></a>

```java
public DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList getBlockDeviceMappings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList">DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList</a>

---

##### `classicLinkVpcId`<sup>Required</sup> <a name="classicLinkVpcId" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.classicLinkVpcId"></a>

```java
public java.lang.String getClassicLinkVpcId();
```

- *Type:* java.lang.String

---

##### `classicLinkVpcSecurityGroups`<sup>Required</sup> <a name="classicLinkVpcSecurityGroups" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.classicLinkVpcSecurityGroups"></a>

```java
public java.util.List<java.lang.String> getClassicLinkVpcSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ebsOptimized`<sup>Required</sup> <a name="ebsOptimized" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.ebsOptimized"></a>

```java
public IResolvable getEbsOptimized();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `iamInstanceProfile`<sup>Required</sup> <a name="iamInstanceProfile" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.iamInstanceProfile"></a>

```java
public java.lang.String getIamInstanceProfile();
```

- *Type:* java.lang.String

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `instanceMonitoring`<sup>Required</sup> <a name="instanceMonitoring" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.instanceMonitoring"></a>

```java
public IResolvable getInstanceMonitoring();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `kernelId`<sup>Required</sup> <a name="kernelId" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.kernelId"></a>

```java
public java.lang.String getKernelId();
```

- *Type:* java.lang.String

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `launchConfigurationName`<sup>Required</sup> <a name="launchConfigurationName" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.launchConfigurationName"></a>

```java
public java.lang.String getLaunchConfigurationName();
```

- *Type:* java.lang.String

---

##### `metadataOptions`<sup>Required</sup> <a name="metadataOptions" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.metadataOptions"></a>

```java
public DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference getMetadataOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference">DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference</a>

---

##### `placementTenancy`<sup>Required</sup> <a name="placementTenancy" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.placementTenancy"></a>

```java
public java.lang.String getPlacementTenancy();
```

- *Type:* java.lang.String

---

##### `ramDiskId`<sup>Required</sup> <a name="ramDiskId" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.ramDiskId"></a>

```java
public java.lang.String getRamDiskId();
```

- *Type:* java.lang.String

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `spotPrice`<sup>Required</sup> <a name="spotPrice" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.spotPrice"></a>

```java
public java.lang.String getSpotPrice();
```

- *Type:* java.lang.String

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappings <a name="DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappings" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_autoscaling_launch_configuration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappings;

DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappings.builder()
    .build();
```


### DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbs <a name="DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbs" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbs.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_autoscaling_launch_configuration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbs;

DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbs.builder()
    .build();
```


### DataAwsccAutoscalingLaunchConfigurationConfig <a name="DataAwsccAutoscalingLaunchConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_autoscaling_launch_configuration.DataAwsccAutoscalingLaunchConfigurationConfig;

DataAwsccAutoscalingLaunchConfigurationConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/autoscaling_launch_configuration#id DataAwsccAutoscalingLaunchConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAutoscalingLaunchConfigurationMetadataOptions <a name="DataAwsccAutoscalingLaunchConfigurationMetadataOptions" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_autoscaling_launch_configuration.DataAwsccAutoscalingLaunchConfigurationMetadataOptions;

DataAwsccAutoscalingLaunchConfigurationMetadataOptions.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference <a name="DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_autoscaling_launch_configuration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference;

new DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.encrypted">encrypted</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbs">DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```java
public IResolvable getDeleteOnTermination();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```java
public IResolvable getEncrypted();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```java
public DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbs">DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbs</a>

---


### DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList <a name="DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_autoscaling_launch_configuration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList;

new DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.get"></a>

```java
public DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference <a name="DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_autoscaling_launch_configuration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference;

new DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference">DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.noDevice">noDevice</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.virtualName">virtualName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappings">DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.ebs"></a>

```java
public DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference getEbs();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference">DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference</a>

---

##### `noDevice`<sup>Required</sup> <a name="noDevice" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.noDevice"></a>

```java
public IResolvable getNoDevice();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.virtualName"></a>

```java
public java.lang.String getVirtualName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.internalValue"></a>

```java
public DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappings">DataAwsccAutoscalingLaunchConfigurationBlockDeviceMappings</a>

---


### DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference <a name="DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_autoscaling_launch_configuration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference;

new DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpEndpoint">httpEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpTokens">httpTokens</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptions">DataAwsccAutoscalingLaunchConfigurationMetadataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpEndpoint`<sup>Required</sup> <a name="httpEndpoint" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpEndpoint"></a>

```java
public java.lang.String getHttpEndpoint();
```

- *Type:* java.lang.String

---

##### `httpPutResponseHopLimit`<sup>Required</sup> <a name="httpPutResponseHopLimit" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```java
public java.lang.Number getHttpPutResponseHopLimit();
```

- *Type:* java.lang.Number

---

##### `httpTokens`<sup>Required</sup> <a name="httpTokens" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpTokens"></a>

```java
public java.lang.String getHttpTokens();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.internalValue"></a>

```java
public DataAwsccAutoscalingLaunchConfigurationMetadataOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingLaunchConfiguration.DataAwsccAutoscalingLaunchConfigurationMetadataOptions">DataAwsccAutoscalingLaunchConfigurationMetadataOptions</a>

---



