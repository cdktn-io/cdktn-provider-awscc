# `bedrockagentcorePolicy` Submodule <a name="`bedrockagentcorePolicy` Submodule" id="@cdktn/provider-awscc.bedrockagentcorePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcorePolicy <a name="BedrockagentcorePolicy" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_policy awscc_bedrockagentcore_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer"></a>

```typescript
import { bedrockagentcorePolicy } from '@cdktn/provider-awscc'

new bedrockagentcorePolicy.BedrockagentcorePolicy(scope: Construct, id: string, config: BedrockagentcorePolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig">BedrockagentcorePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig">BedrockagentcorePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.putDefinition">putDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.resetEnforcementMode">resetEnforcementMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.resetValidationMode">resetValidationMode</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefinition` <a name="putDefinition" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.putDefinition"></a>

```typescript
public putDefinition(value: BedrockagentcorePolicyDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.putDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition">BedrockagentcorePolicyDefinition</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnforcementMode` <a name="resetEnforcementMode" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.resetEnforcementMode"></a>

```typescript
public resetEnforcementMode(): void
```

##### `resetValidationMode` <a name="resetValidationMode" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.resetValidationMode"></a>

```typescript
public resetValidationMode(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcorePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.isConstruct"></a>

```typescript
import { bedrockagentcorePolicy } from '@cdktn/provider-awscc'

bedrockagentcorePolicy.BedrockagentcorePolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.isTerraformElement"></a>

```typescript
import { bedrockagentcorePolicy } from '@cdktn/provider-awscc'

bedrockagentcorePolicy.BedrockagentcorePolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.isTerraformResource"></a>

```typescript
import { bedrockagentcorePolicy } from '@cdktn/provider-awscc'

bedrockagentcorePolicy.BedrockagentcorePolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.generateConfigForImport"></a>

```typescript
import { bedrockagentcorePolicy } from '@cdktn/provider-awscc'

bedrockagentcorePolicy.BedrockagentcorePolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BedrockagentcorePolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcorePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcorePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcorePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference">BedrockagentcorePolicyDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.policyArn">policyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.statusReasons">statusReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.definitionInput">definitionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition">BedrockagentcorePolicyDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.enforcementModeInput">enforcementModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.policyEngineIdInput">policyEngineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.validationModeInput">validationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.enforcementMode">enforcementMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.policyEngineId">policyEngineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.validationMode">validationMode</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.definition"></a>

```typescript
public readonly definition: BedrockagentcorePolicyDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference">BedrockagentcorePolicyDefinitionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.policyArn"></a>

```typescript
public readonly policyArn: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusReasons`<sup>Required</sup> <a name="statusReasons" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.statusReasons"></a>

```typescript
public readonly statusReasons: string[];
```

- *Type:* string[]

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.definitionInput"></a>

```typescript
public readonly definitionInput: IResolvable | BedrockagentcorePolicyDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition">BedrockagentcorePolicyDefinition</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enforcementModeInput`<sup>Optional</sup> <a name="enforcementModeInput" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.enforcementModeInput"></a>

```typescript
public readonly enforcementModeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyEngineIdInput`<sup>Optional</sup> <a name="policyEngineIdInput" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.policyEngineIdInput"></a>

```typescript
public readonly policyEngineIdInput: string;
```

- *Type:* string

---

##### `validationModeInput`<sup>Optional</sup> <a name="validationModeInput" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.validationModeInput"></a>

```typescript
public readonly validationModeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enforcementMode`<sup>Required</sup> <a name="enforcementMode" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.enforcementMode"></a>

```typescript
public readonly enforcementMode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyEngineId`<sup>Required</sup> <a name="policyEngineId" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.policyEngineId"></a>

```typescript
public readonly policyEngineId: string;
```

- *Type:* string

---

##### `validationMode`<sup>Required</sup> <a name="validationMode" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.validationMode"></a>

```typescript
public readonly validationMode: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcorePolicyConfig <a name="BedrockagentcorePolicyConfig" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.Initializer"></a>

```typescript
import { bedrockagentcorePolicy } from '@cdktn/provider-awscc'

