# `dataAwsccCloudwatchAlarmMuteRule` Submodule <a name="`dataAwsccCloudwatchAlarmMuteRule` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudwatchAlarmMuteRule <a name="DataAwsccCloudwatchAlarmMuteRule" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudwatch_alarm_mute_rule awscc_cloudwatch_alarm_mute_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_alarm_mute_rule.DataAwsccCloudwatchAlarmMuteRule;

DataAwsccCloudwatchAlarmMuteRule.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudwatch_alarm_mute_rule#id DataAwsccCloudwatchAlarmMuteRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudwatchAlarmMuteRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_alarm_mute_rule.DataAwsccCloudwatchAlarmMuteRule;

DataAwsccCloudwatchAlarmMuteRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_alarm_mute_rule.DataAwsccCloudwatchAlarmMuteRule;

DataAwsccCloudwatchAlarmMuteRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_alarm_mute_rule.DataAwsccCloudwatchAlarmMuteRule;

DataAwsccCloudwatchAlarmMuteRule.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_alarm_mute_rule.DataAwsccCloudwatchAlarmMuteRule;

DataAwsccCloudwatchAlarmMuteRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccCloudwatchAlarmMuteRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccCloudwatchAlarmMuteRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccCloudwatchAlarmMuteRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccCloudwatchAlarmMuteRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudwatch_alarm_mute_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudwatchAlarmMuteRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.expireDate">expireDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.lastUpdatedTimestamp">lastUpdatedTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.muteTargets">muteTargets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference">DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.muteType">muteType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference">DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.startDate">startDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList">DataAwsccCloudwatchAlarmMuteRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expireDate`<sup>Required</sup> <a name="expireDate" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.expireDate"></a>

```java
public java.lang.String getExpireDate();
```

- *Type:* java.lang.String

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="lastUpdatedTimestamp" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.lastUpdatedTimestamp"></a>

```java
public java.lang.String getLastUpdatedTimestamp();
```

- *Type:* java.lang.String

---

##### `muteTargets`<sup>Required</sup> <a name="muteTargets" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.muteTargets"></a>

```java
public DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference getMuteTargets();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference">DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference</a>

---

##### `muteType`<sup>Required</sup> <a name="muteType" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.muteType"></a>

```java
public java.lang.String getMuteType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.rule"></a>

```java
public DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference getRule();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference">DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference</a>

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.startDate"></a>

```java
public java.lang.String getStartDate();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.tags"></a>

```java
public DataAwsccCloudwatchAlarmMuteRuleTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList">DataAwsccCloudwatchAlarmMuteRuleTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudwatchAlarmMuteRuleConfig <a name="DataAwsccCloudwatchAlarmMuteRuleConfig" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_alarm_mute_rule.DataAwsccCloudwatchAlarmMuteRuleConfig;

DataAwsccCloudwatchAlarmMuteRuleConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudwatch_alarm_mute_rule#id DataAwsccCloudwatchAlarmMuteRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudwatchAlarmMuteRuleMuteTargets <a name="DataAwsccCloudwatchAlarmMuteRuleMuteTargets" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargets.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_alarm_mute_rule.DataAwsccCloudwatchAlarmMuteRuleMuteTargets;

DataAwsccCloudwatchAlarmMuteRuleMuteTargets.builder()
    .build();
```


### DataAwsccCloudwatchAlarmMuteRuleRule <a name="DataAwsccCloudwatchAlarmMuteRuleRule" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRule.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_alarm_mute_rule.DataAwsccCloudwatchAlarmMuteRuleRule;

DataAwsccCloudwatchAlarmMuteRuleRule.builder()
    .build();
```


### DataAwsccCloudwatchAlarmMuteRuleRuleSchedule <a name="DataAwsccCloudwatchAlarmMuteRuleRuleSchedule" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleSchedule.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_alarm_mute_rule.DataAwsccCloudwatchAlarmMuteRuleRuleSchedule;

DataAwsccCloudwatchAlarmMuteRuleRuleSchedule.builder()
    .build();
```


### DataAwsccCloudwatchAlarmMuteRuleTags <a name="DataAwsccCloudwatchAlarmMuteRuleTags" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_alarm_mute_rule.DataAwsccCloudwatchAlarmMuteRuleTags;

DataAwsccCloudwatchAlarmMuteRuleTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference <a name="DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_alarm_mute_rule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference;

new DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.alarmNames">alarmNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargets">DataAwsccCloudwatchAlarmMuteRuleMuteTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alarmNames`<sup>Required</sup> <a name="alarmNames" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.alarmNames"></a>

```java
public java.util.List<java.lang.String> getAlarmNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudwatchAlarmMuteRuleMuteTargets getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargets">DataAwsccCloudwatchAlarmMuteRuleMuteTargets</a>

---


### DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference <a name="DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_alarm_mute_rule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference;

new DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference">DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRule">DataAwsccCloudwatchAlarmMuteRuleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.property.schedule"></a>

```java
public DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference">DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudwatchAlarmMuteRuleRule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRule">DataAwsccCloudwatchAlarmMuteRuleRule</a>

---


### DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference <a name="DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_alarm_mute_rule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference;

new DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleSchedule">DataAwsccCloudwatchAlarmMuteRuleRuleSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudwatchAlarmMuteRuleRuleSchedule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleSchedule">DataAwsccCloudwatchAlarmMuteRuleRuleSchedule</a>

---


### DataAwsccCloudwatchAlarmMuteRuleTagsList <a name="DataAwsccCloudwatchAlarmMuteRuleTagsList" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_alarm_mute_rule.DataAwsccCloudwatchAlarmMuteRuleTagsList;

new DataAwsccCloudwatchAlarmMuteRuleTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.get"></a>

```java
public DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference <a name="DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudwatch_alarm_mute_rule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference;

new DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTags">DataAwsccCloudwatchAlarmMuteRuleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudwatchAlarmMuteRuleTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTags">DataAwsccCloudwatchAlarmMuteRuleTags</a>

---



