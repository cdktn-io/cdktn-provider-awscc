# `qbusinessRetriever` Submodule <a name="`qbusinessRetriever` Submodule" id="@cdktn/provider-awscc.qbusinessRetriever"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QbusinessRetriever <a name="QbusinessRetriever" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever awscc_qbusiness_retriever}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_retriever.QbusinessRetriever;

QbusinessRetriever.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .configuration(QbusinessRetrieverConfiguration)
    .displayName(java.lang.String)
    .type(java.lang.String)
//  .roleArn(java.lang.String)
//  .tags(IResolvable|java.util.List<QbusinessRetrieverTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#application_id QbusinessRetriever#application_id}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfiguration">QbusinessRetrieverConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#configuration QbusinessRetriever#configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#display_name QbusinessRetriever#display_name}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#type QbusinessRetriever#type}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#role_arn QbusinessRetriever#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTags">QbusinessRetrieverTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#tags QbusinessRetriever#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#application_id QbusinessRetriever#application_id}.

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfiguration">QbusinessRetrieverConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#configuration QbusinessRetriever#configuration}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#display_name QbusinessRetriever#display_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#type QbusinessRetriever#type}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#role_arn QbusinessRetriever#role_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTags">QbusinessRetrieverTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#tags QbusinessRetriever#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.putConfiguration"></a>

```java
public void putConfiguration(QbusinessRetrieverConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfiguration">QbusinessRetrieverConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<QbusinessRetrieverTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTags">QbusinessRetrieverTags</a>>

---

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a QbusinessRetriever resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.isConstruct"></a>

```java
import io.cdktn.providers.awscc.qbusiness_retriever.QbusinessRetriever;

QbusinessRetriever.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.qbusiness_retriever.QbusinessRetriever;

QbusinessRetriever.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.qbusiness_retriever.QbusinessRetriever;

QbusinessRetriever.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.qbusiness_retriever.QbusinessRetriever;

QbusinessRetriever.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),QbusinessRetriever.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a QbusinessRetriever resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the QbusinessRetriever to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing QbusinessRetriever that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the QbusinessRetriever to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference">QbusinessRetrieverConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.retrieverArn">retrieverArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.retrieverId">retrieverId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList">QbusinessRetrieverTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.configurationInput">configurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfiguration">QbusinessRetrieverConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTags">QbusinessRetrieverTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.configuration"></a>

```java
public QbusinessRetrieverConfigurationOutputReference getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference">QbusinessRetrieverConfigurationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `retrieverArn`<sup>Required</sup> <a name="retrieverArn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.retrieverArn"></a>

```java
public java.lang.String getRetrieverArn();
```

- *Type:* java.lang.String

---

##### `retrieverId`<sup>Required</sup> <a name="retrieverId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.retrieverId"></a>

```java
public java.lang.String getRetrieverId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.tags"></a>

```java
public QbusinessRetrieverTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList">QbusinessRetrieverTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.configurationInput"></a>

```java
public IResolvable|QbusinessRetrieverConfiguration getConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfiguration">QbusinessRetrieverConfiguration</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.tagsInput"></a>

```java
public IResolvable|java.util.List<QbusinessRetrieverTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTags">QbusinessRetrieverTags</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### QbusinessRetrieverConfig <a name="QbusinessRetrieverConfig" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_retriever.QbusinessRetrieverConfig;

QbusinessRetrieverConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .configuration(QbusinessRetrieverConfiguration)
    .displayName(java.lang.String)
    .type(java.lang.String)
//  .roleArn(java.lang.String)
//  .tags(IResolvable|java.util.List<QbusinessRetrieverTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#application_id QbusinessRetriever#application_id}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfiguration">QbusinessRetrieverConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#configuration QbusinessRetriever#configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#display_name QbusinessRetriever#display_name}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#type QbusinessRetriever#type}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#role_arn QbusinessRetriever#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTags">QbusinessRetrieverTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#tags QbusinessRetriever#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#application_id QbusinessRetriever#application_id}.

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.configuration"></a>

```java
public QbusinessRetrieverConfiguration getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfiguration">QbusinessRetrieverConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#configuration QbusinessRetriever#configuration}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#display_name QbusinessRetriever#display_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#type QbusinessRetriever#type}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#role_arn QbusinessRetriever#role_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.tags"></a>

