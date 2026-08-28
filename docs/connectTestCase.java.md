# `connectTestCase` Submodule <a name="`connectTestCase` Submodule" id="@cdktn/provider-awscc.connectTestCase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectTestCase <a name="ConnectTestCase" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case awscc_connect_test_case}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_test_case.ConnectTestCase;

ConnectTestCase.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .content(java.lang.String)
    .instanceArn(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .entryPoint(ConnectTestCaseEntryPoint)
//  .initializationData(java.lang.String)
//  .status(java.lang.String)
//  .tags(IResolvable|java.util.List<ConnectTestCaseTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.content">content</a></code> | <code>java.lang.String</code> | The content of the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.entryPoint">entryPoint</a></code> | <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint">ConnectTestCaseEntryPoint</a></code> | Entry point for Testcase. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.initializationData">initializationData</a></code> | <code>java.lang.String</code> | The initialization data of the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | The status of the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>></code> | One or more tags. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.content"></a>

- *Type:* java.lang.String

The content of the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#content ConnectTestCase#content}

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.instanceArn"></a>

- *Type:* java.lang.String

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#instance_arn ConnectTestCase#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#name ConnectTestCase#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#description ConnectTestCase#description}

---

##### `entryPoint`<sup>Optional</sup> <a name="entryPoint" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.entryPoint"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint">ConnectTestCaseEntryPoint</a>

Entry point for Testcase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#entry_point ConnectTestCase#entry_point}

---

##### `initializationData`<sup>Optional</sup> <a name="initializationData" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.initializationData"></a>

- *Type:* java.lang.String

The initialization data of the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#initialization_data ConnectTestCase#initialization_data}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.status"></a>

- *Type:* java.lang.String

The status of the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#status ConnectTestCase#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>>

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#tags ConnectTestCase#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.putEntryPoint">putEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetEntryPoint">resetEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetInitializationData">resetInitializationData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEntryPoint` <a name="putEntryPoint" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.putEntryPoint"></a>

```java
public void putEntryPoint(ConnectTestCaseEntryPoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.putEntryPoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint">ConnectTestCaseEntryPoint</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ConnectTestCaseTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEntryPoint` <a name="resetEntryPoint" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetEntryPoint"></a>

```java
public void resetEntryPoint()
```

##### `resetInitializationData` <a name="resetInitializationData" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetInitializationData"></a>

```java
public void resetInitializationData()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectTestCase resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isConstruct"></a>

```java
import io.cdktn.providers.awscc.connect_test_case.ConnectTestCase;

ConnectTestCase.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.connect_test_case.ConnectTestCase;

ConnectTestCase.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.connect_test_case.ConnectTestCase;

ConnectTestCase.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.connect_test_case.ConnectTestCase;

ConnectTestCase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConnectTestCase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ConnectTestCase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConnectTestCase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConnectTestCase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ConnectTestCase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.entryPoint">entryPoint</a></code> | <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference">ConnectTestCaseEntryPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.lastModifiedRegion">lastModifiedRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList">ConnectTestCaseTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.testCaseArn">testCaseArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.entryPointInput">entryPointInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint">ConnectTestCaseEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.initializationDataInput">initializationDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.instanceArnInput">instanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.initializationData">initializationData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `entryPoint`<sup>Required</sup> <a name="entryPoint" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.entryPoint"></a>

```java
public ConnectTestCaseEntryPointOutputReference getEntryPoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference">ConnectTestCaseEntryPointOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModifiedRegion`<sup>Required</sup> <a name="lastModifiedRegion" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.lastModifiedRegion"></a>

```java
public java.lang.String getLastModifiedRegion();
```

- *Type:* java.lang.String

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.lastModifiedTime"></a>

```java
public java.lang.Number getLastModifiedTime();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.tags"></a>

```java
public ConnectTestCaseTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList">ConnectTestCaseTagsList</a>

---

##### `testCaseArn`<sup>Required</sup> <a name="testCaseArn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.testCaseArn"></a>

```java
public java.lang.String getTestCaseArn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `entryPointInput`<sup>Optional</sup> <a name="entryPointInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.entryPointInput"></a>

```java
public IResolvable|ConnectTestCaseEntryPoint getEntryPointInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint">ConnectTestCaseEntryPoint</a>

---

##### `initializationDataInput`<sup>Optional</sup> <a name="initializationDataInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.initializationDataInput"></a>

```java
public java.lang.String getInitializationDataInput();
```

- *Type:* java.lang.String

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.instanceArnInput"></a>

```java
public java.lang.String getInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ConnectTestCaseTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `initializationData`<sup>Required</sup> <a name="initializationData" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.initializationData"></a>

```java
public java.lang.String getInitializationData();
```

- *Type:* java.lang.String

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectTestCaseConfig <a name="ConnectTestCaseConfig" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_test_case.ConnectTestCaseConfig;

ConnectTestCaseConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .content(java.lang.String)
    .instanceArn(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .entryPoint(ConnectTestCaseEntryPoint)
//  .initializationData(java.lang.String)
//  .status(java.lang.String)
//  .tags(IResolvable|java.util.List<ConnectTestCaseTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.content">content</a></code> | <code>java.lang.String</code> | The content of the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.entryPoint">entryPoint</a></code> | <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint">ConnectTestCaseEntryPoint</a></code> | Entry point for Testcase. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.initializationData">initializationData</a></code> | <code>java.lang.String</code> | The initialization data of the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.status">status</a></code> | <code>java.lang.String</code> | The status of the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>></code> | One or more tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

The content of the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#content ConnectTestCase#content}

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#instance_arn ConnectTestCase#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#name ConnectTestCase#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#description ConnectTestCase#description}

---

##### `entryPoint`<sup>Optional</sup> <a name="entryPoint" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.entryPoint"></a>

```java
public ConnectTestCaseEntryPoint getEntryPoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint">ConnectTestCaseEntryPoint</a>

Entry point for Testcase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#entry_point ConnectTestCase#entry_point}

---

##### `initializationData`<sup>Optional</sup> <a name="initializationData" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.initializationData"></a>

```java
public java.lang.String getInitializationData();
```

- *Type:* java.lang.String

The initialization data of the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#initialization_data ConnectTestCase#initialization_data}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

The status of the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#status ConnectTestCase#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ConnectTestCaseTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>>

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#tags ConnectTestCase#tags}

---

### ConnectTestCaseEntryPoint <a name="ConnectTestCaseEntryPoint" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_test_case.ConnectTestCaseEntryPoint;

ConnectTestCaseEntryPoint.builder()
//  .chatEntryPointParameters(ConnectTestCaseEntryPointChatEntryPointParameters)
//  .type(java.lang.String)
//  .voiceCallEntryPointParameters(ConnectTestCaseEntryPointVoiceCallEntryPointParameters)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint.property.chatEntryPointParameters">chatEntryPointParameters</a></code> | <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters">ConnectTestCaseEntryPointChatEntryPointParameters</a></code> | The chat entry point parameters for the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint.property.type">type</a></code> | <code>java.lang.String</code> | The type of the Entry Point. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint.property.voiceCallEntryPointParameters">voiceCallEntryPointParameters</a></code> | <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters">ConnectTestCaseEntryPointVoiceCallEntryPointParameters</a></code> | The voice call entry point parameters for the test case. |

---

##### `chatEntryPointParameters`<sup>Optional</sup> <a name="chatEntryPointParameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint.property.chatEntryPointParameters"></a>

```java
public ConnectTestCaseEntryPointChatEntryPointParameters getChatEntryPointParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters">ConnectTestCaseEntryPointChatEntryPointParameters</a>

The chat entry point parameters for the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#chat_entry_point_parameters ConnectTestCase#chat_entry_point_parameters}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the Entry Point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#type ConnectTestCase#type}

---

##### `voiceCallEntryPointParameters`<sup>Optional</sup> <a name="voiceCallEntryPointParameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint.property.voiceCallEntryPointParameters"></a>

```java
public ConnectTestCaseEntryPointVoiceCallEntryPointParameters getVoiceCallEntryPointParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters">ConnectTestCaseEntryPointVoiceCallEntryPointParameters</a>

The voice call entry point parameters for the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#voice_call_entry_point_parameters ConnectTestCase#voice_call_entry_point_parameters}

---

### ConnectTestCaseEntryPointChatEntryPointParameters <a name="ConnectTestCaseEntryPointChatEntryPointParameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_test_case.ConnectTestCaseEntryPointChatEntryPointParameters;

ConnectTestCaseEntryPointChatEntryPointParameters.builder()
//  .flowId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters.property.flowId">flowId</a></code> | <code>java.lang.String</code> | The flow id used for the TestCase. |

---

##### `flowId`<sup>Optional</sup> <a name="flowId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters.property.flowId"></a>

```java
public java.lang.String getFlowId();
```

- *Type:* java.lang.String

The flow id used for the TestCase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#flow_id ConnectTestCase#flow_id}

---

### ConnectTestCaseEntryPointVoiceCallEntryPointParameters <a name="ConnectTestCaseEntryPointVoiceCallEntryPointParameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_test_case.ConnectTestCaseEntryPointVoiceCallEntryPointParameters;

ConnectTestCaseEntryPointVoiceCallEntryPointParameters.builder()
//  .destinationPhoneNumber(java.lang.String)
//  .flowId(java.lang.String)
//  .sourcePhoneNumber(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters.property.destinationPhoneNumber">destinationPhoneNumber</a></code> | <code>java.lang.String</code> | The destination phonenumber of the EntryPoint. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters.property.flowId">flowId</a></code> | <code>java.lang.String</code> | The flow id used for the TestCase. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters.property.sourcePhoneNumber">sourcePhoneNumber</a></code> | <code>java.lang.String</code> | The source phonenumber of the EntryPoint. |

---

##### `destinationPhoneNumber`<sup>Optional</sup> <a name="destinationPhoneNumber" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters.property.destinationPhoneNumber"></a>

```java
public java.lang.String getDestinationPhoneNumber();
```

- *Type:* java.lang.String

The destination phonenumber of the EntryPoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#destination_phone_number ConnectTestCase#destination_phone_number}

---

##### `flowId`<sup>Optional</sup> <a name="flowId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters.property.flowId"></a>

```java
public java.lang.String getFlowId();
```

- *Type:* java.lang.String

The flow id used for the TestCase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#flow_id ConnectTestCase#flow_id}

---

##### `sourcePhoneNumber`<sup>Optional</sup> <a name="sourcePhoneNumber" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters.property.sourcePhoneNumber"></a>

```java
public java.lang.String getSourcePhoneNumber();
```

- *Type:* java.lang.String

The source phonenumber of the EntryPoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#source_phone_number ConnectTestCase#source_phone_number}

---

### ConnectTestCaseTags <a name="ConnectTestCaseTags" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_test_case.ConnectTestCaseTags;

ConnectTestCaseTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#key ConnectTestCase#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#value ConnectTestCase#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectTestCaseEntryPointChatEntryPointParametersOutputReference <a name="ConnectTestCaseEntryPointChatEntryPointParametersOutputReference" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_test_case.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference;

new ConnectTestCaseEntryPointChatEntryPointParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.resetFlowId">resetFlowId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFlowId` <a name="resetFlowId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.resetFlowId"></a>

```java
public void resetFlowId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.flowIdInput">flowIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.flowId">flowId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters">ConnectTestCaseEntryPointChatEntryPointParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `flowIdInput`<sup>Optional</sup> <a name="flowIdInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.flowIdInput"></a>

```java
public java.lang.String getFlowIdInput();
```

- *Type:* java.lang.String

---

##### `flowId`<sup>Required</sup> <a name="flowId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.flowId"></a>

```java
public java.lang.String getFlowId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectTestCaseEntryPointChatEntryPointParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters">ConnectTestCaseEntryPointChatEntryPointParameters</a>

---


### ConnectTestCaseEntryPointOutputReference <a name="ConnectTestCaseEntryPointOutputReference" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_test_case.ConnectTestCaseEntryPointOutputReference;

new ConnectTestCaseEntryPointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.putChatEntryPointParameters">putChatEntryPointParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.putVoiceCallEntryPointParameters">putVoiceCallEntryPointParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resetChatEntryPointParameters">resetChatEntryPointParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resetVoiceCallEntryPointParameters">resetVoiceCallEntryPointParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putChatEntryPointParameters` <a name="putChatEntryPointParameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.putChatEntryPointParameters"></a>

```java
public void putChatEntryPointParameters(ConnectTestCaseEntryPointChatEntryPointParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.putChatEntryPointParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters">ConnectTestCaseEntryPointChatEntryPointParameters</a>

---

##### `putVoiceCallEntryPointParameters` <a name="putVoiceCallEntryPointParameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.putVoiceCallEntryPointParameters"></a>

```java
public void putVoiceCallEntryPointParameters(ConnectTestCaseEntryPointVoiceCallEntryPointParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.putVoiceCallEntryPointParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters">ConnectTestCaseEntryPointVoiceCallEntryPointParameters</a>

---

##### `resetChatEntryPointParameters` <a name="resetChatEntryPointParameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resetChatEntryPointParameters"></a>

```java
public void resetChatEntryPointParameters()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetVoiceCallEntryPointParameters` <a name="resetVoiceCallEntryPointParameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resetVoiceCallEntryPointParameters"></a>

```java
public void resetVoiceCallEntryPointParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.chatEntryPointParameters">chatEntryPointParameters</a></code> | <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference">ConnectTestCaseEntryPointChatEntryPointParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.voiceCallEntryPointParameters">voiceCallEntryPointParameters</a></code> | <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference">ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.chatEntryPointParametersInput">chatEntryPointParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters">ConnectTestCaseEntryPointChatEntryPointParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.voiceCallEntryPointParametersInput">voiceCallEntryPointParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters">ConnectTestCaseEntryPointVoiceCallEntryPointParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint">ConnectTestCaseEntryPoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `chatEntryPointParameters`<sup>Required</sup> <a name="chatEntryPointParameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.chatEntryPointParameters"></a>

```java
public ConnectTestCaseEntryPointChatEntryPointParametersOutputReference getChatEntryPointParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference">ConnectTestCaseEntryPointChatEntryPointParametersOutputReference</a>

---

##### `voiceCallEntryPointParameters`<sup>Required</sup> <a name="voiceCallEntryPointParameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.voiceCallEntryPointParameters"></a>

```java
public ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference getVoiceCallEntryPointParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference">ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference</a>

---

##### `chatEntryPointParametersInput`<sup>Optional</sup> <a name="chatEntryPointParametersInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.chatEntryPointParametersInput"></a>

```java
public IResolvable|ConnectTestCaseEntryPointChatEntryPointParameters getChatEntryPointParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters">ConnectTestCaseEntryPointChatEntryPointParameters</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `voiceCallEntryPointParametersInput`<sup>Optional</sup> <a name="voiceCallEntryPointParametersInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.voiceCallEntryPointParametersInput"></a>

```java
public IResolvable|ConnectTestCaseEntryPointVoiceCallEntryPointParameters getVoiceCallEntryPointParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters">ConnectTestCaseEntryPointVoiceCallEntryPointParameters</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectTestCaseEntryPoint getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint">ConnectTestCaseEntryPoint</a>

---


### ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference <a name="ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_test_case.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference;

new ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resetDestinationPhoneNumber">resetDestinationPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resetFlowId">resetFlowId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resetSourcePhoneNumber">resetSourcePhoneNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationPhoneNumber` <a name="resetDestinationPhoneNumber" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resetDestinationPhoneNumber"></a>

```java
public void resetDestinationPhoneNumber()
```

##### `resetFlowId` <a name="resetFlowId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resetFlowId"></a>

```java
public void resetFlowId()
```

##### `resetSourcePhoneNumber` <a name="resetSourcePhoneNumber" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resetSourcePhoneNumber"></a>

```java
public void resetSourcePhoneNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.destinationPhoneNumberInput">destinationPhoneNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.flowIdInput">flowIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.sourcePhoneNumberInput">sourcePhoneNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.destinationPhoneNumber">destinationPhoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.flowId">flowId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.sourcePhoneNumber">sourcePhoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters">ConnectTestCaseEntryPointVoiceCallEntryPointParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationPhoneNumberInput`<sup>Optional</sup> <a name="destinationPhoneNumberInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.destinationPhoneNumberInput"></a>

```java
public java.lang.String getDestinationPhoneNumberInput();
```

- *Type:* java.lang.String

---

##### `flowIdInput`<sup>Optional</sup> <a name="flowIdInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.flowIdInput"></a>

```java
public java.lang.String getFlowIdInput();
```

- *Type:* java.lang.String

---

##### `sourcePhoneNumberInput`<sup>Optional</sup> <a name="sourcePhoneNumberInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.sourcePhoneNumberInput"></a>

```java
public java.lang.String getSourcePhoneNumberInput();
```

- *Type:* java.lang.String

---

##### `destinationPhoneNumber`<sup>Required</sup> <a name="destinationPhoneNumber" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.destinationPhoneNumber"></a>

```java
public java.lang.String getDestinationPhoneNumber();
```

- *Type:* java.lang.String

---

##### `flowId`<sup>Required</sup> <a name="flowId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.flowId"></a>

```java
public java.lang.String getFlowId();
```

- *Type:* java.lang.String

---

##### `sourcePhoneNumber`<sup>Required</sup> <a name="sourcePhoneNumber" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.sourcePhoneNumber"></a>

```java
public java.lang.String getSourcePhoneNumber();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectTestCaseEntryPointVoiceCallEntryPointParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters">ConnectTestCaseEntryPointVoiceCallEntryPointParameters</a>

---


### ConnectTestCaseTagsList <a name="ConnectTestCaseTagsList" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_test_case.ConnectTestCaseTagsList;

new ConnectTestCaseTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.get"></a>

```java
public ConnectTestCaseTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConnectTestCaseTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>>

---


### ConnectTestCaseTagsOutputReference <a name="ConnectTestCaseTagsOutputReference" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_test_case.ConnectTestCaseTagsOutputReference;

new ConnectTestCaseTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectTestCaseTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>

---



