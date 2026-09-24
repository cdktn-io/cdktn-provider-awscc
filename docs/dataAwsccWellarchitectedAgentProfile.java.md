# `dataAwsccWellarchitectedAgentProfile` Submodule <a name="`dataAwsccWellarchitectedAgentProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWellarchitectedAgentProfile <a name="DataAwsccWellarchitectedAgentProfile" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/wellarchitected_agent_profile awscc_wellarchitected_agent_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_wellarchitected_agent_profile.DataAwsccWellarchitectedAgentProfile;

DataAwsccWellarchitectedAgentProfile.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/wellarchitected_agent_profile#id DataAwsccWellarchitectedAgentProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccWellarchitectedAgentProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_wellarchitected_agent_profile.DataAwsccWellarchitectedAgentProfile;

DataAwsccWellarchitectedAgentProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_wellarchitected_agent_profile.DataAwsccWellarchitectedAgentProfile;

DataAwsccWellarchitectedAgentProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_wellarchitected_agent_profile.DataAwsccWellarchitectedAgentProfile;

DataAwsccWellarchitectedAgentProfile.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_wellarchitected_agent_profile.DataAwsccWellarchitectedAgentProfile;

DataAwsccWellarchitectedAgentProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccWellarchitectedAgentProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccWellarchitectedAgentProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccWellarchitectedAgentProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccWellarchitectedAgentProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/wellarchitected_agent_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWellarchitectedAgentProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.aggregationConfiguration">aggregationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList">DataAwsccWellarchitectedAgentProfileAggregationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.businessOverview">businessOverview</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.deletionProtection">deletionProtection</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.lastModifiedAt">lastModifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.lastModifiedBy">lastModifiedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.pillars">pillars</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList">DataAwsccWellarchitectedAgentProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `aggregationConfiguration`<sup>Required</sup> <a name="aggregationConfiguration" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.aggregationConfiguration"></a>

```java
public DataAwsccWellarchitectedAgentProfileAggregationConfigurationList getAggregationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList">DataAwsccWellarchitectedAgentProfileAggregationConfigurationList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `businessOverview`<sup>Required</sup> <a name="businessOverview" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.businessOverview"></a>

```java
public java.lang.String getBusinessOverview();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.deletionProtection"></a>

```java
public IResolvable getDeletionProtection();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `lastModifiedAt`<sup>Required</sup> <a name="lastModifiedAt" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.lastModifiedAt"></a>

```java
public java.lang.String getLastModifiedAt();
```

- *Type:* java.lang.String

---

##### `lastModifiedBy`<sup>Required</sup> <a name="lastModifiedBy" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.lastModifiedBy"></a>

```java
public java.lang.String getLastModifiedBy();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pillars`<sup>Required</sup> <a name="pillars" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.pillars"></a>

```java
public java.util.List<java.lang.String> getPillars();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.tags"></a>

```java
public DataAwsccWellarchitectedAgentProfileTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList">DataAwsccWellarchitectedAgentProfileTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWellarchitectedAgentProfileAggregationConfiguration <a name="DataAwsccWellarchitectedAgentProfileAggregationConfiguration" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_wellarchitected_agent_profile.DataAwsccWellarchitectedAgentProfileAggregationConfiguration;

DataAwsccWellarchitectedAgentProfileAggregationConfiguration.builder()
    .build();
```


### DataAwsccWellarchitectedAgentProfileConfig <a name="DataAwsccWellarchitectedAgentProfileConfig" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_wellarchitected_agent_profile.DataAwsccWellarchitectedAgentProfileConfig;

DataAwsccWellarchitectedAgentProfileConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/wellarchitected_agent_profile#id DataAwsccWellarchitectedAgentProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWellarchitectedAgentProfileTags <a name="DataAwsccWellarchitectedAgentProfileTags" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_wellarchitected_agent_profile.DataAwsccWellarchitectedAgentProfileTags;

DataAwsccWellarchitectedAgentProfileTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWellarchitectedAgentProfileAggregationConfigurationList <a name="DataAwsccWellarchitectedAgentProfileAggregationConfigurationList" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_wellarchitected_agent_profile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList;

new DataAwsccWellarchitectedAgentProfileAggregationConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.get"></a>

```java
public DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference <a name="DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_wellarchitected_agent_profile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference;

new DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.property.accessRoleArn">accessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfiguration">DataAwsccWellarchitectedAgentProfileAggregationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessRoleArn`<sup>Required</sup> <a name="accessRoleArn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.property.accessRoleArn"></a>

```java
public java.lang.String getAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccWellarchitectedAgentProfileAggregationConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileAggregationConfiguration">DataAwsccWellarchitectedAgentProfileAggregationConfiguration</a>

---


### DataAwsccWellarchitectedAgentProfileTagsList <a name="DataAwsccWellarchitectedAgentProfileTagsList" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_wellarchitected_agent_profile.DataAwsccWellarchitectedAgentProfileTagsList;

new DataAwsccWellarchitectedAgentProfileTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.get"></a>

```java
public DataAwsccWellarchitectedAgentProfileTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccWellarchitectedAgentProfileTagsOutputReference <a name="DataAwsccWellarchitectedAgentProfileTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_wellarchitected_agent_profile.DataAwsccWellarchitectedAgentProfileTagsOutputReference;

new DataAwsccWellarchitectedAgentProfileTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTags">DataAwsccWellarchitectedAgentProfileTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccWellarchitectedAgentProfileTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentProfile.DataAwsccWellarchitectedAgentProfileTags">DataAwsccWellarchitectedAgentProfileTags</a>

---