```java
public IResolvable|java.util.List<QbusinessRetrieverTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTags">QbusinessRetrieverTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#tags QbusinessRetriever#tags}.

---

### QbusinessRetrieverConfiguration <a name="QbusinessRetrieverConfiguration" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_retriever.QbusinessRetrieverConfiguration;

QbusinessRetrieverConfiguration.builder()
//  .kendraIndexConfiguration(QbusinessRetrieverConfigurationKendraIndexConfiguration)
//  .nativeIndexConfiguration(QbusinessRetrieverConfigurationNativeIndexConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfiguration.property.kendraIndexConfiguration">kendraIndexConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfiguration">QbusinessRetrieverConfigurationKendraIndexConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#kendra_index_configuration QbusinessRetriever#kendra_index_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfiguration.property.nativeIndexConfiguration">nativeIndexConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfiguration">QbusinessRetrieverConfigurationNativeIndexConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#native_index_configuration QbusinessRetriever#native_index_configuration}. |

---

##### `kendraIndexConfiguration`<sup>Optional</sup> <a name="kendraIndexConfiguration" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfiguration.property.kendraIndexConfiguration"></a>

```java
public QbusinessRetrieverConfigurationKendraIndexConfiguration getKendraIndexConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfiguration">QbusinessRetrieverConfigurationKendraIndexConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#kendra_index_configuration QbusinessRetriever#kendra_index_configuration}.

---

##### `nativeIndexConfiguration`<sup>Optional</sup> <a name="nativeIndexConfiguration" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfiguration.property.nativeIndexConfiguration"></a>

```java
public QbusinessRetrieverConfigurationNativeIndexConfiguration getNativeIndexConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfiguration">QbusinessRetrieverConfigurationNativeIndexConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#native_index_configuration QbusinessRetriever#native_index_configuration}.

---

### QbusinessRetrieverConfigurationKendraIndexConfiguration <a name="QbusinessRetrieverConfigurationKendraIndexConfiguration" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_retriever.QbusinessRetrieverConfigurationKendraIndexConfiguration;

QbusinessRetrieverConfigurationKendraIndexConfiguration.builder()
//  .indexId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfiguration.property.indexId">indexId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#index_id QbusinessRetriever#index_id}. |

---

##### `indexId`<sup>Optional</sup> <a name="indexId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfiguration.property.indexId"></a>

```java
public java.lang.String getIndexId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#index_id QbusinessRetriever#index_id}.

---

### QbusinessRetrieverConfigurationNativeIndexConfiguration <a name="QbusinessRetrieverConfigurationNativeIndexConfiguration" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_retriever.QbusinessRetrieverConfigurationNativeIndexConfiguration;

QbusinessRetrieverConfigurationNativeIndexConfiguration.builder()
//  .indexId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfiguration.property.indexId">indexId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#index_id QbusinessRetriever#index_id}. |

---

##### `indexId`<sup>Optional</sup> <a name="indexId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfiguration.property.indexId"></a>

```java
public java.lang.String getIndexId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#index_id QbusinessRetriever#index_id}.

---

### QbusinessRetrieverTags <a name="QbusinessRetrieverTags" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_retriever.QbusinessRetrieverTags;

QbusinessRetrieverTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#key QbusinessRetriever#key}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#value QbusinessRetriever#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#key QbusinessRetriever#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_retriever#value QbusinessRetriever#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference <a name="QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_retriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference;

new QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.resetIndexId">resetIndexId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIndexId` <a name="resetIndexId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.resetIndexId"></a>

```java
public void resetIndexId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.indexIdInput">indexIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.indexId">indexId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfiguration">QbusinessRetrieverConfigurationKendraIndexConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `indexIdInput`<sup>Optional</sup> <a name="indexIdInput" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.indexIdInput"></a>

```java
public java.lang.String getIndexIdInput();
```

- *Type:* java.lang.String

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.indexId"></a>

```java
public java.lang.String getIndexId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|QbusinessRetrieverConfigurationKendraIndexConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfiguration">QbusinessRetrieverConfigurationKendraIndexConfiguration</a>

---


### QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference <a name="QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_retriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference;

new QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.resetIndexId">resetIndexId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIndexId` <a name="resetIndexId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.resetIndexId"></a>

