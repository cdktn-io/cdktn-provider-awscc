# `wisdomAiGuardrailVersion` Submodule <a name="`wisdomAiGuardrailVersion` Submodule" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WisdomAiGuardrailVersion <a name="WisdomAiGuardrailVersion" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_ai_guardrail_version awscc_wisdom_ai_guardrail_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.Initializer"></a>

```typescript
import { wisdomAiGuardrailVersion } from '@cdktn/provider-awscc'

new wisdomAiGuardrailVersion.WisdomAiGuardrailVersion(scope: Construct, id: string, config: WisdomAiGuardrailVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersionConfig">WisdomAiGuardrailVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersionConfig">WisdomAiGuardrailVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.resetModifiedTimeSeconds">resetModifiedTimeSeconds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetModifiedTimeSeconds` <a name="resetModifiedTimeSeconds" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.resetModifiedTimeSeconds"></a>

```typescript
public resetModifiedTimeSeconds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WisdomAiGuardrailVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.isConstruct"></a>

```typescript
import { wisdomAiGuardrailVersion } from '@cdktn/provider-awscc'

wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.isTerraformElement"></a>

```typescript
import { wisdomAiGuardrailVersion } from '@cdktn/provider-awscc'

wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.isTerraformResource"></a>

```typescript
import { wisdomAiGuardrailVersion } from '@cdktn/provider-awscc'

wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.generateConfigForImport"></a>

```typescript
import { wisdomAiGuardrailVersion } from '@cdktn/provider-awscc'

wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a WisdomAiGuardrailVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WisdomAiGuardrailVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WisdomAiGuardrailVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_ai_guardrail_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WisdomAiGuardrailVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.aiGuardrailArn">aiGuardrailArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.aiGuardrailVersionId">aiGuardrailVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.assistantArn">assistantArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.versionNumber">versionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.aiGuardrailIdInput">aiGuardrailIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.assistantIdInput">assistantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.modifiedTimeSecondsInput">modifiedTimeSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.aiGuardrailId">aiGuardrailId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.assistantId">assistantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.modifiedTimeSeconds">modifiedTimeSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `aiGuardrailArn`<sup>Required</sup> <a name="aiGuardrailArn" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.aiGuardrailArn"></a>

```typescript
public readonly aiGuardrailArn: string;
```

- *Type:* string

---

##### `aiGuardrailVersionId`<sup>Required</sup> <a name="aiGuardrailVersionId" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.aiGuardrailVersionId"></a>

```typescript
public readonly aiGuardrailVersionId: string;
```

- *Type:* string

---

##### `assistantArn`<sup>Required</sup> <a name="assistantArn" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.assistantArn"></a>

```typescript
public readonly assistantArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.versionNumber"></a>

```typescript
public readonly versionNumber: number;
```

- *Type:* number

---

##### `aiGuardrailIdInput`<sup>Optional</sup> <a name="aiGuardrailIdInput" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.aiGuardrailIdInput"></a>

```typescript
public readonly aiGuardrailIdInput: string;
```

- *Type:* string

---

##### `assistantIdInput`<sup>Optional</sup> <a name="assistantIdInput" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.assistantIdInput"></a>

```typescript
public readonly assistantIdInput: string;
```

- *Type:* string

---

##### `modifiedTimeSecondsInput`<sup>Optional</sup> <a name="modifiedTimeSecondsInput" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.modifiedTimeSecondsInput"></a>

```typescript
public readonly modifiedTimeSecondsInput: number;
```

- *Type:* number

---

##### `aiGuardrailId`<sup>Required</sup> <a name="aiGuardrailId" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.aiGuardrailId"></a>

```typescript
public readonly aiGuardrailId: string;
```

- *Type:* string

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.assistantId"></a>

```typescript
public readonly assistantId: string;
```

- *Type:* string

---

##### `modifiedTimeSeconds`<sup>Required</sup> <a name="modifiedTimeSeconds" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.modifiedTimeSeconds"></a>

```typescript
public readonly modifiedTimeSeconds: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WisdomAiGuardrailVersionConfig <a name="WisdomAiGuardrailVersionConfig" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersionConfig.Initializer"></a>

```typescript
import { wisdomAiGuardrailVersion } from '@cdktn/provider-awscc'

const wisdomAiGuardrailVersionConfig: wisdomAiGuardrailVersion.WisdomAiGuardrailVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersionConfig.property.aiGuardrailId">aiGuardrailId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_ai_guardrail_version#ai_guardrail_id WisdomAiGuardrailVersion#ai_guardrail_id}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersionConfig.property.assistantId">assistantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_ai_guardrail_version#assistant_id WisdomAiGuardrailVersion#assistant_id}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersionConfig.property.modifiedTimeSeconds">modifiedTimeSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_ai_guardrail_version#modified_time_seconds WisdomAiGuardrailVersion#modified_time_seconds}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `aiGuardrailId`<sup>Required</sup> <a name="aiGuardrailId" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersionConfig.property.aiGuardrailId"></a>

```typescript
public readonly aiGuardrailId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_ai_guardrail_version#ai_guardrail_id WisdomAiGuardrailVersion#ai_guardrail_id}.

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersionConfig.property.assistantId"></a>

```typescript
public readonly assistantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_ai_guardrail_version#assistant_id WisdomAiGuardrailVersion#assistant_id}.

---

##### `modifiedTimeSeconds`<sup>Optional</sup> <a name="modifiedTimeSeconds" id="@cdktn/provider-awscc.wisdomAiGuardrailVersion.WisdomAiGuardrailVersionConfig.property.modifiedTimeSeconds"></a>

```typescript
public readonly modifiedTimeSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_ai_guardrail_version#modified_time_seconds WisdomAiGuardrailVersion#modified_time_seconds}.

---



