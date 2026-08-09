# `dataAwsccBedrockAgent` Submodule <a name="`dataAwsccBedrockAgent` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockAgent <a name="DataAwsccBedrockAgent" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrock_agent awscc_bedrock_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

new dataAwsccBedrockAgent.DataAwsccBedrockAgent(scope: Construct, id: string, config: DataAwsccBedrockAgentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentConfig">DataAwsccBedrockAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentConfig">DataAwsccBedrockAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockAgent resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.isConstruct"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

dataAwsccBedrockAgent.DataAwsccBedrockAgent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.isTerraformElement"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

dataAwsccBedrockAgent.DataAwsccBedrockAgent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.isTerraformDataSource"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

dataAwsccBedrockAgent.DataAwsccBedrockAgent.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.generateConfigForImport"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

dataAwsccBedrockAgent.DataAwsccBedrockAgent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccBedrockAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBedrockAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBedrockAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrock_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.actionGroups">actionGroups</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsList">DataAwsccBedrockAgentActionGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.agentArn">agentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.agentCollaboration">agentCollaboration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.agentCollaborators">agentCollaborators</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsList">DataAwsccBedrockAgentAgentCollaboratorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.agentId">agentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.agentName">agentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.agentResourceRoleArn">agentResourceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.agentStatus">agentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.agentVersion">agentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.autoPrepare">autoPrepare</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.customerEncryptionKeyArn">customerEncryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.customOrchestration">customOrchestration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference">DataAwsccBedrockAgentCustomOrchestrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.failureReasons">failureReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.foundationModel">foundationModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.guardrailConfiguration">guardrailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference">DataAwsccBedrockAgentGuardrailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.idleSessionTtlInSeconds">idleSessionTtlInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.instruction">instruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.knowledgeBases">knowledgeBases</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesList">DataAwsccBedrockAgentKnowledgeBasesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.memoryConfiguration">memoryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference">DataAwsccBedrockAgentMemoryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.orchestrationType">orchestrationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.preparedAt">preparedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.promptOverrideConfiguration">promptOverrideConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference">DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.recommendedActions">recommendedActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.skipResourceInUseCheckOnDelete">skipResourceInUseCheckOnDelete</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.testAliasTags">testAliasTags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `actionGroups`<sup>Required</sup> <a name="actionGroups" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.actionGroups"></a>

```typescript
public readonly actionGroups: DataAwsccBedrockAgentActionGroupsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsList">DataAwsccBedrockAgentActionGroupsList</a>

---

##### `agentArn`<sup>Required</sup> <a name="agentArn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.agentArn"></a>

```typescript
public readonly agentArn: string;
```

- *Type:* string

---

##### `agentCollaboration`<sup>Required</sup> <a name="agentCollaboration" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.agentCollaboration"></a>

```typescript
public readonly agentCollaboration: string;
```

- *Type:* string

---

##### `agentCollaborators`<sup>Required</sup> <a name="agentCollaborators" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.agentCollaborators"></a>

```typescript
public readonly agentCollaborators: DataAwsccBedrockAgentAgentCollaboratorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsList">DataAwsccBedrockAgentAgentCollaboratorsList</a>

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

---

##### `agentName`<sup>Required</sup> <a name="agentName" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.agentName"></a>

```typescript
public readonly agentName: string;
```

- *Type:* string

---

##### `agentResourceRoleArn`<sup>Required</sup> <a name="agentResourceRoleArn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.agentResourceRoleArn"></a>

```typescript
public readonly agentResourceRoleArn: string;
```

- *Type:* string

---

##### `agentStatus`<sup>Required</sup> <a name="agentStatus" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.agentStatus"></a>

```typescript
public readonly agentStatus: string;
```

- *Type:* string

---

##### `agentVersion`<sup>Required</sup> <a name="agentVersion" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.agentVersion"></a>

```typescript
public readonly agentVersion: string;
```

- *Type:* string

---

##### `autoPrepare`<sup>Required</sup> <a name="autoPrepare" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.autoPrepare"></a>

```typescript
public readonly autoPrepare: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `customerEncryptionKeyArn`<sup>Required</sup> <a name="customerEncryptionKeyArn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.customerEncryptionKeyArn"></a>

```typescript
public readonly customerEncryptionKeyArn: string;
```

- *Type:* string

---

##### `customOrchestration`<sup>Required</sup> <a name="customOrchestration" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.customOrchestration"></a>

```typescript
public readonly customOrchestration: DataAwsccBedrockAgentCustomOrchestrationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference">DataAwsccBedrockAgentCustomOrchestrationOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `failureReasons`<sup>Required</sup> <a name="failureReasons" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.failureReasons"></a>

```typescript
public readonly failureReasons: string[];
```

- *Type:* string[]

---

##### `foundationModel`<sup>Required</sup> <a name="foundationModel" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.foundationModel"></a>

```typescript
public readonly foundationModel: string;
```

- *Type:* string

---

##### `guardrailConfiguration`<sup>Required</sup> <a name="guardrailConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.guardrailConfiguration"></a>

```typescript
public readonly guardrailConfiguration: DataAwsccBedrockAgentGuardrailConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference">DataAwsccBedrockAgentGuardrailConfigurationOutputReference</a>

---

##### `idleSessionTtlInSeconds`<sup>Required</sup> <a name="idleSessionTtlInSeconds" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.idleSessionTtlInSeconds"></a>

```typescript
public readonly idleSessionTtlInSeconds: number;
```

- *Type:* number

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

---

##### `knowledgeBases`<sup>Required</sup> <a name="knowledgeBases" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.knowledgeBases"></a>

```typescript
public readonly knowledgeBases: DataAwsccBedrockAgentKnowledgeBasesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesList">DataAwsccBedrockAgentKnowledgeBasesList</a>

---

##### `memoryConfiguration`<sup>Required</sup> <a name="memoryConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.memoryConfiguration"></a>

```typescript
public readonly memoryConfiguration: DataAwsccBedrockAgentMemoryConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference">DataAwsccBedrockAgentMemoryConfigurationOutputReference</a>

---

##### `orchestrationType`<sup>Required</sup> <a name="orchestrationType" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.orchestrationType"></a>

```typescript
public readonly orchestrationType: string;
```

- *Type:* string

---

##### `preparedAt`<sup>Required</sup> <a name="preparedAt" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.preparedAt"></a>

```typescript
public readonly preparedAt: string;
```

- *Type:* string

---

##### `promptOverrideConfiguration`<sup>Required</sup> <a name="promptOverrideConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.promptOverrideConfiguration"></a>

```typescript
public readonly promptOverrideConfiguration: DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference">DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference</a>

---

##### `recommendedActions`<sup>Required</sup> <a name="recommendedActions" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.recommendedActions"></a>

```typescript
public readonly recommendedActions: string[];
```

- *Type:* string[]

---

##### `skipResourceInUseCheckOnDelete`<sup>Required</sup> <a name="skipResourceInUseCheckOnDelete" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.skipResourceInUseCheckOnDelete"></a>

```typescript
public readonly skipResourceInUseCheckOnDelete: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `testAliasTags`<sup>Required</sup> <a name="testAliasTags" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.testAliasTags"></a>

```typescript
public readonly testAliasTags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockAgentActionGroups <a name="DataAwsccBedrockAgentActionGroups" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroups.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

const dataAwsccBedrockAgentActionGroups: dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroups = { ... }
```


### DataAwsccBedrockAgentActionGroupsActionGroupExecutor <a name="DataAwsccBedrockAgentActionGroupsActionGroupExecutor" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutor.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

const dataAwsccBedrockAgentActionGroupsActionGroupExecutor: dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutor = { ... }
```


### DataAwsccBedrockAgentActionGroupsApiSchema <a name="DataAwsccBedrockAgentActionGroupsApiSchema" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchema.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

const dataAwsccBedrockAgentActionGroupsApiSchema: dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchema = { ... }
```


### DataAwsccBedrockAgentActionGroupsApiSchemaS3 <a name="DataAwsccBedrockAgentActionGroupsApiSchemaS3" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

const dataAwsccBedrockAgentActionGroupsApiSchemaS3: dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3 = { ... }
```


### DataAwsccBedrockAgentActionGroupsFunctionSchema <a name="DataAwsccBedrockAgentActionGroupsFunctionSchema" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchema.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

const dataAwsccBedrockAgentActionGroupsFunctionSchema: dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchema = { ... }
```


### DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctions <a name="DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctions" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctions.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

const dataAwsccBedrockAgentActionGroupsFunctionSchemaFunctions: dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctions = { ... }
```


### DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParameters <a name="DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParameters" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParameters.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

const dataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParameters: dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParameters = { ... }
```


### DataAwsccBedrockAgentAgentCollaborators <a name="DataAwsccBedrockAgentAgentCollaborators" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaborators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaborators.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

const dataAwsccBedrockAgentAgentCollaborators: dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaborators = { ... }
```


### DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptor <a name="DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptor" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptor.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

const dataAwsccBedrockAgentAgentCollaboratorsAgentDescriptor: dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptor = { ... }
```


### DataAwsccBedrockAgentConfig <a name="DataAwsccBedrockAgentConfig" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

const dataAwsccBedrockAgentConfig: dataAwsccBedrockAgent.DataAwsccBedrockAgentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrock_agent#id DataAwsccBedrockAgent#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockAgentCustomOrchestration <a name="DataAwsccBedrockAgentCustomOrchestration" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestration.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

const dataAwsccBedrockAgentCustomOrchestration: dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestration = { ... }
```


### DataAwsccBedrockAgentCustomOrchestrationExecutor <a name="DataAwsccBedrockAgentCustomOrchestrationExecutor" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutor.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

const dataAwsccBedrockAgentCustomOrchestrationExecutor: dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutor = { ... }
```


### DataAwsccBedrockAgentGuardrailConfiguration <a name="DataAwsccBedrockAgentGuardrailConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfiguration.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

const dataAwsccBedrockAgentGuardrailConfiguration: dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfiguration = { ... }
```


### DataAwsccBedrockAgentKnowledgeBases <a name="DataAwsccBedrockAgentKnowledgeBases" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBases"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBases.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

const dataAwsccBedrockAgentKnowledgeBases: dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBases = { ... }
```


### DataAwsccBedrockAgentMemoryConfiguration <a name="DataAwsccBedrockAgentMemoryConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfiguration.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

const dataAwsccBedrockAgentMemoryConfiguration: dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfiguration = { ... }
```


### DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfiguration <a name="DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfiguration.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

const dataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfiguration: dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfiguration = { ... }
```


### DataAwsccBedrockAgentPromptOverrideConfiguration <a name="DataAwsccBedrockAgentPromptOverrideConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfiguration.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

const dataAwsccBedrockAgentPromptOverrideConfiguration: dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfiguration = { ... }
```


### DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurations <a name="DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurations" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurations.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

const dataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurations: dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurations = { ... }
```


### DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration <a name="DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

const dataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration: dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference <a name="DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

new dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.property.customControl">customControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.property.lambda">lambda</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutor">DataAwsccBedrockAgentActionGroupsActionGroupExecutor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customControl`<sup>Required</sup> <a name="customControl" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.property.customControl"></a>

```typescript
public readonly customControl: string;
```

- *Type:* string

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.property.lambda"></a>

```typescript
public readonly lambda: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockAgentActionGroupsActionGroupExecutor;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutor">DataAwsccBedrockAgentActionGroupsActionGroupExecutor</a>

---


### DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference <a name="DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

new dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.property.payload">payload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference">DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchema">DataAwsccBedrockAgentActionGroupsApiSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.property.s3"></a>

```typescript
public readonly s3: DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference">DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockAgentActionGroupsApiSchema;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchema">DataAwsccBedrockAgentActionGroupsApiSchema</a>

---


### DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference <a name="DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

new dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3ObjectKey">s3ObjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3">DataAwsccBedrockAgentActionGroupsApiSchemaS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

---

##### `s3ObjectKey`<sup>Required</sup> <a name="s3ObjectKey" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3ObjectKey"></a>

```typescript
public readonly s3ObjectKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockAgentActionGroupsApiSchemaS3;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaS3">DataAwsccBedrockAgentActionGroupsApiSchemaS3</a>

---


### DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList <a name="DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

new dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference <a name="DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

new dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap">DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.requireConfirmation">requireConfirmation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctions">DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap">DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap</a>

---

##### `requireConfirmation`<sup>Required</sup> <a name="requireConfirmation" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.requireConfirmation"></a>

```typescript
public readonly requireConfirmation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctions">DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctions</a>

---


### DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap <a name="DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

new dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.get"></a>

```typescript
public get(key: string): DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference <a name="DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

new dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.required">required</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParameters">DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.required"></a>

```typescript
public readonly required: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParameters">DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>

---


### DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference <a name="DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

new dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.property.functions">functions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList">DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchema">DataAwsccBedrockAgentActionGroupsFunctionSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `functions`<sup>Required</sup> <a name="functions" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.property.functions"></a>

```typescript
public readonly functions: DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList">DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockAgentActionGroupsFunctionSchema;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchema">DataAwsccBedrockAgentActionGroupsFunctionSchema</a>

---


### DataAwsccBedrockAgentActionGroupsList <a name="DataAwsccBedrockAgentActionGroupsList" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsList.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

new dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockAgentActionGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockAgentActionGroupsOutputReference <a name="DataAwsccBedrockAgentActionGroupsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

new dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.property.actionGroupExecutor">actionGroupExecutor</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference">DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.property.actionGroupName">actionGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.property.actionGroupState">actionGroupState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.property.apiSchema">apiSchema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference">DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.property.functionSchema">functionSchema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference">DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.property.parentActionGroupSignature">parentActionGroupSignature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.property.skipResourceInUseCheckOnDelete">skipResourceInUseCheckOnDelete</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroups">DataAwsccBedrockAgentActionGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionGroupExecutor`<sup>Required</sup> <a name="actionGroupExecutor" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.property.actionGroupExecutor"></a>

```typescript
public readonly actionGroupExecutor: DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference">DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference</a>

---

##### `actionGroupName`<sup>Required</sup> <a name="actionGroupName" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.property.actionGroupName"></a>

```typescript
public readonly actionGroupName: string;
```

- *Type:* string

---

##### `actionGroupState`<sup>Required</sup> <a name="actionGroupState" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.property.actionGroupState"></a>

```typescript
public readonly actionGroupState: string;
```

- *Type:* string

---

##### `apiSchema`<sup>Required</sup> <a name="apiSchema" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.property.apiSchema"></a>

```typescript
public readonly apiSchema: DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference">DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `functionSchema`<sup>Required</sup> <a name="functionSchema" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.property.functionSchema"></a>

```typescript
public readonly functionSchema: DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference">DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference</a>

---

##### `parentActionGroupSignature`<sup>Required</sup> <a name="parentActionGroupSignature" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.property.parentActionGroupSignature"></a>

```typescript
public readonly parentActionGroupSignature: string;
```

- *Type:* string

---

##### `skipResourceInUseCheckOnDelete`<sup>Required</sup> <a name="skipResourceInUseCheckOnDelete" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.property.skipResourceInUseCheckOnDelete"></a>

```typescript
public readonly skipResourceInUseCheckOnDelete: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockAgentActionGroups;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentActionGroups">DataAwsccBedrockAgentActionGroups</a>

---


### DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference <a name="DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

new dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.aliasArn">aliasArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptor">DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasArn`<sup>Required</sup> <a name="aliasArn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.aliasArn"></a>

```typescript
public readonly aliasArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptor;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptor">DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptor</a>

---


### DataAwsccBedrockAgentAgentCollaboratorsList <a name="DataAwsccBedrockAgentAgentCollaboratorsList" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsList.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

new dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockAgentAgentCollaboratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockAgentAgentCollaboratorsOutputReference <a name="DataAwsccBedrockAgentAgentCollaboratorsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

new dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.property.agentDescriptor">agentDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference">DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.property.collaborationInstruction">collaborationInstruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.property.collaboratorName">collaboratorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.property.relayConversationHistory">relayConversationHistory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaborators">DataAwsccBedrockAgentAgentCollaborators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentDescriptor`<sup>Required</sup> <a name="agentDescriptor" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.property.agentDescriptor"></a>

```typescript
public readonly agentDescriptor: DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference">DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference</a>

---

##### `collaborationInstruction`<sup>Required</sup> <a name="collaborationInstruction" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.property.collaborationInstruction"></a>

```typescript
public readonly collaborationInstruction: string;
```

- *Type:* string

---

##### `collaboratorName`<sup>Required</sup> <a name="collaboratorName" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.property.collaboratorName"></a>

```typescript
public readonly collaboratorName: string;
```

- *Type:* string

---

##### `relayConversationHistory`<sup>Required</sup> <a name="relayConversationHistory" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.property.relayConversationHistory"></a>

```typescript
public readonly relayConversationHistory: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaboratorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockAgentAgentCollaborators;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentAgentCollaborators">DataAwsccBedrockAgentAgentCollaborators</a>

---


### DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference <a name="DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

new dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.property.lambda">lambda</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutor">DataAwsccBedrockAgentCustomOrchestrationExecutor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.property.lambda"></a>

```typescript
public readonly lambda: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockAgentCustomOrchestrationExecutor;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutor">DataAwsccBedrockAgentCustomOrchestrationExecutor</a>

---


### DataAwsccBedrockAgentCustomOrchestrationOutputReference <a name="DataAwsccBedrockAgentCustomOrchestrationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

new dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.property.executor">executor</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference">DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestration">DataAwsccBedrockAgentCustomOrchestration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executor`<sup>Required</sup> <a name="executor" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.property.executor"></a>

```typescript
public readonly executor: DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference">DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestrationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockAgentCustomOrchestration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentCustomOrchestration">DataAwsccBedrockAgentCustomOrchestration</a>

---


### DataAwsccBedrockAgentGuardrailConfigurationOutputReference <a name="DataAwsccBedrockAgentGuardrailConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

new dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.property.guardrailIdentifier">guardrailIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.property.guardrailVersion">guardrailVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfiguration">DataAwsccBedrockAgentGuardrailConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `guardrailIdentifier`<sup>Required</sup> <a name="guardrailIdentifier" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.property.guardrailIdentifier"></a>

```typescript
public readonly guardrailIdentifier: string;
```

- *Type:* string

---

##### `guardrailVersion`<sup>Required</sup> <a name="guardrailVersion" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.property.guardrailVersion"></a>

```typescript
public readonly guardrailVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockAgentGuardrailConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentGuardrailConfiguration">DataAwsccBedrockAgentGuardrailConfiguration</a>

---


### DataAwsccBedrockAgentKnowledgeBasesList <a name="DataAwsccBedrockAgentKnowledgeBasesList" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesList.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

new dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockAgentKnowledgeBasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockAgentKnowledgeBasesOutputReference <a name="DataAwsccBedrockAgentKnowledgeBasesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

new dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseState">knowledgeBaseState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBases">DataAwsccBedrockAgentKnowledgeBases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseId"></a>

```typescript
public readonly knowledgeBaseId: string;
```

- *Type:* string

---

##### `knowledgeBaseState`<sup>Required</sup> <a name="knowledgeBaseState" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseState"></a>

```typescript
public readonly knowledgeBaseState: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBasesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockAgentKnowledgeBases;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentKnowledgeBases">DataAwsccBedrockAgentKnowledgeBases</a>

---


### DataAwsccBedrockAgentMemoryConfigurationOutputReference <a name="DataAwsccBedrockAgentMemoryConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

new dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.property.enabledMemoryTypes">enabledMemoryTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.property.sessionSummaryConfiguration">sessionSummaryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference">DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.property.storageDays">storageDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfiguration">DataAwsccBedrockAgentMemoryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledMemoryTypes`<sup>Required</sup> <a name="enabledMemoryTypes" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.property.enabledMemoryTypes"></a>

```typescript
public readonly enabledMemoryTypes: string[];
```

- *Type:* string[]

---

##### `sessionSummaryConfiguration`<sup>Required</sup> <a name="sessionSummaryConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.property.sessionSummaryConfiguration"></a>

```typescript
public readonly sessionSummaryConfiguration: DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference">DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference</a>

---

##### `storageDays`<sup>Required</sup> <a name="storageDays" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.property.storageDays"></a>

```typescript
public readonly storageDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockAgentMemoryConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfiguration">DataAwsccBedrockAgentMemoryConfiguration</a>

---


### DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference <a name="DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

new dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.maxRecentSessions">maxRecentSessions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfiguration">DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxRecentSessions`<sup>Required</sup> <a name="maxRecentSessions" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.maxRecentSessions"></a>

```typescript
public readonly maxRecentSessions: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfiguration">DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfiguration</a>

---


### DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference <a name="DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

new dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.property.overrideLambda">overrideLambda</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.property.promptConfigurations">promptConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList">DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfiguration">DataAwsccBedrockAgentPromptOverrideConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `overrideLambda`<sup>Required</sup> <a name="overrideLambda" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.property.overrideLambda"></a>

```typescript
public readonly overrideLambda: string;
```

- *Type:* string

---

##### `promptConfigurations`<sup>Required</sup> <a name="promptConfigurations" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.property.promptConfigurations"></a>

```typescript
public readonly promptConfigurations: DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList">DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockAgentPromptOverrideConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfiguration">DataAwsccBedrockAgentPromptOverrideConfiguration</a>

---


### DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference <a name="DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

new dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maximumLength">maximumLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequences">stopSequences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperature">temperature</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topK">topK</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topP">topP</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumLength`<sup>Required</sup> <a name="maximumLength" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maximumLength"></a>

```typescript
public readonly maximumLength: number;
```

- *Type:* number

---

##### `stopSequences`<sup>Required</sup> <a name="stopSequences" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequences"></a>

```typescript
public readonly stopSequences: string[];
```

- *Type:* string[]

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperature"></a>

```typescript
public readonly temperature: number;
```

- *Type:* number

---

##### `topK`<sup>Required</sup> <a name="topK" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topK"></a>

```typescript
public readonly topK: number;
```

- *Type:* number

---

##### `topP`<sup>Required</sup> <a name="topP" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topP"></a>

```typescript
public readonly topP: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>

---


### DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList <a name="DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

new dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference <a name="DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockAgent } from '@cdktn/provider-awscc'

new dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.additionalModelRequestFields">additionalModelRequestFields</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplate">basePromptTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.foundationModel">foundationModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfiguration">inferenceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference">DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserMode">parserMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationMode">promptCreationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptState">promptState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptType">promptType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurations">DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalModelRequestFields`<sup>Required</sup> <a name="additionalModelRequestFields" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.additionalModelRequestFields"></a>

```typescript
public readonly additionalModelRequestFields: string;
```

- *Type:* string

---

##### `basePromptTemplate`<sup>Required</sup> <a name="basePromptTemplate" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplate"></a>

```typescript
public readonly basePromptTemplate: string;
```

- *Type:* string

---

##### `foundationModel`<sup>Required</sup> <a name="foundationModel" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.foundationModel"></a>

```typescript
public readonly foundationModel: string;
```

- *Type:* string

---

##### `inferenceConfiguration`<sup>Required</sup> <a name="inferenceConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfiguration"></a>

```typescript
public readonly inferenceConfiguration: DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference">DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference</a>

---

##### `parserMode`<sup>Required</sup> <a name="parserMode" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserMode"></a>

```typescript
public readonly parserMode: string;
```

- *Type:* string

---

##### `promptCreationMode`<sup>Required</sup> <a name="promptCreationMode" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationMode"></a>

```typescript
public readonly promptCreationMode: string;
```

- *Type:* string

---

##### `promptState`<sup>Required</sup> <a name="promptState" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptState"></a>

```typescript
public readonly promptState: string;
```

- *Type:* string

---

##### `promptType`<sup>Required</sup> <a name="promptType" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptType"></a>

```typescript
public readonly promptType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAgent.DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurations">DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurations</a>

---



