# `dataAwsccCloudwatchCompositeAlarm` Submodule <a name="`dataAwsccCloudwatchCompositeAlarm` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudwatchCompositeAlarm <a name="DataAwsccCloudwatchCompositeAlarm" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudwatch_composite_alarm awscc_cloudwatch_composite_alarm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_composite_alarm.DataAwsccCloudwatchCompositeAlarm;

DataAwsccCloudwatchCompositeAlarm.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudwatch_composite_alarm#id DataAwsccCloudwatchCompositeAlarm#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudwatchCompositeAlarm resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_composite_alarm.DataAwsccCloudwatchCompositeAlarm;

DataAwsccCloudwatchCompositeAlarm.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_composite_alarm.DataAwsccCloudwatchCompositeAlarm;

DataAwsccCloudwatchCompositeAlarm.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_composite_alarm.DataAwsccCloudwatchCompositeAlarm;

DataAwsccCloudwatchCompositeAlarm.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_composite_alarm.DataAwsccCloudwatchCompositeAlarm;

DataAwsccCloudwatchCompositeAlarm.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccCloudwatchCompositeAlarm.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccCloudwatchCompositeAlarm resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccCloudwatchCompositeAlarm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccCloudwatchCompositeAlarm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudwatch_composite_alarm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudwatchCompositeAlarm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.actionsEnabled">actionsEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.actionsSuppressor">actionsSuppressor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.actionsSuppressorExtensionPeriod">actionsSuppressorExtensionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.actionsSuppressorWaitPeriod">actionsSuppressorWaitPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.alarmActions">alarmActions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.alarmDescription">alarmDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.alarmName">alarmName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.alarmRule">alarmRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.insufficientDataActions">insufficientDataActions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.okActions">okActions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsList">DataAwsccCloudwatchCompositeAlarmTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `actionsEnabled`<sup>Required</sup> <a name="actionsEnabled" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.actionsEnabled"></a>

```java
public IResolvable getActionsEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `actionsSuppressor`<sup>Required</sup> <a name="actionsSuppressor" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.actionsSuppressor"></a>

```java
public java.lang.String getActionsSuppressor();
```

- *Type:* java.lang.String

---

##### `actionsSuppressorExtensionPeriod`<sup>Required</sup> <a name="actionsSuppressorExtensionPeriod" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.actionsSuppressorExtensionPeriod"></a>

```java
public java.lang.Number getActionsSuppressorExtensionPeriod();
```

- *Type:* java.lang.Number

---

##### `actionsSuppressorWaitPeriod`<sup>Required</sup> <a name="actionsSuppressorWaitPeriod" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.actionsSuppressorWaitPeriod"></a>

```java
public java.lang.Number getActionsSuppressorWaitPeriod();
```

- *Type:* java.lang.Number

---

##### `alarmActions`<sup>Required</sup> <a name="alarmActions" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.alarmActions"></a>

```java
public java.util.List<java.lang.String> getAlarmActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `alarmDescription`<sup>Required</sup> <a name="alarmDescription" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.alarmDescription"></a>

```java
public java.lang.String getAlarmDescription();
```

- *Type:* java.lang.String

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.alarmName"></a>

```java
public java.lang.String getAlarmName();
```

- *Type:* java.lang.String

---

##### `alarmRule`<sup>Required</sup> <a name="alarmRule" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.alarmRule"></a>

```java
public java.lang.String getAlarmRule();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `insufficientDataActions`<sup>Required</sup> <a name="insufficientDataActions" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.insufficientDataActions"></a>

```java
public java.util.List<java.lang.String> getInsufficientDataActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `okActions`<sup>Required</sup> <a name="okActions" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.okActions"></a>

```java
public java.util.List<java.lang.String> getOkActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.tags"></a>

```java
public DataAwsccCloudwatchCompositeAlarmTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsList">DataAwsccCloudwatchCompositeAlarmTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarm.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudwatchCompositeAlarmConfig <a name="DataAwsccCloudwatchCompositeAlarmConfig" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_composite_alarm.DataAwsccCloudwatchCompositeAlarmConfig;

DataAwsccCloudwatchCompositeAlarmConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudwatch_composite_alarm#id DataAwsccCloudwatchCompositeAlarm#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudwatchCompositeAlarmTags <a name="DataAwsccCloudwatchCompositeAlarmTags" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_composite_alarm.DataAwsccCloudwatchCompositeAlarmTags;

DataAwsccCloudwatchCompositeAlarmTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudwatchCompositeAlarmTagsList <a name="DataAwsccCloudwatchCompositeAlarmTagsList" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_composite_alarm.DataAwsccCloudwatchCompositeAlarmTagsList;

new DataAwsccCloudwatchCompositeAlarmTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsList.get"></a>

```java
public DataAwsccCloudwatchCompositeAlarmTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCloudwatchCompositeAlarmTagsOutputReference <a name="DataAwsccCloudwatchCompositeAlarmTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_composite_alarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference;

new DataAwsccCloudwatchCompositeAlarmTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTags">DataAwsccCloudwatchCompositeAlarmTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudwatchCompositeAlarmTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchCompositeAlarm.DataAwsccCloudwatchCompositeAlarmTags">DataAwsccCloudwatchCompositeAlarmTags</a>

---



