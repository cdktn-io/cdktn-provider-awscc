# `vpclatticeRule` Submodule <a name="`vpclatticeRule` Submodule" id="@cdktn/provider-awscc.vpclatticeRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeRule <a name="VpclatticeRule" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule awscc_vpclattice_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.Initializer"></a>

```typescript
import { vpclatticeRule } from '@cdktn/provider-awscc'

new vpclatticeRule.VpclatticeRule(scope: Construct, id: string, config: VpclatticeRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig">VpclatticeRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig">VpclatticeRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.resetListenerIdentifier">resetListenerIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.resetServiceIdentifier">resetServiceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.putAction"></a>

```typescript
public putAction(value: VpclatticeRuleAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleAction">VpclatticeRuleAction</a>

---

##### `putMatch` <a name="putMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.putMatch"></a>

```typescript
public putMatch(value: VpclatticeRuleMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatch">VpclatticeRuleMatch</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.putTags"></a>

```typescript
public putTags(value: IResolvable | VpclatticeRuleTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTags">VpclatticeRuleTags</a>[]

---

##### `resetListenerIdentifier` <a name="resetListenerIdentifier" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.resetListenerIdentifier"></a>

```typescript
public resetListenerIdentifier(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.resetName"></a>

```typescript
public resetName(): void
```

##### `resetServiceIdentifier` <a name="resetServiceIdentifier" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.resetServiceIdentifier"></a>

```typescript
public resetServiceIdentifier(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VpclatticeRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.isConstruct"></a>

```typescript
import { vpclatticeRule } from '@cdktn/provider-awscc'

vpclatticeRule.VpclatticeRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.isTerraformElement"></a>

```typescript
import { vpclatticeRule } from '@cdktn/provider-awscc'

vpclatticeRule.VpclatticeRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.isTerraformResource"></a>

```typescript
import { vpclatticeRule } from '@cdktn/provider-awscc'

vpclatticeRule.VpclatticeRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.generateConfigForImport"></a>

```typescript
import { vpclatticeRule } from '@cdktn/provider-awscc'

vpclatticeRule.VpclatticeRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a VpclatticeRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpclatticeRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpclatticeRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the VpclatticeRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference">VpclatticeRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.match">match</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference">VpclatticeRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList">VpclatticeRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.actionInput">actionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleAction">VpclatticeRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.listenerIdentifierInput">listenerIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.matchInput">matchInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatch">VpclatticeRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.serviceIdentifierInput">serviceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTags">VpclatticeRuleTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.listenerIdentifier">listenerIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.serviceIdentifier">serviceIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.action"></a>

```typescript
public readonly action: VpclatticeRuleActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference">VpclatticeRuleActionOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.match"></a>

```typescript
public readonly match: VpclatticeRuleMatchOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference">VpclatticeRuleMatchOutputReference</a>

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.tags"></a>

```typescript
public readonly tags: VpclatticeRuleTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList">VpclatticeRuleTagsList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.actionInput"></a>

```typescript
public readonly actionInput: IResolvable | VpclatticeRuleAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleAction">VpclatticeRuleAction</a>

---

##### `listenerIdentifierInput`<sup>Optional</sup> <a name="listenerIdentifierInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.listenerIdentifierInput"></a>

```typescript
public readonly listenerIdentifierInput: string;
```

- *Type:* string

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.matchInput"></a>

```typescript
public readonly matchInput: IResolvable | VpclatticeRuleMatch;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatch">VpclatticeRuleMatch</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `serviceIdentifierInput`<sup>Optional</sup> <a name="serviceIdentifierInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.serviceIdentifierInput"></a>

```typescript
public readonly serviceIdentifierInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | VpclatticeRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTags">VpclatticeRuleTags</a>[]

---

##### `listenerIdentifier`<sup>Required</sup> <a name="listenerIdentifier" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.listenerIdentifier"></a>

```typescript
public readonly listenerIdentifier: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `serviceIdentifier`<sup>Required</sup> <a name="serviceIdentifier" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.serviceIdentifier"></a>

```typescript
public readonly serviceIdentifier: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeRuleAction <a name="VpclatticeRuleAction" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleAction.Initializer"></a>

```typescript
import { vpclatticeRule } from '@cdktn/provider-awscc'

const vpclatticeRuleAction: vpclatticeRule.VpclatticeRuleAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleAction.property.fixedResponse">fixedResponse</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponse">VpclatticeRuleActionFixedResponse</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#fixed_response VpclatticeRule#fixed_response}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleAction.property.forward">forward</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForward">VpclatticeRuleActionForward</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#forward VpclatticeRule#forward}. |

---

##### `fixedResponse`<sup>Optional</sup> <a name="fixedResponse" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleAction.property.fixedResponse"></a>

```typescript
public readonly fixedResponse: VpclatticeRuleActionFixedResponse;
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponse">VpclatticeRuleActionFixedResponse</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#fixed_response VpclatticeRule#fixed_response}.

---

##### `forward`<sup>Optional</sup> <a name="forward" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleAction.property.forward"></a>

```typescript
public readonly forward: VpclatticeRuleActionForward;
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForward">VpclatticeRuleActionForward</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#forward VpclatticeRule#forward}.

---

### VpclatticeRuleActionFixedResponse <a name="VpclatticeRuleActionFixedResponse" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponse.Initializer"></a>

```typescript
import { vpclatticeRule } from '@cdktn/provider-awscc'

const vpclatticeRuleActionFixedResponse: vpclatticeRule.VpclatticeRuleActionFixedResponse = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponse.property.statusCode">statusCode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#status_code VpclatticeRule#status_code}. |

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponse.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#status_code VpclatticeRule#status_code}.

---

### VpclatticeRuleActionForward <a name="VpclatticeRuleActionForward" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForward"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForward.Initializer"></a>

```typescript
import { vpclatticeRule } from '@cdktn/provider-awscc'

const vpclatticeRuleActionForward: vpclatticeRule.VpclatticeRuleActionForward = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForward.property.targetGroups">targetGroups</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroups">VpclatticeRuleActionForwardTargetGroups</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#target_groups VpclatticeRule#target_groups}. |

---

##### `targetGroups`<sup>Optional</sup> <a name="targetGroups" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForward.property.targetGroups"></a>

```typescript
public readonly targetGroups: IResolvable | VpclatticeRuleActionForwardTargetGroups[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroups">VpclatticeRuleActionForwardTargetGroups</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#target_groups VpclatticeRule#target_groups}.

---

### VpclatticeRuleActionForwardTargetGroups <a name="VpclatticeRuleActionForwardTargetGroups" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroups.Initializer"></a>

```typescript
import { vpclatticeRule } from '@cdktn/provider-awscc'

const vpclatticeRuleActionForwardTargetGroups: vpclatticeRule.VpclatticeRuleActionForwardTargetGroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroups.property.targetGroupIdentifier">targetGroupIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#target_group_identifier VpclatticeRule#target_group_identifier}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroups.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#weight VpclatticeRule#weight}. |

---

##### `targetGroupIdentifier`<sup>Optional</sup> <a name="targetGroupIdentifier" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroups.property.targetGroupIdentifier"></a>

```typescript
public readonly targetGroupIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#target_group_identifier VpclatticeRule#target_group_identifier}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroups.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#weight VpclatticeRule#weight}.

---

### VpclatticeRuleConfig <a name="VpclatticeRuleConfig" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.Initializer"></a>

```typescript
import { vpclatticeRule } from '@cdktn/provider-awscc'

const vpclatticeRuleConfig: vpclatticeRule.VpclatticeRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleAction">VpclatticeRuleAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#action VpclatticeRule#action}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.match">match</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatch">VpclatticeRuleMatch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#match VpclatticeRule#match}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#priority VpclatticeRule#priority}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.listenerIdentifier">listenerIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#listener_identifier VpclatticeRule#listener_identifier}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#name VpclatticeRule#name}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.serviceIdentifier">serviceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#service_identifier VpclatticeRule#service_identifier}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTags">VpclatticeRuleTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#tags VpclatticeRule#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.action"></a>

```typescript
public readonly action: VpclatticeRuleAction;
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleAction">VpclatticeRuleAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#action VpclatticeRule#action}.

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.match"></a>

```typescript
public readonly match: VpclatticeRuleMatch;
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatch">VpclatticeRuleMatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#match VpclatticeRule#match}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#priority VpclatticeRule#priority}.

---

##### `listenerIdentifier`<sup>Optional</sup> <a name="listenerIdentifier" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.listenerIdentifier"></a>

```typescript
public readonly listenerIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#listener_identifier VpclatticeRule#listener_identifier}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#name VpclatticeRule#name}.

---

##### `serviceIdentifier`<sup>Optional</sup> <a name="serviceIdentifier" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.serviceIdentifier"></a>

```typescript
public readonly serviceIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#service_identifier VpclatticeRule#service_identifier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | VpclatticeRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTags">VpclatticeRuleTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#tags VpclatticeRule#tags}.

---

### VpclatticeRuleMatch <a name="VpclatticeRuleMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatch.Initializer"></a>

```typescript
import { vpclatticeRule } from '@cdktn/provider-awscc'

const vpclatticeRuleMatch: vpclatticeRule.VpclatticeRuleMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatch.property.httpMatch">httpMatch</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatch">VpclatticeRuleMatchHttpMatch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#http_match VpclatticeRule#http_match}. |

---

##### `httpMatch`<sup>Required</sup> <a name="httpMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatch.property.httpMatch"></a>

```typescript
public readonly httpMatch: VpclatticeRuleMatchHttpMatch;
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatch">VpclatticeRuleMatchHttpMatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#http_match VpclatticeRule#http_match}.

---

### VpclatticeRuleMatchHttpMatch <a name="VpclatticeRuleMatchHttpMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatch.Initializer"></a>

```typescript
import { vpclatticeRule } from '@cdktn/provider-awscc'

const vpclatticeRuleMatchHttpMatch: vpclatticeRule.VpclatticeRuleMatchHttpMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatch.property.headerMatches">headerMatches</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches">VpclatticeRuleMatchHttpMatchHeaderMatches</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#header_matches VpclatticeRule#header_matches}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatch.property.method">method</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#method VpclatticeRule#method}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatch.property.pathMatch">pathMatch</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatch">VpclatticeRuleMatchHttpMatchPathMatch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#path_match VpclatticeRule#path_match}. |

---

##### `headerMatches`<sup>Optional</sup> <a name="headerMatches" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatch.property.headerMatches"></a>

```typescript
public readonly headerMatches: IResolvable | VpclatticeRuleMatchHttpMatchHeaderMatches[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches">VpclatticeRuleMatchHttpMatchHeaderMatches</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#header_matches VpclatticeRule#header_matches}.

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatch.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#method VpclatticeRule#method}.

---

##### `pathMatch`<sup>Optional</sup> <a name="pathMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatch.property.pathMatch"></a>

```typescript
public readonly pathMatch: VpclatticeRuleMatchHttpMatchPathMatch;
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatch">VpclatticeRuleMatchHttpMatchPathMatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#path_match VpclatticeRule#path_match}.

---

### VpclatticeRuleMatchHttpMatchHeaderMatches <a name="VpclatticeRuleMatchHttpMatchHeaderMatches" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches.Initializer"></a>

```typescript
import { vpclatticeRule } from '@cdktn/provider-awscc'

const vpclatticeRuleMatchHttpMatchHeaderMatches: vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches.property.caseSensitive">caseSensitive</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#case_sensitive VpclatticeRule#case_sensitive}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches.property.match">match</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatch">VpclatticeRuleMatchHttpMatchHeaderMatchesMatch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#match VpclatticeRule#match}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#name VpclatticeRule#name}. |

---

##### `caseSensitive`<sup>Optional</sup> <a name="caseSensitive" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches.property.caseSensitive"></a>

```typescript
public readonly caseSensitive: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#case_sensitive VpclatticeRule#case_sensitive}.

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches.property.match"></a>

```typescript
public readonly match: VpclatticeRuleMatchHttpMatchHeaderMatchesMatch;
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatch">VpclatticeRuleMatchHttpMatchHeaderMatchesMatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#match VpclatticeRule#match}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#name VpclatticeRule#name}.

---

### VpclatticeRuleMatchHttpMatchHeaderMatchesMatch <a name="VpclatticeRuleMatchHttpMatchHeaderMatchesMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatch.Initializer"></a>

```typescript
import { vpclatticeRule } from '@cdktn/provider-awscc'

const vpclatticeRuleMatchHttpMatchHeaderMatchesMatch: vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatch.property.contains">contains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#contains VpclatticeRule#contains}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatch.property.exact">exact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#exact VpclatticeRule#exact}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatch.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#prefix VpclatticeRule#prefix}. |

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatch.property.contains"></a>

```typescript
public readonly contains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#contains VpclatticeRule#contains}.

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatch.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#exact VpclatticeRule#exact}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatch.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#prefix VpclatticeRule#prefix}.

---

### VpclatticeRuleMatchHttpMatchPathMatch <a name="VpclatticeRuleMatchHttpMatchPathMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatch.Initializer"></a>

```typescript
import { vpclatticeRule } from '@cdktn/provider-awscc'

const vpclatticeRuleMatchHttpMatchPathMatch: vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatch.property.caseSensitive">caseSensitive</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#case_sensitive VpclatticeRule#case_sensitive}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatch.property.match">match</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatch">VpclatticeRuleMatchHttpMatchPathMatchMatch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#match VpclatticeRule#match}. |

---

##### `caseSensitive`<sup>Optional</sup> <a name="caseSensitive" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatch.property.caseSensitive"></a>

```typescript
public readonly caseSensitive: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#case_sensitive VpclatticeRule#case_sensitive}.

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatch.property.match"></a>

```typescript
public readonly match: VpclatticeRuleMatchHttpMatchPathMatchMatch;
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatch">VpclatticeRuleMatchHttpMatchPathMatchMatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#match VpclatticeRule#match}.

---

### VpclatticeRuleMatchHttpMatchPathMatchMatch <a name="VpclatticeRuleMatchHttpMatchPathMatchMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatch.Initializer"></a>

```typescript
import { vpclatticeRule } from '@cdktn/provider-awscc'

const vpclatticeRuleMatchHttpMatchPathMatchMatch: vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatch.property.exact">exact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#exact VpclatticeRule#exact}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatch.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#prefix VpclatticeRule#prefix}. |

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatch.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#exact VpclatticeRule#exact}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatch.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#prefix VpclatticeRule#prefix}.

---

### VpclatticeRuleTags <a name="VpclatticeRuleTags" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTags.Initializer"></a>

```typescript
import { vpclatticeRule } from '@cdktn/provider-awscc'

const vpclatticeRuleTags: vpclatticeRule.VpclatticeRuleTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#key VpclatticeRule#key}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#value VpclatticeRule#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#key VpclatticeRule#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_rule#value VpclatticeRule#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeRuleActionFixedResponseOutputReference <a name="VpclatticeRuleActionFixedResponseOutputReference" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.Initializer"></a>

```typescript
import { vpclatticeRule } from '@cdktn/provider-awscc'

new vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.resetStatusCode"></a>

```typescript
public resetStatusCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.property.statusCode">statusCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponse">VpclatticeRuleActionFixedResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: number;
```

- *Type:* number

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpclatticeRuleActionFixedResponse;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponse">VpclatticeRuleActionFixedResponse</a>

---


### VpclatticeRuleActionForwardOutputReference <a name="VpclatticeRuleActionForwardOutputReference" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.Initializer"></a>

```typescript
import { vpclatticeRule } from '@cdktn/provider-awscc'

new vpclatticeRule.VpclatticeRuleActionForwardOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.putTargetGroups">putTargetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.resetTargetGroups">resetTargetGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetGroups` <a name="putTargetGroups" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.putTargetGroups"></a>

```typescript
public putTargetGroups(value: IResolvable | VpclatticeRuleActionForwardTargetGroups[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.putTargetGroups.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroups">VpclatticeRuleActionForwardTargetGroups</a>[]

---

##### `resetTargetGroups` <a name="resetTargetGroups" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.resetTargetGroups"></a>

```typescript
public resetTargetGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.property.targetGroups">targetGroups</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList">VpclatticeRuleActionForwardTargetGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.property.targetGroupsInput">targetGroupsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroups">VpclatticeRuleActionForwardTargetGroups</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForward">VpclatticeRuleActionForward</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetGroups`<sup>Required</sup> <a name="targetGroups" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.property.targetGroups"></a>

```typescript
public readonly targetGroups: VpclatticeRuleActionForwardTargetGroupsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList">VpclatticeRuleActionForwardTargetGroupsList</a>

---

##### `targetGroupsInput`<sup>Optional</sup> <a name="targetGroupsInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.property.targetGroupsInput"></a>

```typescript
public readonly targetGroupsInput: IResolvable | VpclatticeRuleActionForwardTargetGroups[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroups">VpclatticeRuleActionForwardTargetGroups</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpclatticeRuleActionForward;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForward">VpclatticeRuleActionForward</a>

---


### VpclatticeRuleActionForwardTargetGroupsList <a name="VpclatticeRuleActionForwardTargetGroupsList" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.Initializer"></a>

```typescript
import { vpclatticeRule } from '@cdktn/provider-awscc'

new vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.get"></a>

```typescript
public get(index: number): VpclatticeRuleActionForwardTargetGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroups">VpclatticeRuleActionForwardTargetGroups</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpclatticeRuleActionForwardTargetGroups[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroups">VpclatticeRuleActionForwardTargetGroups</a>[]

---


### VpclatticeRuleActionForwardTargetGroupsOutputReference <a name="VpclatticeRuleActionForwardTargetGroupsOutputReference" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer"></a>

```typescript
import { vpclatticeRule } from '@cdktn/provider-awscc'

new vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.resetTargetGroupIdentifier">resetTargetGroupIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTargetGroupIdentifier` <a name="resetTargetGroupIdentifier" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.resetTargetGroupIdentifier"></a>

```typescript
public resetTargetGroupIdentifier(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.property.targetGroupIdentifierInput">targetGroupIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.property.targetGroupIdentifier">targetGroupIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroups">VpclatticeRuleActionForwardTargetGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetGroupIdentifierInput`<sup>Optional</sup> <a name="targetGroupIdentifierInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.property.targetGroupIdentifierInput"></a>

```typescript
public readonly targetGroupIdentifierInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `targetGroupIdentifier`<sup>Required</sup> <a name="targetGroupIdentifier" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.property.targetGroupIdentifier"></a>

```typescript
public readonly targetGroupIdentifier: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpclatticeRuleActionForwardTargetGroups;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardTargetGroups">VpclatticeRuleActionForwardTargetGroups</a>

---


### VpclatticeRuleActionOutputReference <a name="VpclatticeRuleActionOutputReference" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.Initializer"></a>

```typescript
import { vpclatticeRule } from '@cdktn/provider-awscc'

new vpclatticeRule.VpclatticeRuleActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.putFixedResponse">putFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.putForward">putForward</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.resetFixedResponse">resetFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.resetForward">resetForward</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFixedResponse` <a name="putFixedResponse" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.putFixedResponse"></a>

```typescript
public putFixedResponse(value: VpclatticeRuleActionFixedResponse): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.putFixedResponse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponse">VpclatticeRuleActionFixedResponse</a>

---

##### `putForward` <a name="putForward" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.putForward"></a>

```typescript
public putForward(value: VpclatticeRuleActionForward): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.putForward.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForward">VpclatticeRuleActionForward</a>

---

##### `resetFixedResponse` <a name="resetFixedResponse" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.resetFixedResponse"></a>

```typescript
public resetFixedResponse(): void
```

##### `resetForward` <a name="resetForward" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.resetForward"></a>

```typescript
public resetForward(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.property.fixedResponse">fixedResponse</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference">VpclatticeRuleActionFixedResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.property.forward">forward</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference">VpclatticeRuleActionForwardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.property.fixedResponseInput">fixedResponseInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponse">VpclatticeRuleActionFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.property.forwardInput">forwardInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForward">VpclatticeRuleActionForward</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleAction">VpclatticeRuleAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fixedResponse`<sup>Required</sup> <a name="fixedResponse" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.property.fixedResponse"></a>

```typescript
public readonly fixedResponse: VpclatticeRuleActionFixedResponseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponseOutputReference">VpclatticeRuleActionFixedResponseOutputReference</a>

---

##### `forward`<sup>Required</sup> <a name="forward" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.property.forward"></a>

```typescript
public readonly forward: VpclatticeRuleActionForwardOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForwardOutputReference">VpclatticeRuleActionForwardOutputReference</a>

---

##### `fixedResponseInput`<sup>Optional</sup> <a name="fixedResponseInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.property.fixedResponseInput"></a>

```typescript
public readonly fixedResponseInput: IResolvable | VpclatticeRuleActionFixedResponse;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionFixedResponse">VpclatticeRuleActionFixedResponse</a>

---

##### `forwardInput`<sup>Optional</sup> <a name="forwardInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.property.forwardInput"></a>

```typescript
public readonly forwardInput: IResolvable | VpclatticeRuleActionForward;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionForward">VpclatticeRuleActionForward</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpclatticeRuleAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleAction">VpclatticeRuleAction</a>

---


### VpclatticeRuleMatchHttpMatchHeaderMatchesList <a name="VpclatticeRuleMatchHttpMatchHeaderMatchesList" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.Initializer"></a>

```typescript
import { vpclatticeRule } from '@cdktn/provider-awscc'

new vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.get"></a>

```typescript
public get(index: number): VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches">VpclatticeRuleMatchHttpMatchHeaderMatches</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpclatticeRuleMatchHttpMatchHeaderMatches[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches">VpclatticeRuleMatchHttpMatchHeaderMatches</a>[]

---


### VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference <a name="VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.Initializer"></a>

```typescript
import { vpclatticeRule } from '@cdktn/provider-awscc'

new vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resetContains">resetContains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContains` <a name="resetContains" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resetContains"></a>

```typescript
public resetContains(): void
```

##### `resetExact` <a name="resetExact" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resetExact"></a>

```typescript
public resetExact(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.containsInput">containsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.exactInput">exactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.contains">contains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.exact">exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatch">VpclatticeRuleMatchHttpMatchHeaderMatchesMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containsInput`<sup>Optional</sup> <a name="containsInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.containsInput"></a>

```typescript
public readonly containsInput: string;
```

- *Type:* string

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.exactInput"></a>

```typescript
public readonly exactInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.contains"></a>

```typescript
public readonly contains: string;
```

- *Type:* string

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpclatticeRuleMatchHttpMatchHeaderMatchesMatch;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatch">VpclatticeRuleMatchHttpMatchHeaderMatchesMatch</a>

---


### VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference <a name="VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer"></a>

```typescript
import { vpclatticeRule } from '@cdktn/provider-awscc'

new vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.resetCaseSensitive">resetCaseSensitive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.resetMatch">resetMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatch` <a name="putMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.putMatch"></a>

```typescript
public putMatch(value: VpclatticeRuleMatchHttpMatchHeaderMatchesMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatch">VpclatticeRuleMatchHttpMatchHeaderMatchesMatch</a>

---

##### `resetCaseSensitive` <a name="resetCaseSensitive" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.resetCaseSensitive"></a>

```typescript
public resetCaseSensitive(): void
```

##### `resetMatch` <a name="resetMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.resetMatch"></a>

```typescript
public resetMatch(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.match">match</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference">VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.caseSensitiveInput">caseSensitiveInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.matchInput">matchInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatch">VpclatticeRuleMatchHttpMatchHeaderMatchesMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.caseSensitive">caseSensitive</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches">VpclatticeRuleMatchHttpMatchHeaderMatches</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.match"></a>

```typescript
public readonly match: VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference">VpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference</a>

---

##### `caseSensitiveInput`<sup>Optional</sup> <a name="caseSensitiveInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.caseSensitiveInput"></a>

```typescript
public readonly caseSensitiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.matchInput"></a>

```typescript
public readonly matchInput: IResolvable | VpclatticeRuleMatchHttpMatchHeaderMatchesMatch;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesMatch">VpclatticeRuleMatchHttpMatchHeaderMatchesMatch</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `caseSensitive`<sup>Required</sup> <a name="caseSensitive" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.caseSensitive"></a>

```typescript
public readonly caseSensitive: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpclatticeRuleMatchHttpMatchHeaderMatches;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches">VpclatticeRuleMatchHttpMatchHeaderMatches</a>

---


### VpclatticeRuleMatchHttpMatchOutputReference <a name="VpclatticeRuleMatchHttpMatchOutputReference" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.Initializer"></a>

```typescript
import { vpclatticeRule } from '@cdktn/provider-awscc'

new vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.putHeaderMatches">putHeaderMatches</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.putPathMatch">putPathMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.resetHeaderMatches">resetHeaderMatches</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.resetPathMatch">resetPathMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaderMatches` <a name="putHeaderMatches" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.putHeaderMatches"></a>

```typescript
public putHeaderMatches(value: IResolvable | VpclatticeRuleMatchHttpMatchHeaderMatches[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.putHeaderMatches.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches">VpclatticeRuleMatchHttpMatchHeaderMatches</a>[]

---

##### `putPathMatch` <a name="putPathMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.putPathMatch"></a>

```typescript
public putPathMatch(value: VpclatticeRuleMatchHttpMatchPathMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.putPathMatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatch">VpclatticeRuleMatchHttpMatchPathMatch</a>

---

##### `resetHeaderMatches` <a name="resetHeaderMatches" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.resetHeaderMatches"></a>

```typescript
public resetHeaderMatches(): void
```

##### `resetMethod` <a name="resetMethod" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.resetMethod"></a>

```typescript
public resetMethod(): void
```

##### `resetPathMatch` <a name="resetPathMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.resetPathMatch"></a>

```typescript
public resetPathMatch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.headerMatches">headerMatches</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList">VpclatticeRuleMatchHttpMatchHeaderMatchesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.pathMatch">pathMatch</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference">VpclatticeRuleMatchHttpMatchPathMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.headerMatchesInput">headerMatchesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches">VpclatticeRuleMatchHttpMatchHeaderMatches</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.pathMatchInput">pathMatchInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatch">VpclatticeRuleMatchHttpMatchPathMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatch">VpclatticeRuleMatchHttpMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerMatches`<sup>Required</sup> <a name="headerMatches" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.headerMatches"></a>

```typescript
public readonly headerMatches: VpclatticeRuleMatchHttpMatchHeaderMatchesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatchesList">VpclatticeRuleMatchHttpMatchHeaderMatchesList</a>

---

##### `pathMatch`<sup>Required</sup> <a name="pathMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.pathMatch"></a>

```typescript
public readonly pathMatch: VpclatticeRuleMatchHttpMatchPathMatchOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference">VpclatticeRuleMatchHttpMatchPathMatchOutputReference</a>

---

##### `headerMatchesInput`<sup>Optional</sup> <a name="headerMatchesInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.headerMatchesInput"></a>

```typescript
public readonly headerMatchesInput: IResolvable | VpclatticeRuleMatchHttpMatchHeaderMatches[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchHeaderMatches">VpclatticeRuleMatchHttpMatchHeaderMatches</a>[]

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `pathMatchInput`<sup>Optional</sup> <a name="pathMatchInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.pathMatchInput"></a>

```typescript
public readonly pathMatchInput: IResolvable | VpclatticeRuleMatchHttpMatchPathMatch;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatch">VpclatticeRuleMatchHttpMatchPathMatch</a>

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpclatticeRuleMatchHttpMatch;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatch">VpclatticeRuleMatchHttpMatch</a>

---


### VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference <a name="VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.Initializer"></a>

```typescript
import { vpclatticeRule } from '@cdktn/provider-awscc'

new vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExact` <a name="resetExact" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.resetExact"></a>

```typescript
public resetExact(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.exactInput">exactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.exact">exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatch">VpclatticeRuleMatchHttpMatchPathMatchMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.exactInput"></a>

```typescript
public readonly exactInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpclatticeRuleMatchHttpMatchPathMatchMatch;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatch">VpclatticeRuleMatchHttpMatchPathMatchMatch</a>

---


### VpclatticeRuleMatchHttpMatchPathMatchOutputReference <a name="VpclatticeRuleMatchHttpMatchPathMatchOutputReference" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.Initializer"></a>

```typescript
import { vpclatticeRule } from '@cdktn/provider-awscc'

new vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.resetCaseSensitive">resetCaseSensitive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.resetMatch">resetMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatch` <a name="putMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.putMatch"></a>

```typescript
public putMatch(value: VpclatticeRuleMatchHttpMatchPathMatchMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatch">VpclatticeRuleMatchHttpMatchPathMatchMatch</a>

---

##### `resetCaseSensitive` <a name="resetCaseSensitive" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.resetCaseSensitive"></a>

```typescript
public resetCaseSensitive(): void
```

##### `resetMatch` <a name="resetMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.resetMatch"></a>

```typescript
public resetMatch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.match">match</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference">VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.caseSensitiveInput">caseSensitiveInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.matchInput">matchInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatch">VpclatticeRuleMatchHttpMatchPathMatchMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.caseSensitive">caseSensitive</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatch">VpclatticeRuleMatchHttpMatchPathMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.match"></a>

```typescript
public readonly match: VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference">VpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference</a>

---

##### `caseSensitiveInput`<sup>Optional</sup> <a name="caseSensitiveInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.caseSensitiveInput"></a>

```typescript
public readonly caseSensitiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.matchInput"></a>

```typescript
public readonly matchInput: IResolvable | VpclatticeRuleMatchHttpMatchPathMatchMatch;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchMatch">VpclatticeRuleMatchHttpMatchPathMatchMatch</a>

---

##### `caseSensitive`<sup>Required</sup> <a name="caseSensitive" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.caseSensitive"></a>

```typescript
public readonly caseSensitive: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpclatticeRuleMatchHttpMatchPathMatch;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchPathMatch">VpclatticeRuleMatchHttpMatchPathMatch</a>

---


### VpclatticeRuleMatchOutputReference <a name="VpclatticeRuleMatchOutputReference" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.Initializer"></a>

```typescript
import { vpclatticeRule } from '@cdktn/provider-awscc'

new vpclatticeRule.VpclatticeRuleMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.putHttpMatch">putHttpMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpMatch` <a name="putHttpMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.putHttpMatch"></a>

```typescript
public putHttpMatch(value: VpclatticeRuleMatchHttpMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.putHttpMatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatch">VpclatticeRuleMatchHttpMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.property.httpMatch">httpMatch</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference">VpclatticeRuleMatchHttpMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.property.httpMatchInput">httpMatchInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatch">VpclatticeRuleMatchHttpMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatch">VpclatticeRuleMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpMatch`<sup>Required</sup> <a name="httpMatch" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.property.httpMatch"></a>

```typescript
public readonly httpMatch: VpclatticeRuleMatchHttpMatchOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatchOutputReference">VpclatticeRuleMatchHttpMatchOutputReference</a>

---

##### `httpMatchInput`<sup>Optional</sup> <a name="httpMatchInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.property.httpMatchInput"></a>

```typescript
public readonly httpMatchInput: IResolvable | VpclatticeRuleMatchHttpMatch;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchHttpMatch">VpclatticeRuleMatchHttpMatch</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpclatticeRuleMatch;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleMatch">VpclatticeRuleMatch</a>

---


### VpclatticeRuleTagsList <a name="VpclatticeRuleTagsList" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.Initializer"></a>

```typescript
import { vpclatticeRule } from '@cdktn/provider-awscc'

new vpclatticeRule.VpclatticeRuleTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.get"></a>

```typescript
public get(index: number): VpclatticeRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTags">VpclatticeRuleTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpclatticeRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTags">VpclatticeRuleTags</a>[]

---


### VpclatticeRuleTagsOutputReference <a name="VpclatticeRuleTagsOutputReference" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.Initializer"></a>

```typescript
import { vpclatticeRule } from '@cdktn/provider-awscc'

new vpclatticeRule.VpclatticeRuleTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTags">VpclatticeRuleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpclatticeRuleTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeRule.VpclatticeRuleTags">VpclatticeRuleTags</a>

---



