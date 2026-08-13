# `bedrockFlowAlias` Submodule <a name="`bedrockFlowAlias` Submodule" id="@cdktn/provider-awscc.bedrockFlowAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockFlowAlias <a name="BedrockFlowAlias" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_flow_alias awscc_bedrock_flow_alias}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_alias.BedrockFlowAlias;

BedrockFlowAlias.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .flowArn(java.lang.String)
    .name(java.lang.String)
    .routingConfiguration(IResolvable|java.util.List<BedrockFlowAliasRoutingConfiguration>)
//  .concurrencyConfiguration(BedrockFlowAliasConcurrencyConfiguration)
//  .description(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.Initializer.parameter.flowArn">flowArn</a></code> | <code>java.lang.String</code> | Arn representation of the Flow. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name for a resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.Initializer.parameter.routingConfiguration">routingConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfiguration">BedrockFlowAliasRoutingConfiguration</a>></code> | Routing configuration for a Flow alias. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.Initializer.parameter.concurrencyConfiguration">concurrencyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfiguration">BedrockFlowAliasConcurrencyConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_flow_alias#concurrency_configuration BedrockFlowAlias#concurrency_configuration}. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the Resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of tag keys and values. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.Initializer.parameter.flowArn"></a>

- *Type:* java.lang.String

Arn representation of the Flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_flow_alias#flow_arn BedrockFlowAlias#flow_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_flow_alias#name BedrockFlowAlias#name}

---

##### `routingConfiguration`<sup>Required</sup> <a name="routingConfiguration" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.Initializer.parameter.routingConfiguration"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfiguration">BedrockFlowAliasRoutingConfiguration</a>>

Routing configuration for a Flow alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_flow_alias#routing_configuration BedrockFlowAlias#routing_configuration}

---

##### `concurrencyConfiguration`<sup>Optional</sup> <a name="concurrencyConfiguration" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.Initializer.parameter.concurrencyConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfiguration">BedrockFlowAliasConcurrencyConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_flow_alias#concurrency_configuration BedrockFlowAlias#concurrency_configuration}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_flow_alias#description BedrockFlowAlias#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_flow_alias#tags BedrockFlowAlias#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.putConcurrencyConfiguration">putConcurrencyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.putRoutingConfiguration">putRoutingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.resetConcurrencyConfiguration">resetConcurrencyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConcurrencyConfiguration` <a name="putConcurrencyConfiguration" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.putConcurrencyConfiguration"></a>

