# `bedrockagentcoreRuntimeEndpoint` Submodule <a name="`bedrockagentcoreRuntimeEndpoint` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreRuntimeEndpoint <a name="BedrockagentcoreRuntimeEndpoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime_endpoint awscc_bedrockagentcore_runtime_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer"></a>

```typescript
import { bedrockagentcoreRuntimeEndpoint } from '@cdktn/provider-awscc'

new bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint(scope: Construct, id: string, config: BedrockagentcoreRuntimeEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig">BedrockagentcoreRuntimeEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig">BedrockagentcoreRuntimeEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.resetAgentRuntimeVersion">resetAgentRuntimeVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAgentRuntimeVersion` <a name="resetAgentRuntimeVersion" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.resetAgentRuntimeVersion"></a>

```typescript
public resetAgentRuntimeVersion(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreRuntimeEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.isConstruct"></a>

```typescript
import { bedrockagentcoreRuntimeEndpoint } from '@cdktn/provider-awscc'

bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.isTerraformElement"></a>

```typescript
import { bedrockagentcoreRuntimeEndpoint } from '@cdktn/provider-awscc'

bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.isTerraformResource"></a>

```typescript
import { bedrockagentcoreRuntimeEndpoint } from '@cdktn/provider-awscc'

bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.generateConfigForImport"></a>

```typescript
import { bedrockagentcoreRuntimeEndpoint } from '@cdktn/provider-awscc'

bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BedrockagentcoreRuntimeEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcoreRuntimeEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcoreRuntimeEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreRuntimeEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeArn">agentRuntimeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeEndpointArn">agentRuntimeEndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.failureReason">failureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.liveVersion">liveVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.runtimeEndpointId">runtimeEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.targetVersion">targetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeIdInput">agentRuntimeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeVersionInput">agentRuntimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeId">agentRuntimeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeVersion">agentRuntimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `agentRuntimeArn`<sup>Required</sup> <a name="agentRuntimeArn" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeArn"></a>

```typescript
public readonly agentRuntimeArn: string;
```

- *Type:* string

---

##### `agentRuntimeEndpointArn`<sup>Required</sup> <a name="agentRuntimeEndpointArn" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeEndpointArn"></a>

```typescript
public readonly agentRuntimeEndpointArn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.failureReason"></a>

```typescript
public readonly failureReason: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.lastUpdatedAt"></a>

```typescript
public readonly lastUpdatedAt: string;
```

- *Type:* string

---

##### `liveVersion`<sup>Required</sup> <a name="liveVersion" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.liveVersion"></a>

```typescript
public readonly liveVersion: string;
```

- *Type:* string

---

##### `runtimeEndpointId`<sup>Required</sup> <a name="runtimeEndpointId" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.runtimeEndpointId"></a>

```typescript
public readonly runtimeEndpointId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `targetVersion`<sup>Required</sup> <a name="targetVersion" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.targetVersion"></a>

```typescript
public readonly targetVersion: string;
```

- *Type:* string

---

##### `agentRuntimeIdInput`<sup>Optional</sup> <a name="agentRuntimeIdInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeIdInput"></a>

```typescript
public readonly agentRuntimeIdInput: string;
```

- *Type:* string

---

##### `agentRuntimeVersionInput`<sup>Optional</sup> <a name="agentRuntimeVersionInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeVersionInput"></a>

```typescript
public readonly agentRuntimeVersionInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `agentRuntimeId`<sup>Required</sup> <a name="agentRuntimeId" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeId"></a>

```typescript
public readonly agentRuntimeId: string;
```

- *Type:* string

---

##### `agentRuntimeVersion`<sup>Required</sup> <a name="agentRuntimeVersion" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeVersion"></a>

```typescript
public readonly agentRuntimeVersion: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreRuntimeEndpointConfig <a name="BedrockagentcoreRuntimeEndpointConfig" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.Initializer"></a>

```typescript
import { bedrockagentcoreRuntimeEndpoint } from '@cdktn/provider-awscc'

const bedrockagentcoreRuntimeEndpointConfig: bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.agentRuntimeId">agentRuntimeId</a></code> | <code>string</code> | The ID of the parent Agent Runtime (required for creation). |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.name">name</a></code> | <code>string</code> | The name of the Agent Runtime Endpoint. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.agentRuntimeVersion">agentRuntimeVersion</a></code> | <code>string</code> | The version of the AgentCore Runtime to use for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.description">description</a></code> | <code>string</code> | The description of the AgentCore Runtime endpoint. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | A map of tag keys and values. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `agentRuntimeId`<sup>Required</sup> <a name="agentRuntimeId" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.agentRuntimeId"></a>

```typescript
public readonly agentRuntimeId: string;
```

- *Type:* string

The ID of the parent Agent Runtime (required for creation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime_endpoint#agent_runtime_id BedrockagentcoreRuntimeEndpoint#agent_runtime_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Agent Runtime Endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime_endpoint#name BedrockagentcoreRuntimeEndpoint#name}

---

##### `agentRuntimeVersion`<sup>Optional</sup> <a name="agentRuntimeVersion" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.agentRuntimeVersion"></a>

```typescript
public readonly agentRuntimeVersion: string;
```

- *Type:* string

The version of the AgentCore Runtime to use for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime_endpoint#agent_runtime_version BedrockagentcoreRuntimeEndpoint#agent_runtime_version}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the AgentCore Runtime endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime_endpoint#description BedrockagentcoreRuntimeEndpoint#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime_endpoint#tags BedrockagentcoreRuntimeEndpoint#tags}

---



