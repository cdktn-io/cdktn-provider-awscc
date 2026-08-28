# `dataAwsccDevopsagentAgentSpace` Submodule <a name="`dataAwsccDevopsagentAgentSpace` Submodule" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDevopsagentAgentSpace <a name="DataAwsccDevopsagentAgentSpace" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/devopsagent_agent_space awscc_devopsagent_agent_space}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAgentSpace } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace(scope: Construct, id: string, config: DataAwsccDevopsagentAgentSpaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig">DataAwsccDevopsagentAgentSpaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig">DataAwsccDevopsagentAgentSpaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDevopsagentAgentSpace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.isConstruct"></a>

```typescript
import { dataAwsccDevopsagentAgentSpace } from '@cdktn/provider-awscc'

dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.isTerraformElement"></a>

```typescript
import { dataAwsccDevopsagentAgentSpace } from '@cdktn/provider-awscc'

dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.isTerraformDataSource"></a>

```typescript
import { dataAwsccDevopsagentAgentSpace } from '@cdktn/provider-awscc'

dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.generateConfigForImport"></a>

```typescript
import { dataAwsccDevopsagentAgentSpace } from '@cdktn/provider-awscc'

dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccDevopsagentAgentSpace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDevopsagentAgentSpace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDevopsagentAgentSpace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/devopsagent_agent_space#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDevopsagentAgentSpace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.agentSpaceId">agentSpaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.operatorApp">operatorApp</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference">DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList">DataAwsccDevopsagentAgentSpaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `agentSpaceId`<sup>Required</sup> <a name="agentSpaceId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.agentSpaceId"></a>

```typescript
public readonly agentSpaceId: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operatorApp`<sup>Required</sup> <a name="operatorApp" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.operatorApp"></a>

```typescript
public readonly operatorApp: DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference">DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.tags"></a>

```typescript
public readonly tags: DataAwsccDevopsagentAgentSpaceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList">DataAwsccDevopsagentAgentSpaceTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDevopsagentAgentSpaceConfig <a name="DataAwsccDevopsagentAgentSpaceConfig" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAgentSpace } from '@cdktn/provider-awscc'

const dataAwsccDevopsagentAgentSpaceConfig: dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/devopsagent_agent_space#id DataAwsccDevopsagentAgentSpace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDevopsagentAgentSpaceOperatorApp <a name="DataAwsccDevopsagentAgentSpaceOperatorApp" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorApp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorApp.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAgentSpace } from '@cdktn/provider-awscc'

const dataAwsccDevopsagentAgentSpaceOperatorApp: dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorApp = { ... }
```


### DataAwsccDevopsagentAgentSpaceOperatorAppIam <a name="DataAwsccDevopsagentAgentSpaceOperatorAppIam" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIam"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIam.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAgentSpace } from '@cdktn/provider-awscc'

const dataAwsccDevopsagentAgentSpaceOperatorAppIam: dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIam = { ... }
```


### DataAwsccDevopsagentAgentSpaceOperatorAppIdc <a name="DataAwsccDevopsagentAgentSpaceOperatorAppIdc" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdc.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAgentSpace } from '@cdktn/provider-awscc'

const dataAwsccDevopsagentAgentSpaceOperatorAppIdc: dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdc = { ... }
```


### DataAwsccDevopsagentAgentSpaceTags <a name="DataAwsccDevopsagentAgentSpaceTags" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTags.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAgentSpace } from '@cdktn/provider-awscc'

const dataAwsccDevopsagentAgentSpaceTags: dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference <a name="DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAgentSpace } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.property.operatorAppRoleArn">operatorAppRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIam">DataAwsccDevopsagentAgentSpaceOperatorAppIam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `operatorAppRoleArn`<sup>Required</sup> <a name="operatorAppRoleArn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.property.operatorAppRoleArn"></a>

```typescript
public readonly operatorAppRoleArn: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsagentAgentSpaceOperatorAppIam;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIam">DataAwsccDevopsagentAgentSpaceOperatorAppIam</a>

---


### DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference <a name="DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAgentSpace } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.property.idcApplicationArn">idcApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.property.idcInstanceArn">idcInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.property.operatorAppRoleArn">operatorAppRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdc">DataAwsccDevopsagentAgentSpaceOperatorAppIdc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `idcApplicationArn`<sup>Required</sup> <a name="idcApplicationArn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.property.idcApplicationArn"></a>

```typescript
public readonly idcApplicationArn: string;
```

- *Type:* string

---

##### `idcInstanceArn`<sup>Required</sup> <a name="idcInstanceArn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.property.idcInstanceArn"></a>

```typescript
public readonly idcInstanceArn: string;
```

- *Type:* string

---

##### `operatorAppRoleArn`<sup>Required</sup> <a name="operatorAppRoleArn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.property.operatorAppRoleArn"></a>

```typescript
public readonly operatorAppRoleArn: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsagentAgentSpaceOperatorAppIdc;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdc">DataAwsccDevopsagentAgentSpaceOperatorAppIdc</a>

---


### DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference <a name="DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAgentSpace } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.property.iam">iam</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference">DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.property.idc">idc</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference">DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorApp">DataAwsccDevopsagentAgentSpaceOperatorApp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iam`<sup>Required</sup> <a name="iam" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.property.iam"></a>

```typescript
public readonly iam: DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference">DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference</a>

---

##### `idc`<sup>Required</sup> <a name="idc" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.property.idc"></a>

```typescript
public readonly idc: DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference">DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsagentAgentSpaceOperatorApp;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorApp">DataAwsccDevopsagentAgentSpaceOperatorApp</a>

---


### DataAwsccDevopsagentAgentSpaceTagsList <a name="DataAwsccDevopsagentAgentSpaceTagsList" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAgentSpace } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.get"></a>

```typescript
public get(index: number): DataAwsccDevopsagentAgentSpaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDevopsagentAgentSpaceTagsOutputReference <a name="DataAwsccDevopsagentAgentSpaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsagentAgentSpace } from '@cdktn/provider-awscc'

new dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTags">DataAwsccDevopsagentAgentSpaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsagentAgentSpaceTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTags">DataAwsccDevopsagentAgentSpaceTags</a>

---



