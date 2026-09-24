# `wellarchitectedAgentContext` Submodule <a name="`wellarchitectedAgentContext` Submodule" id="@cdktn/provider-awscc.wellarchitectedAgentContext"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WellarchitectedAgentContext <a name="WellarchitectedAgentContext" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_context awscc_wellarchitected_agent_context}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer"></a>

```java
import io.cdktn.providers.awscc.wellarchitected_agent_context.WellarchitectedAgentContext;

WellarchitectedAgentContext.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .content(java.lang.String)
    .contextType(java.lang.String)
    .profileArn(java.lang.String)
    .title(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer.parameter.content">content</a></code> | <code>java.lang.String</code> | The free-form content of the Agent Context, supplied as an arbitrary JSON object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer.parameter.contextType">contextType</a></code> | <code>java.lang.String</code> | The type of the Agent Context. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer.parameter.profileArn">profileArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the parent Agent Profile that owns this context. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer.parameter.title">title</a></code> | <code>java.lang.String</code> | The title of the Agent Context. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer.parameter.content"></a>

- *Type:* java.lang.String

The free-form content of the Agent Context, supplied as an arbitrary JSON object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_context#content WellarchitectedAgentContext#content}

---

##### `contextType`<sup>Required</sup> <a name="contextType" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer.parameter.contextType"></a>

- *Type:* java.lang.String

The type of the Agent Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_context#context_type WellarchitectedAgentContext#context_type}

---

##### `profileArn`<sup>Required</sup> <a name="profileArn" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer.parameter.profileArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the parent Agent Profile that owns this context.

Pass `!Ref` of the parent AWS::WellArchitected::AgentProfile to flow its ARN here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_context#profile_arn WellarchitectedAgentContext#profile_arn}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer.parameter.title"></a>

- *Type:* java.lang.String

The title of the Agent Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_context#title WellarchitectedAgentContext#title}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WellarchitectedAgentContext resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.isConstruct"></a>

```java
import io.cdktn.providers.awscc.wellarchitected_agent_context.WellarchitectedAgentContext;

WellarchitectedAgentContext.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.wellarchitected_agent_context.WellarchitectedAgentContext;

WellarchitectedAgentContext.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.wellarchitected_agent_context.WellarchitectedAgentContext;

WellarchitectedAgentContext.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.wellarchitected_agent_context.WellarchitectedAgentContext;

WellarchitectedAgentContext.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WellarchitectedAgentContext.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a WellarchitectedAgentContext resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WellarchitectedAgentContext to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WellarchitectedAgentContext that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_context#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the WellarchitectedAgentContext to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.agentContextId">agentContextId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.applicationType">applicationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.criticality">criticality</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.lastModifiedAt">lastModifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.lastModifiedBy">lastModifiedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.contextTypeInput">contextTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.profileArnInput">profileArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.contextType">contextType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.profileArn">profileArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentContextId`<sup>Required</sup> <a name="agentContextId" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.agentContextId"></a>

```java
public java.lang.String getAgentContextId();
```

- *Type:* java.lang.String

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.applicationType"></a>

```java
public java.lang.String getApplicationType();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `criticality`<sup>Required</sup> <a name="criticality" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.criticality"></a>

```java
public java.lang.String getCriticality();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModifiedAt`<sup>Required</sup> <a name="lastModifiedAt" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.lastModifiedAt"></a>

```java
public java.lang.String getLastModifiedAt();
```

- *Type:* java.lang.String

---

##### `lastModifiedBy`<sup>Required</sup> <a name="lastModifiedBy" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.lastModifiedBy"></a>

```java
public java.lang.String getLastModifiedBy();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `contextTypeInput`<sup>Optional</sup> <a name="contextTypeInput" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.contextTypeInput"></a>

```java
public java.lang.String getContextTypeInput();
```

- *Type:* java.lang.String

---

##### `profileArnInput`<sup>Optional</sup> <a name="profileArnInput" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.profileArnInput"></a>

```java
public java.lang.String getProfileArnInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contextType`<sup>Required</sup> <a name="contextType" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.contextType"></a>

```java
public java.lang.String getContextType();
```

- *Type:* java.lang.String

---

##### `profileArn`<sup>Required</sup> <a name="profileArn" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.profileArn"></a>

```java
public java.lang.String getProfileArn();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WellarchitectedAgentContextConfig <a name="WellarchitectedAgentContextConfig" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.wellarchitected_agent_context.WellarchitectedAgentContextConfig;

WellarchitectedAgentContextConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .content(java.lang.String)
    .contextType(java.lang.String)
    .profileArn(java.lang.String)
    .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.content">content</a></code> | <code>java.lang.String</code> | The free-form content of the Agent Context, supplied as an arbitrary JSON object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.contextType">contextType</a></code> | <code>java.lang.String</code> | The type of the Agent Context. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.profileArn">profileArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the parent Agent Profile that owns this context. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.title">title</a></code> | <code>java.lang.String</code> | The title of the Agent Context. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

The free-form content of the Agent Context, supplied as an arbitrary JSON object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_context#content WellarchitectedAgentContext#content}

---

##### `contextType`<sup>Required</sup> <a name="contextType" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.contextType"></a>

```java
public java.lang.String getContextType();
```

- *Type:* java.lang.String

The type of the Agent Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_context#context_type WellarchitectedAgentContext#context_type}

---

##### `profileArn`<sup>Required</sup> <a name="profileArn" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.profileArn"></a>

```java
public java.lang.String getProfileArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the parent Agent Profile that owns this context.

Pass `!Ref` of the parent AWS::WellArchitected::AgentProfile to flow its ARN here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_context#profile_arn WellarchitectedAgentContext#profile_arn}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

The title of the Agent Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_context#title WellarchitectedAgentContext#title}

---



