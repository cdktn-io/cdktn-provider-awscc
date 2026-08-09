# `dataAwsccCloudwatchLogAlarm` Submodule <a name="`dataAwsccCloudwatchLogAlarm` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudwatchLogAlarm <a name="DataAwsccCloudwatchLogAlarm" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudwatch_log_alarm awscc_cloudwatch_log_alarm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_log_alarm.DataAwsccCloudwatchLogAlarm;

DataAwsccCloudwatchLogAlarm.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudwatch_log_alarm#id DataAwsccCloudwatchLogAlarm#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudwatchLogAlarm resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_log_alarm.DataAwsccCloudwatchLogAlarm;

DataAwsccCloudwatchLogAlarm.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_log_alarm.DataAwsccCloudwatchLogAlarm;

DataAwsccCloudwatchLogAlarm.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_log_alarm.DataAwsccCloudwatchLogAlarm;

DataAwsccCloudwatchLogAlarm.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_log_alarm.DataAwsccCloudwatchLogAlarm;

DataAwsccCloudwatchLogAlarm.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccCloudwatchLogAlarm.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccCloudwatchLogAlarm resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccCloudwatchLogAlarm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccCloudwatchLogAlarm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudwatch_log_alarm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudwatchLogAlarm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.actionLogLineCount">actionLogLineCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.actionLogLineRoleArn">actionLogLineRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.actionsEnabled">actionsEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.alarmActions">alarmActions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.alarmDescription">alarmDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.alarmName">alarmName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.insufficientDataActions">insufficientDataActions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.okActions">okActions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.queryResultsToAlarm">queryResultsToAlarm</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.queryResultsToEvaluate">queryResultsToEvaluate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.scheduledQueryConfiguration">scheduledQueryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference">DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsList">DataAwsccCloudwatchLogAlarmTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.treatMissingData">treatMissingData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `actionLogLineCount`<sup>Required</sup> <a name="actionLogLineCount" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.actionLogLineCount"></a>

```java
public java.lang.Number getActionLogLineCount();
```

- *Type:* java.lang.Number

---

##### `actionLogLineRoleArn`<sup>Required</sup> <a name="actionLogLineRoleArn" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.actionLogLineRoleArn"></a>

```java
public java.lang.String getActionLogLineRoleArn();
```

- *Type:* java.lang.String

---

##### `actionsEnabled`<sup>Required</sup> <a name="actionsEnabled" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.actionsEnabled"></a>

```java
public IResolvable getActionsEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `alarmActions`<sup>Required</sup> <a name="alarmActions" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.alarmActions"></a>

```java
public java.util.List<java.lang.String> getAlarmActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `alarmDescription`<sup>Required</sup> <a name="alarmDescription" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.alarmDescription"></a>

```java
public java.lang.String getAlarmDescription();
```

- *Type:* java.lang.String

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.alarmName"></a>

```java
public java.lang.String getAlarmName();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `insufficientDataActions`<sup>Required</sup> <a name="insufficientDataActions" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.insufficientDataActions"></a>

```java
public java.util.List<java.lang.String> getInsufficientDataActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `okActions`<sup>Required</sup> <a name="okActions" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.okActions"></a>

```java
public java.util.List<java.lang.String> getOkActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryResultsToAlarm`<sup>Required</sup> <a name="queryResultsToAlarm" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.queryResultsToAlarm"></a>

```java
public java.lang.Number getQueryResultsToAlarm();
```

- *Type:* java.lang.Number

---

##### `queryResultsToEvaluate`<sup>Required</sup> <a name="queryResultsToEvaluate" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.queryResultsToEvaluate"></a>

```java
public java.lang.Number getQueryResultsToEvaluate();
```

- *Type:* java.lang.Number

---

##### `scheduledQueryConfiguration`<sup>Required</sup> <a name="scheduledQueryConfiguration" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.scheduledQueryConfiguration"></a>

```java
public DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference getScheduledQueryConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference">DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.tags"></a>

```java
public DataAwsccCloudwatchLogAlarmTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsList">DataAwsccCloudwatchLogAlarmTagsList</a>

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `treatMissingData`<sup>Required</sup> <a name="treatMissingData" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.treatMissingData"></a>