const bedrockagentcorePolicyConfig: bedrockagentcorePolicy.BedrockagentcorePolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition">BedrockagentcorePolicyDefinition</a></code> | The definition structure for policies. Encapsulates different policy formats. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.name">name</a></code> | <code>string</code> | The customer-assigned immutable name for the policy. Must be unique within the policy engine. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.policyEngineId">policyEngineId</a></code> | <code>string</code> | The identifier of the policy engine which contains this policy. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.description">description</a></code> | <code>string</code> | A human-readable description of the policy's purpose and functionality. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.enforcementMode">enforcementMode</a></code> | <code>string</code> | Whether the policy contributes to the enforce decision returned to Gateway. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.validationMode">validationMode</a></code> | <code>string</code> | The validation mode for the policy. Determines how Cedar analyzer validation results are handled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.definition"></a>

```typescript
public readonly definition: BedrockagentcorePolicyDefinition;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition">BedrockagentcorePolicyDefinition</a>

The definition structure for policies. Encapsulates different policy formats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_policy#definition BedrockagentcorePolicy#definition}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The customer-assigned immutable name for the policy. Must be unique within the policy engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_policy#name BedrockagentcorePolicy#name}

---

##### `policyEngineId`<sup>Required</sup> <a name="policyEngineId" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.policyEngineId"></a>

```typescript
public readonly policyEngineId: string;
```

- *Type:* string

The identifier of the policy engine which contains this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_policy#policy_engine_id BedrockagentcorePolicy#policy_engine_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description of the policy's purpose and functionality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_policy#description BedrockagentcorePolicy#description}

---

##### `enforcementMode`<sup>Optional</sup> <a name="enforcementMode" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.enforcementMode"></a>

```typescript
public readonly enforcementMode: string;
```

- *Type:* string

Whether the policy contributes to the enforce decision returned to Gateway.

LOG_ONLY policies are still evaluated but their decisions are observed only, allowing customers to validate a policy against real traffic before promoting it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_policy#enforcement_mode BedrockagentcorePolicy#enforcement_mode}

---

##### `validationMode`<sup>Optional</sup> <a name="validationMode" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.validationMode"></a>

```typescript
public readonly validationMode: string;
```

- *Type:* string

The validation mode for the policy. Determines how Cedar analyzer validation results are handled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_policy#validation_mode BedrockagentcorePolicy#validation_mode}

---

### BedrockagentcorePolicyDefinition <a name="BedrockagentcorePolicyDefinition" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition.Initializer"></a>

```typescript
import { bedrockagentcorePolicy } from '@cdktn/provider-awscc'

const bedrockagentcorePolicyDefinition: bedrockagentcorePolicy.BedrockagentcorePolicyDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition.property.cedar">cedar</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar">BedrockagentcorePolicyDefinitionCedar</a></code> | A Cedar policy statement within the AgentCore Policy system. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition.property.policy">policy</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicy">BedrockagentcorePolicyDefinitionPolicy</a></code> | A policy statement within the AgentCore Policy system. |

---

##### `cedar`<sup>Optional</sup> <a name="cedar" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition.property.cedar"></a>

```typescript
public readonly cedar: BedrockagentcorePolicyDefinitionCedar;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar">BedrockagentcorePolicyDefinitionCedar</a>

A Cedar policy statement within the AgentCore Policy system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_policy#cedar BedrockagentcorePolicy#cedar}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition.property.policy"></a>

```typescript
public readonly policy: BedrockagentcorePolicyDefinitionPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicy">BedrockagentcorePolicyDefinitionPolicy</a>

A policy statement within the AgentCore Policy system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_policy#policy BedrockagentcorePolicy#policy}

---

### BedrockagentcorePolicyDefinitionCedar <a name="BedrockagentcorePolicyDefinitionCedar" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar.Initializer"></a>

```typescript
import { bedrockagentcorePolicy } from '@cdktn/provider-awscc'

const bedrockagentcorePolicyDefinitionCedar: bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar.property.statement">statement</a></code> | <code>string</code> | The Cedar policy statement that defines the authorization logic. |

---

##### `statement`<sup>Optional</sup> <a name="statement" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar.property.statement"></a>

```typescript
public readonly statement: string;
```

- *Type:* string

The Cedar policy statement that defines the authorization logic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_policy#statement BedrockagentcorePolicy#statement}

---

### BedrockagentcorePolicyDefinitionPolicy <a name="BedrockagentcorePolicyDefinitionPolicy" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicy.Initializer"></a>

```typescript
import { bedrockagentcorePolicy } from '@cdktn/provider-awscc'

