# `bedrockAgentAlias` Submodule <a name="`bedrockAgentAlias` Submodule" id="@cdktn/provider-awscc.bedrockAgentAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockAgentAlias <a name="BedrockAgentAlias" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent_alias awscc_bedrock_agent_alias}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer"></a>

```typescript
import { bedrockAgentAlias } from '@cdktn/provider-awscc'

new bedrockAgentAlias.BedrockAgentAlias(scope: Construct, id: string, config: BedrockAgentAliasConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig">BedrockAgentAliasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig">BedrockAgentAliasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.putRoutingConfiguration">putRoutingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.resetRoutingConfiguration">resetRoutingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRoutingConfiguration` <a name="putRoutingConfiguration" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.putRoutingConfiguration"></a>

```typescript
public putRoutingConfiguration(value: IResolvable | BedrockAgentAliasRoutingConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.putRoutingConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration">BedrockAgentAliasRoutingConfiguration</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetRoutingConfiguration` <a name="resetRoutingConfiguration" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.resetRoutingConfiguration"></a>

```typescript
public resetRoutingConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockAgentAlias resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.isConstruct"></a>

```typescript
import { bedrockAgentAlias } from '@cdktn/provider-awscc'

bedrockAgentAlias.BedrockAgentAlias.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.isTerraformElement"></a>

```typescript
import { bedrockAgentAlias } from '@cdktn/provider-awscc'

bedrockAgentAlias.BedrockAgentAlias.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.isTerraformResource"></a>

```typescript
import { bedrockAgentAlias } from '@cdktn/provider-awscc'

bedrockAgentAlias.BedrockAgentAlias.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.generateConfigForImport"></a>

```typescript
import { bedrockAgentAlias } from '@cdktn/provider-awscc'

bedrockAgentAlias.BedrockAgentAlias.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BedrockAgentAlias resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockAgentAlias to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockAgentAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent_alias#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockAgentAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasArn">agentAliasArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasHistoryEvents">agentAliasHistoryEvents</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList">BedrockAgentAliasAgentAliasHistoryEventsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasId">agentAliasId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasStatus">agentAliasStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.routingConfiguration">routingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList">BedrockAgentAliasRoutingConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasNameInput">agentAliasNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentIdInput">agentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.routingConfigurationInput">routingConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration">BedrockAgentAliasRoutingConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasName">agentAliasName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentId">agentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `agentAliasArn`<sup>Required</sup> <a name="agentAliasArn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasArn"></a>

```typescript
public readonly agentAliasArn: string;
```

- *Type:* string

---

##### `agentAliasHistoryEvents`<sup>Required</sup> <a name="agentAliasHistoryEvents" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasHistoryEvents"></a>

```typescript
public readonly agentAliasHistoryEvents: BedrockAgentAliasAgentAliasHistoryEventsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList">BedrockAgentAliasAgentAliasHistoryEventsList</a>

---

##### `agentAliasId`<sup>Required</sup> <a name="agentAliasId" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasId"></a>

```typescript
public readonly agentAliasId: string;
```

- *Type:* string

---

##### `agentAliasStatus`<sup>Required</sup> <a name="agentAliasStatus" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasStatus"></a>

```typescript
public readonly agentAliasStatus: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `routingConfiguration`<sup>Required</sup> <a name="routingConfiguration" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.routingConfiguration"></a>

```typescript
public readonly routingConfiguration: BedrockAgentAliasRoutingConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList">BedrockAgentAliasRoutingConfigurationList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `agentAliasNameInput`<sup>Optional</sup> <a name="agentAliasNameInput" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasNameInput"></a>

```typescript
public readonly agentAliasNameInput: string;
```

- *Type:* string

---

##### `agentIdInput`<sup>Optional</sup> <a name="agentIdInput" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentIdInput"></a>

```typescript
public readonly agentIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `routingConfigurationInput`<sup>Optional</sup> <a name="routingConfigurationInput" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.routingConfigurationInput"></a>

```typescript
public readonly routingConfigurationInput: IResolvable | BedrockAgentAliasRoutingConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration">BedrockAgentAliasRoutingConfiguration</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `agentAliasName`<sup>Required</sup> <a name="agentAliasName" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasName"></a>

```typescript
public readonly agentAliasName: string;
```

- *Type:* string

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockAgentAliasAgentAliasHistoryEvents <a name="BedrockAgentAliasAgentAliasHistoryEvents" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEvents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEvents.Initializer"></a>

```typescript
import { bedrockAgentAlias } from '@cdktn/provider-awscc'

const bedrockAgentAliasAgentAliasHistoryEvents: bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEvents = { ... }
```


### BedrockAgentAliasAgentAliasHistoryEventsRoutingConfiguration <a name="BedrockAgentAliasAgentAliasHistoryEventsRoutingConfiguration" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfiguration.Initializer"></a>

```typescript
import { bedrockAgentAlias } from '@cdktn/provider-awscc'

const bedrockAgentAliasAgentAliasHistoryEventsRoutingConfiguration: bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfiguration = { ... }
```


### BedrockAgentAliasConfig <a name="BedrockAgentAliasConfig" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.Initializer"></a>