```java
public void putConcurrencyConfiguration(BedrockFlowAliasConcurrencyConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.putConcurrencyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfiguration">BedrockFlowAliasConcurrencyConfiguration</a>

---

##### `putRoutingConfiguration` <a name="putRoutingConfiguration" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.putRoutingConfiguration"></a>

```java
public void putRoutingConfiguration(IResolvable|java.util.List<BedrockFlowAliasRoutingConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.putRoutingConfiguration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfiguration">BedrockFlowAliasRoutingConfiguration</a>>

---

##### `resetConcurrencyConfiguration` <a name="resetConcurrencyConfiguration" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.resetConcurrencyConfiguration"></a>

```java
public void resetConcurrencyConfiguration()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockFlowAlias resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.isConstruct"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_alias.BedrockFlowAlias;

BedrockFlowAlias.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_alias.BedrockFlowAlias;

BedrockFlowAlias.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_alias.BedrockFlowAlias;

BedrockFlowAlias.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_alias.BedrockFlowAlias;

BedrockFlowAlias.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockFlowAlias.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BedrockFlowAlias resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockFlowAlias to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockFlowAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_flow_alias#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BedrockFlowAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.concurrencyConfiguration">concurrencyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference">BedrockFlowAliasConcurrencyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.flowAliasId">flowAliasId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.flowId">flowId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.routingConfiguration">routingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationList">BedrockFlowAliasRoutingConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.concurrencyConfigurationInput">concurrencyConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfiguration">BedrockFlowAliasConcurrencyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.flowArnInput">flowArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.routingConfigurationInput">routingConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfiguration">BedrockFlowAliasRoutingConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.flowArn">flowArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `concurrencyConfiguration`<sup>Required</sup> <a name="concurrencyConfiguration" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.concurrencyConfiguration"></a>

```java
public BedrockFlowAliasConcurrencyConfigurationOutputReference getConcurrencyConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference">BedrockFlowAliasConcurrencyConfigurationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `flowAliasId`<sup>Required</sup> <a name="flowAliasId" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.flowAliasId"></a>

```java
public java.lang.String getFlowAliasId();
```

- *Type:* java.lang.String

---

##### `flowId`<sup>Required</sup> <a name="flowId" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.flowId"></a>

```java
public java.lang.String getFlowId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `routingConfiguration`<sup>Required</sup> <a name="routingConfiguration" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.routingConfiguration"></a>

```java
public BedrockFlowAliasRoutingConfigurationList getRoutingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationList">BedrockFlowAliasRoutingConfigurationList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `concurrencyConfigurationInput`<sup>Optional</sup> <a name="concurrencyConfigurationInput" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.concurrencyConfigurationInput"></a>

```java
public IResolvable|BedrockFlowAliasConcurrencyConfiguration getConcurrencyConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfiguration">BedrockFlowAliasConcurrencyConfiguration</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `flowArnInput`<sup>Optional</sup> <a name="flowArnInput" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.flowArnInput"></a>

```java
public java.lang.String getFlowArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `routingConfigurationInput`<sup>Optional</sup> <a name="routingConfigurationInput" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.routingConfigurationInput"></a>

```java
public IResolvable|java.util.List<BedrockFlowAliasRoutingConfiguration> getRoutingConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfiguration">BedrockFlowAliasRoutingConfiguration</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.flowArn"></a>

```java
public java.lang.String getFlowArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAlias.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockFlowAliasConcurrencyConfiguration <a name="BedrockFlowAliasConcurrencyConfiguration" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_alias.BedrockFlowAliasConcurrencyConfiguration;

BedrockFlowAliasConcurrencyConfiguration.builder()
//  .maxConcurrency(java.lang.Number)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfiguration.property.maxConcurrency">maxConcurrency</a></code> | <code>java.lang.Number</code> | Number of nodes executed concurrently at a time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfiguration.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_flow_alias#type BedrockFlowAlias#type}. |

---

##### `maxConcurrency`<sup>Optional</sup> <a name="maxConcurrency" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfiguration.property.maxConcurrency"></a>

```java
public java.lang.Number getMaxConcurrency();
```

- *Type:* java.lang.Number

Number of nodes executed concurrently at a time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_flow_alias#max_concurrency BedrockFlowAlias#max_concurrency}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfiguration.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_flow_alias#type BedrockFlowAlias#type}.

---

### BedrockFlowAliasConfig <a name="BedrockFlowAliasConfig" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_alias.BedrockFlowAliasConfig;

BedrockFlowAliasConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .flowArn(java.lang.String)
    .name(java.lang.String)
    .routingConfiguration(IResolvable|java.util.List<BedrockFlowAliasRoutingConfiguration>)
//  .concurrencyConfiguration(BedrockFlowAliasConcurrencyConfiguration)
//  .description(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConfig.property.flowArn">flowArn</a></code> | <code>java.lang.String</code> | Arn representation of the Flow. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name for a resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConfig.property.routingConfiguration">routingConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfiguration">BedrockFlowAliasRoutingConfiguration</a>></code> | Routing configuration for a Flow alias. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConfig.property.concurrencyConfiguration">concurrencyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfiguration">BedrockFlowAliasConcurrencyConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_flow_alias#concurrency_configuration BedrockFlowAlias#concurrency_configuration}. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the Resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of tag keys and values. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConfig.property.flowArn"></a>

```java
public java.lang.String getFlowArn();
```

- *Type:* java.lang.String

Arn representation of the Flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_flow_alias#flow_arn BedrockFlowAlias#flow_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_flow_alias#name BedrockFlowAlias#name}

---

##### `routingConfiguration`<sup>Required</sup> <a name="routingConfiguration" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConfig.property.routingConfiguration"></a>

```java
public IResolvable|java.util.List<BedrockFlowAliasRoutingConfiguration> getRoutingConfiguration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfiguration">BedrockFlowAliasRoutingConfiguration</a>>

Routing configuration for a Flow alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_flow_alias#routing_configuration BedrockFlowAlias#routing_configuration}

---

##### `concurrencyConfiguration`<sup>Optional</sup> <a name="concurrencyConfiguration" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConfig.property.concurrencyConfiguration"></a>

```java
public BedrockFlowAliasConcurrencyConfiguration getConcurrencyConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfiguration">BedrockFlowAliasConcurrencyConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_flow_alias#concurrency_configuration BedrockFlowAlias#concurrency_configuration}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_flow_alias#description BedrockFlowAlias#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_flow_alias#tags BedrockFlowAlias#tags}

---

### BedrockFlowAliasRoutingConfiguration <a name="BedrockFlowAliasRoutingConfiguration" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_alias.BedrockFlowAliasRoutingConfiguration;

BedrockFlowAliasRoutingConfiguration.builder()
//  .flowVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfiguration.property.flowVersion">flowVersion</a></code> | <code>java.lang.String</code> | Version. |

---

##### `flowVersion`<sup>Optional</sup> <a name="flowVersion" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfiguration.property.flowVersion"></a>

```java
public java.lang.String getFlowVersion();
```

- *Type:* java.lang.String

Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_flow_alias#flow_version BedrockFlowAlias#flow_version}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockFlowAliasConcurrencyConfigurationOutputReference <a name="BedrockFlowAliasConcurrencyConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_alias.BedrockFlowAliasConcurrencyConfigurationOutputReference;

new BedrockFlowAliasConcurrencyConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.resetMaxConcurrency">resetMaxConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxConcurrency` <a name="resetMaxConcurrency" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.resetMaxConcurrency"></a>

```java
public void resetMaxConcurrency()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.property.maxConcurrencyInput">maxConcurrencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.property.maxConcurrency">maxConcurrency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfiguration">BedrockFlowAliasConcurrencyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxConcurrencyInput`<sup>Optional</sup> <a name="maxConcurrencyInput" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.property.maxConcurrencyInput"></a>

```java
public java.lang.Number getMaxConcurrencyInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `maxConcurrency`<sup>Required</sup> <a name="maxConcurrency" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.property.maxConcurrency"></a>

```java
public java.lang.Number getMaxConcurrency();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockFlowAliasConcurrencyConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasConcurrencyConfiguration">BedrockFlowAliasConcurrencyConfiguration</a>

---


### BedrockFlowAliasRoutingConfigurationList <a name="BedrockFlowAliasRoutingConfigurationList" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_alias.BedrockFlowAliasRoutingConfigurationList;

new BedrockFlowAliasRoutingConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationList.get"></a>

```java
public BedrockFlowAliasRoutingConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfiguration">BedrockFlowAliasRoutingConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockFlowAliasRoutingConfiguration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfiguration">BedrockFlowAliasRoutingConfiguration</a>>

---


### BedrockFlowAliasRoutingConfigurationOutputReference <a name="BedrockFlowAliasRoutingConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_alias.BedrockFlowAliasRoutingConfigurationOutputReference;

new BedrockFlowAliasRoutingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.resetFlowVersion">resetFlowVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFlowVersion` <a name="resetFlowVersion" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.resetFlowVersion"></a>

```java
public void resetFlowVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.property.flowVersionInput">flowVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.property.flowVersion">flowVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfiguration">BedrockFlowAliasRoutingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `flowVersionInput`<sup>Optional</sup> <a name="flowVersionInput" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.property.flowVersionInput"></a>

```java
public java.lang.String getFlowVersionInput();
```

- *Type:* java.lang.String

---

##### `flowVersion`<sup>Required</sup> <a name="flowVersion" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.property.flowVersion"></a>

```java
public java.lang.String getFlowVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockFlowAliasRoutingConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockFlowAlias.BedrockFlowAliasRoutingConfiguration">BedrockFlowAliasRoutingConfiguration</a>

---