```java
public void resetIndexId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.indexIdInput">indexIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.indexId">indexId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfiguration">QbusinessRetrieverConfigurationNativeIndexConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `indexIdInput`<sup>Optional</sup> <a name="indexIdInput" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.indexIdInput"></a>

```java
public java.lang.String getIndexIdInput();
```

- *Type:* java.lang.String

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.indexId"></a>

```java
public java.lang.String getIndexId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|QbusinessRetrieverConfigurationNativeIndexConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfiguration">QbusinessRetrieverConfigurationNativeIndexConfiguration</a>

---


### QbusinessRetrieverConfigurationOutputReference <a name="QbusinessRetrieverConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_retriever.QbusinessRetrieverConfigurationOutputReference;

new QbusinessRetrieverConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.putKendraIndexConfiguration">putKendraIndexConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.putNativeIndexConfiguration">putNativeIndexConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.resetKendraIndexConfiguration">resetKendraIndexConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.resetNativeIndexConfiguration">resetNativeIndexConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKendraIndexConfiguration` <a name="putKendraIndexConfiguration" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.putKendraIndexConfiguration"></a>

```java
public void putKendraIndexConfiguration(QbusinessRetrieverConfigurationKendraIndexConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.putKendraIndexConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfiguration">QbusinessRetrieverConfigurationKendraIndexConfiguration</a>

---

##### `putNativeIndexConfiguration` <a name="putNativeIndexConfiguration" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.putNativeIndexConfiguration"></a>

```java
public void putNativeIndexConfiguration(QbusinessRetrieverConfigurationNativeIndexConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.putNativeIndexConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfiguration">QbusinessRetrieverConfigurationNativeIndexConfiguration</a>

---

##### `resetKendraIndexConfiguration` <a name="resetKendraIndexConfiguration" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.resetKendraIndexConfiguration"></a>

```java
public void resetKendraIndexConfiguration()
```

##### `resetNativeIndexConfiguration` <a name="resetNativeIndexConfiguration" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.resetNativeIndexConfiguration"></a>

```java
public void resetNativeIndexConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.property.kendraIndexConfiguration">kendraIndexConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference">QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.property.nativeIndexConfiguration">nativeIndexConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference">QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.property.kendraIndexConfigurationInput">kendraIndexConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfiguration">QbusinessRetrieverConfigurationKendraIndexConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.property.nativeIndexConfigurationInput">nativeIndexConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfiguration">QbusinessRetrieverConfigurationNativeIndexConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfiguration">QbusinessRetrieverConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kendraIndexConfiguration`<sup>Required</sup> <a name="kendraIndexConfiguration" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.property.kendraIndexConfiguration"></a>

```java
public QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference getKendraIndexConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference">QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference</a>

---

##### `nativeIndexConfiguration`<sup>Required</sup> <a name="nativeIndexConfiguration" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.property.nativeIndexConfiguration"></a>

```java
public QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference getNativeIndexConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference">QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference</a>

---

##### `kendraIndexConfigurationInput`<sup>Optional</sup> <a name="kendraIndexConfigurationInput" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.property.kendraIndexConfigurationInput"></a>

```java
public IResolvable|QbusinessRetrieverConfigurationKendraIndexConfiguration getKendraIndexConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfiguration">QbusinessRetrieverConfigurationKendraIndexConfiguration</a>

---

##### `nativeIndexConfigurationInput`<sup>Optional</sup> <a name="nativeIndexConfigurationInput" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.property.nativeIndexConfigurationInput"></a>

```java
public IResolvable|QbusinessRetrieverConfigurationNativeIndexConfiguration getNativeIndexConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfiguration">QbusinessRetrieverConfigurationNativeIndexConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|QbusinessRetrieverConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfiguration">QbusinessRetrieverConfiguration</a>

---


### QbusinessRetrieverTagsList <a name="QbusinessRetrieverTagsList" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_retriever.QbusinessRetrieverTagsList;

new QbusinessRetrieverTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.get"></a>

```java
public QbusinessRetrieverTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTags">QbusinessRetrieverTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QbusinessRetrieverTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTags">QbusinessRetrieverTags</a>>

---


### QbusinessRetrieverTagsOutputReference <a name="QbusinessRetrieverTagsOutputReference" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_retriever.QbusinessRetrieverTagsOutputReference;

new QbusinessRetrieverTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTags">QbusinessRetrieverTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|QbusinessRetrieverTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTags">QbusinessRetrieverTags</a>

---