```java
public java.lang.String getTreatMissingData();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarm.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudwatchLogAlarmConfig <a name="DataAwsccCloudwatchLogAlarmConfig" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_log_alarm.DataAwsccCloudwatchLogAlarmConfig;

DataAwsccCloudwatchLogAlarmConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudwatch_log_alarm#id DataAwsccCloudwatchLogAlarm#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudwatchLogAlarmScheduledQueryConfiguration <a name="DataAwsccCloudwatchLogAlarmScheduledQueryConfiguration" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_log_alarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfiguration;

DataAwsccCloudwatchLogAlarmScheduledQueryConfiguration.builder()
    .build();
```


### DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration <a name="DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_log_alarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration;

DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.builder()
    .build();
```


### DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTags <a name="DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTags" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_log_alarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTags;

DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTags.builder()
    .build();
```


### DataAwsccCloudwatchLogAlarmTags <a name="DataAwsccCloudwatchLogAlarmTags" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_log_alarm.DataAwsccCloudwatchLogAlarmTags;

DataAwsccCloudwatchLogAlarmTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference <a name="DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_log_alarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference;

new DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.aggregationExpression">aggregationExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.logGroupIdentifiers">logGroupIdentifiers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.queryString">queryString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduleConfiguration">scheduleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference">DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduledQueryRoleArn">scheduledQueryRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList">DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfiguration">DataAwsccCloudwatchLogAlarmScheduledQueryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregationExpression`<sup>Required</sup> <a name="aggregationExpression" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.aggregationExpression"></a>

```java
public java.lang.String getAggregationExpression();
```

- *Type:* java.lang.String

---

##### `logGroupIdentifiers`<sup>Required</sup> <a name="logGroupIdentifiers" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.logGroupIdentifiers"></a>

```java
public java.util.List<java.lang.String> getLogGroupIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.queryString"></a>

```java
public java.lang.String getQueryString();
```

- *Type:* java.lang.String

---

##### `scheduleConfiguration`<sup>Required</sup> <a name="scheduleConfiguration" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduleConfiguration"></a>

```java
public DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference getScheduleConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference">DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference</a>

---

##### `scheduledQueryRoleArn`<sup>Required</sup> <a name="scheduledQueryRoleArn" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduledQueryRoleArn"></a>

```java
public java.lang.String getScheduledQueryRoleArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.tags"></a>

```java
public DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList">DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudwatchLogAlarmScheduledQueryConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfiguration">DataAwsccCloudwatchLogAlarmScheduledQueryConfiguration</a>

---


### DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference <a name="DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_log_alarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference;

new DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.endTimeOffset">endTimeOffset</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.startTimeOffset">startTimeOffset</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTimeOffset`<sup>Required</sup> <a name="endTimeOffset" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.endTimeOffset"></a>

```java
public java.lang.Number getEndTimeOffset();
```

- *Type:* java.lang.Number

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

---

##### `startTimeOffset`<sup>Required</sup> <a name="startTimeOffset" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.startTimeOffset"></a>

```java
public java.lang.Number getStartTimeOffset();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a>

---


### DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList <a name="DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_log_alarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList;

new DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList.get"></a>

```java
public DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference <a name="DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_log_alarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference;

new DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTags">DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTags">DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationTags</a>

---


### DataAwsccCloudwatchLogAlarmTagsList <a name="DataAwsccCloudwatchLogAlarmTagsList" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_log_alarm.DataAwsccCloudwatchLogAlarmTagsList;

new DataAwsccCloudwatchLogAlarmTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsList.get"></a>

```java
public DataAwsccCloudwatchLogAlarmTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCloudwatchLogAlarmTagsOutputReference <a name="DataAwsccCloudwatchLogAlarmTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_log_alarm.DataAwsccCloudwatchLogAlarmTagsOutputReference;

new DataAwsccCloudwatchLogAlarmTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTags">DataAwsccCloudwatchLogAlarmTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudwatchLogAlarmTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchLogAlarm.DataAwsccCloudwatchLogAlarmTags">DataAwsccCloudwatchLogAlarmTags</a>

---



