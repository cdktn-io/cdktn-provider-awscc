# `dataAwsccBedrockEnforcedGuardrailConfiguration` Submodule <a name="`dataAwsccBedrockEnforcedGuardrailConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockEnforcedGuardrailConfiguration <a name="DataAwsccBedrockEnforcedGuardrailConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrock_enforced_guardrail_configuration awscc_bedrock_enforced_guardrail_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_bedrock_enforced_guardrail_configuration.DataAwsccBedrockEnforcedGuardrailConfiguration;

DataAwsccBedrockEnforcedGuardrailConfiguration.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrock_enforced_guardrail_configuration#id DataAwsccBedrockEnforcedGuardrailConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockEnforcedGuardrailConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_bedrock_enforced_guardrail_configuration.DataAwsccBedrockEnforcedGuardrailConfiguration;

DataAwsccBedrockEnforcedGuardrailConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_bedrock_enforced_guardrail_configuration.DataAwsccBedrockEnforcedGuardrailConfiguration;

DataAwsccBedrockEnforcedGuardrailConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_bedrock_enforced_guardrail_configuration.DataAwsccBedrockEnforcedGuardrailConfiguration;

DataAwsccBedrockEnforcedGuardrailConfiguration.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_bedrock_enforced_guardrail_configuration.DataAwsccBedrockEnforcedGuardrailConfiguration;

DataAwsccBedrockEnforcedGuardrailConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccBedrockEnforcedGuardrailConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccBedrockEnforcedGuardrailConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccBedrockEnforcedGuardrailConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccBedrockEnforcedGuardrailConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrock_enforced_guardrail_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockEnforcedGuardrailConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.configId">configId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.guardrailArn">guardrailArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.guardrailId">guardrailId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.guardrailIdentifier">guardrailIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.guardrailVersion">guardrailVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.modelEnforcement">modelEnforcement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference">DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.selectiveContentGuarding">selectiveContentGuarding</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference">DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.configId"></a>

```java
public java.lang.String getConfigId();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `guardrailArn`<sup>Required</sup> <a name="guardrailArn" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.guardrailArn"></a>

```java
public java.lang.String getGuardrailArn();
```

- *Type:* java.lang.String

---

##### `guardrailId`<sup>Required</sup> <a name="guardrailId" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.guardrailId"></a>

```java
public java.lang.String getGuardrailId();
```

- *Type:* java.lang.String

---

##### `guardrailIdentifier`<sup>Required</sup> <a name="guardrailIdentifier" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.guardrailIdentifier"></a>

```java
public java.lang.String getGuardrailIdentifier();
```

- *Type:* java.lang.String

---

##### `guardrailVersion`<sup>Required</sup> <a name="guardrailVersion" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.guardrailVersion"></a>

```java
public java.lang.String getGuardrailVersion();
```

- *Type:* java.lang.String

---

##### `modelEnforcement`<sup>Required</sup> <a name="modelEnforcement" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.modelEnforcement"></a>

```java
public DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference getModelEnforcement();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference">DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference</a>

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `selectiveContentGuarding`<sup>Required</sup> <a name="selectiveContentGuarding" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.selectiveContentGuarding"></a>

```java
public DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference getSelectiveContentGuarding();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference">DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockEnforcedGuardrailConfigurationConfig <a name="DataAwsccBedrockEnforcedGuardrailConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_bedrock_enforced_guardrail_configuration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig;

DataAwsccBedrockEnforcedGuardrailConfigurationConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrock_enforced_guardrail_configuration#id DataAwsccBedrockEnforcedGuardrailConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement <a name="DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_bedrock_enforced_guardrail_configuration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement;

DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement.builder()
    .build();
```


### DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding <a name="DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_bedrock_enforced_guardrail_configuration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding;

DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference <a name="DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_bedrock_enforced_guardrail_configuration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference;

new DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.excludedModels">excludedModels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.includedModels">includedModels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement">DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludedModels`<sup>Required</sup> <a name="excludedModels" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.excludedModels"></a>

```java
public java.util.List<java.lang.String> getExcludedModels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includedModels`<sup>Required</sup> <a name="includedModels" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.includedModels"></a>

```java
public java.util.List<java.lang.String> getIncludedModels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.internalValue"></a>

```java
public DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement">DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement</a>

---


### DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference <a name="DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_bedrock_enforced_guardrail_configuration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference;

new DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.messages">messages</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.systemAttribute">systemAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `messages`<sup>Required</sup> <a name="messages" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.messages"></a>

```java
public java.lang.String getMessages();
```

- *Type:* java.lang.String

---

##### `systemAttribute`<sup>Required</sup> <a name="systemAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.systemAttribute"></a>

```java
public java.lang.String getSystemAttribute();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.internalValue"></a>

```java
public DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>

---