const bedrockagentcorePolicyDefinitionPolicy: bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicy.property.statement">statement</a></code> | <code>string</code> | The policy statement. |

---

##### `statement`<sup>Optional</sup> <a name="statement" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicy.property.statement"></a>

```typescript
public readonly statement: string;
```

- *Type:* string

The policy statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_policy#statement BedrockagentcorePolicy#statement}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcorePolicyDefinitionCedarOutputReference <a name="BedrockagentcorePolicyDefinitionCedarOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.Initializer"></a>

```typescript
import { bedrockagentcorePolicy } from '@cdktn/provider-awscc'

new bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.resetStatement">resetStatement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStatement` <a name="resetStatement" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.resetStatement"></a>

```typescript
public resetStatement(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.property.statementInput">statementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.property.statement">statement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar">BedrockagentcorePolicyDefinitionCedar</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statementInput`<sup>Optional</sup> <a name="statementInput" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.property.statementInput"></a>

```typescript
public readonly statementInput: string;
```

- *Type:* string

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.property.statement"></a>

```typescript
public readonly statement: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcorePolicyDefinitionCedar;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar">BedrockagentcorePolicyDefinitionCedar</a>

---


### BedrockagentcorePolicyDefinitionOutputReference <a name="BedrockagentcorePolicyDefinitionOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.Initializer"></a>

```typescript
import { bedrockagentcorePolicy } from '@cdktn/provider-awscc'

new bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.putCedar">putCedar</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.putPolicy">putPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.resetCedar">resetCedar</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.resetPolicy">resetPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCedar` <a name="putCedar" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.putCedar"></a>

```typescript
public putCedar(value: BedrockagentcorePolicyDefinitionCedar): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.putCedar.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar">BedrockagentcorePolicyDefinitionCedar</a>

---

##### `putPolicy` <a name="putPolicy" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.putPolicy"></a>

```typescript
public putPolicy(value: BedrockagentcorePolicyDefinitionPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.putPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicy">BedrockagentcorePolicyDefinitionPolicy</a>

---

##### `resetCedar` <a name="resetCedar" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.resetCedar"></a>

```typescript
public resetCedar(): void
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.resetPolicy"></a>

```typescript
public resetPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.cedar">cedar</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference">BedrockagentcorePolicyDefinitionCedarOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.policy">policy</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference">BedrockagentcorePolicyDefinitionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.cedarInput">cedarInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar">BedrockagentcorePolicyDefinitionCedar</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.policyInput">policyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicy">BedrockagentcorePolicyDefinitionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition">BedrockagentcorePolicyDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cedar`<sup>Required</sup> <a name="cedar" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.cedar"></a>

```typescript
public readonly cedar: BedrockagentcorePolicyDefinitionCedarOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference">BedrockagentcorePolicyDefinitionCedarOutputReference</a>

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.policy"></a>

```typescript
public readonly policy: BedrockagentcorePolicyDefinitionPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference">BedrockagentcorePolicyDefinitionPolicyOutputReference</a>

---

##### `cedarInput`<sup>Optional</sup> <a name="cedarInput" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.cedarInput"></a>

```typescript
public readonly cedarInput: IResolvable | BedrockagentcorePolicyDefinitionCedar;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar">BedrockagentcorePolicyDefinitionCedar</a>

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.policyInput"></a>

```typescript
public readonly policyInput: IResolvable | BedrockagentcorePolicyDefinitionPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicy">BedrockagentcorePolicyDefinitionPolicy</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcorePolicyDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition">BedrockagentcorePolicyDefinition</a>

---


### BedrockagentcorePolicyDefinitionPolicyOutputReference <a name="BedrockagentcorePolicyDefinitionPolicyOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.Initializer"></a>

```typescript
import { bedrockagentcorePolicy } from '@cdktn/provider-awscc'

new bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.resetStatement">resetStatement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStatement` <a name="resetStatement" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.resetStatement"></a>

```typescript
public resetStatement(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.property.statementInput">statementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.property.statement">statement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicy">BedrockagentcorePolicyDefinitionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statementInput`<sup>Optional</sup> <a name="statementInput" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.property.statementInput"></a>

```typescript
public readonly statementInput: string;
```

- *Type:* string

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.property.statement"></a>

```typescript
public readonly statement: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcorePolicyDefinitionPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicy">BedrockagentcorePolicyDefinitionPolicy</a>

---