```typescript
import { bedrockAgentAlias } from '@cdktn/provider-awscc'

const bedrockAgentAliasConfig: bedrockAgentAlias.BedrockAgentAliasConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.agentAliasName">agentAliasName</a></code> | <code>string</code> | Name for a resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.agentId">agentId</a></code> | <code>string</code> | Identifier for a resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.description">description</a></code> | <code>string</code> | Description of the Resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.routingConfiguration">routingConfiguration</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration">BedrockAgentAliasRoutingConfiguration</a>[]</code> | Routing configuration for an Agent alias. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | A map of tag keys and values. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `agentAliasName`<sup>Required</sup> <a name="agentAliasName" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.agentAliasName"></a>

```typescript
public readonly agentAliasName: string;
```

- *Type:* string

Name for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent_alias#agent_alias_name BedrockAgentAlias#agent_alias_name}

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

Identifier for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent_alias#agent_id BedrockAgentAlias#agent_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent_alias#description BedrockAgentAlias#description}

---

##### `routingConfiguration`<sup>Optional</sup> <a name="routingConfiguration" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.routingConfiguration"></a>

```typescript
public readonly routingConfiguration: IResolvable | BedrockAgentAliasRoutingConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration">BedrockAgentAliasRoutingConfiguration</a>[]

Routing configuration for an Agent alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent_alias#routing_configuration BedrockAgentAlias#routing_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent_alias#tags BedrockAgentAlias#tags}

---

### BedrockAgentAliasRoutingConfiguration <a name="BedrockAgentAliasRoutingConfiguration" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration.Initializer"></a>

```typescript
import { bedrockAgentAlias } from '@cdktn/provider-awscc'

const bedrockAgentAliasRoutingConfiguration: bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration.property.agentVersion">agentVersion</a></code> | <code>string</code> | Agent Version. |

---

##### `agentVersion`<sup>Optional</sup> <a name="agentVersion" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration.property.agentVersion"></a>

```typescript
public readonly agentVersion: string;
```

- *Type:* string

Agent Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent_alias#agent_version BedrockAgentAlias#agent_version}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockAgentAliasAgentAliasHistoryEventsList <a name="BedrockAgentAliasAgentAliasHistoryEventsList" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.Initializer"></a>

```typescript
import { bedrockAgentAlias } from '@cdktn/provider-awscc'

new bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.get"></a>

```typescript
public get(index: number): BedrockAgentAliasAgentAliasHistoryEventsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### BedrockAgentAliasAgentAliasHistoryEventsOutputReference <a name="BedrockAgentAliasAgentAliasHistoryEventsOutputReference" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.Initializer"></a>

```typescript
import { bedrockAgentAlias } from '@cdktn/provider-awscc'

new bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.endDate">endDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.routingConfiguration">routingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList">BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.startDate">startDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEvents">BedrockAgentAliasAgentAliasHistoryEvents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

---

##### `routingConfiguration`<sup>Required</sup> <a name="routingConfiguration" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.routingConfiguration"></a>

```typescript
public readonly routingConfiguration: BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList">BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList</a>

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BedrockAgentAliasAgentAliasHistoryEvents;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEvents">BedrockAgentAliasAgentAliasHistoryEvents</a>

---


### BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList <a name="BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.Initializer"></a>

```typescript
import { bedrockAgentAlias } from '@cdktn/provider-awscc'

new bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.get"></a>

```typescript
public get(index: number): BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference <a name="BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockAgentAlias } from '@cdktn/provider-awscc'

new bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.property.agentVersion">agentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfiguration">BedrockAgentAliasAgentAliasHistoryEventsRoutingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentVersion`<sup>Required</sup> <a name="agentVersion" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.property.agentVersion"></a>

```typescript
public readonly agentVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BedrockAgentAliasAgentAliasHistoryEventsRoutingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfiguration">BedrockAgentAliasAgentAliasHistoryEventsRoutingConfiguration</a>

---


### BedrockAgentAliasRoutingConfigurationList <a name="BedrockAgentAliasRoutingConfigurationList" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.Initializer"></a>

```typescript
import { bedrockAgentAlias } from '@cdktn/provider-awscc'

new bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.get"></a>

```typescript
public get(index: number): BedrockAgentAliasRoutingConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration">BedrockAgentAliasRoutingConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockAgentAliasRoutingConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration">BedrockAgentAliasRoutingConfiguration</a>[]

---


### BedrockAgentAliasRoutingConfigurationOutputReference <a name="BedrockAgentAliasRoutingConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockAgentAlias } from '@cdktn/provider-awscc'

new bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.resetAgentVersion">resetAgentVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAgentVersion` <a name="resetAgentVersion" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.resetAgentVersion"></a>

```typescript
public resetAgentVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.property.agentVersionInput">agentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.property.agentVersion">agentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration">BedrockAgentAliasRoutingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentVersionInput`<sup>Optional</sup> <a name="agentVersionInput" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.property.agentVersionInput"></a>

```typescript
public readonly agentVersionInput: string;
```

- *Type:* string

---

##### `agentVersion`<sup>Required</sup> <a name="agentVersion" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.property.agentVersion"></a>

```typescript
public readonly agentVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockAgentAliasRoutingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration">BedrockAgentAliasRoutingConfiguration</a>

---



