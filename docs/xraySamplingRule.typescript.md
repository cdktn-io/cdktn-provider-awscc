# `xraySamplingRule` Submodule <a name="`xraySamplingRule` Submodule" id="@cdktn/provider-awscc.xraySamplingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### XraySamplingRule <a name="XraySamplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule awscc_xray_sampling_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer"></a>

```typescript
import { xraySamplingRule } from '@cdktn/provider-awscc'

new xraySamplingRule.XraySamplingRule(scope: Construct, id: string, config?: XraySamplingRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig">XraySamplingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig">XraySamplingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRule">putSamplingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleRecord">putSamplingRuleRecord</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleUpdate">putSamplingRuleUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetRuleName">resetRuleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetSamplingRule">resetSamplingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetSamplingRuleRecord">resetSamplingRuleRecord</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetSamplingRuleUpdate">resetSamplingRuleUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSamplingRule` <a name="putSamplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRule"></a>

```typescript
public putSamplingRule(value: XraySamplingRuleSamplingRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule">XraySamplingRuleSamplingRule</a>

---

##### `putSamplingRuleRecord` <a name="putSamplingRuleRecord" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleRecord"></a>

```typescript
public putSamplingRuleRecord(value: XraySamplingRuleSamplingRuleRecord): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleRecord.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord">XraySamplingRuleSamplingRuleRecord</a>

---

##### `putSamplingRuleUpdate` <a name="putSamplingRuleUpdate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleUpdate"></a>

```typescript
public putSamplingRuleUpdate(value: XraySamplingRuleSamplingRuleUpdate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleUpdate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate">XraySamplingRuleSamplingRuleUpdate</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putTags"></a>

```typescript
public putTags(value: IResolvable | XraySamplingRuleTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>[]

---

##### `resetRuleName` <a name="resetRuleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetRuleName"></a>

```typescript
public resetRuleName(): void
```

##### `resetSamplingRule` <a name="resetSamplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetSamplingRule"></a>

```typescript
public resetSamplingRule(): void
```

##### `resetSamplingRuleRecord` <a name="resetSamplingRuleRecord" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetSamplingRuleRecord"></a>

```typescript
public resetSamplingRuleRecord(): void
```

##### `resetSamplingRuleUpdate` <a name="resetSamplingRuleUpdate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetSamplingRuleUpdate"></a>

```typescript
public resetSamplingRuleUpdate(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a XraySamplingRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isConstruct"></a>

```typescript
import { xraySamplingRule } from '@cdktn/provider-awscc'

xraySamplingRule.XraySamplingRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isTerraformElement"></a>

```typescript
import { xraySamplingRule } from '@cdktn/provider-awscc'

xraySamplingRule.XraySamplingRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isTerraformResource"></a>

```typescript
import { xraySamplingRule } from '@cdktn/provider-awscc'

xraySamplingRule.XraySamplingRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.generateConfigForImport"></a>

```typescript
import { xraySamplingRule } from '@cdktn/provider-awscc'

xraySamplingRule.XraySamplingRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a XraySamplingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the XraySamplingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing XraySamplingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the XraySamplingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.ruleArn">ruleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRule">samplingRule</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference">XraySamplingRuleSamplingRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleRecord">samplingRuleRecord</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference">XraySamplingRuleSamplingRuleRecordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleUpdate">samplingRuleUpdate</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference">XraySamplingRuleSamplingRuleUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList">XraySamplingRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.ruleNameInput">ruleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleInput">samplingRuleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule">XraySamplingRuleSamplingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleRecordInput">samplingRuleRecordInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord">XraySamplingRuleSamplingRuleRecord</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleUpdateInput">samplingRuleUpdateInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate">XraySamplingRuleSamplingRuleUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

---

##### `samplingRule`<sup>Required</sup> <a name="samplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRule"></a>

```typescript
public readonly samplingRule: XraySamplingRuleSamplingRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference">XraySamplingRuleSamplingRuleOutputReference</a>

---

##### `samplingRuleRecord`<sup>Required</sup> <a name="samplingRuleRecord" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleRecord"></a>

```typescript
public readonly samplingRuleRecord: XraySamplingRuleSamplingRuleRecordOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference">XraySamplingRuleSamplingRuleRecordOutputReference</a>

---

##### `samplingRuleUpdate`<sup>Required</sup> <a name="samplingRuleUpdate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleUpdate"></a>

```typescript
public readonly samplingRuleUpdate: XraySamplingRuleSamplingRuleUpdateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference">XraySamplingRuleSamplingRuleUpdateOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.tags"></a>

```typescript
public readonly tags: XraySamplingRuleTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList">XraySamplingRuleTagsList</a>

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.ruleNameInput"></a>

```typescript
public readonly ruleNameInput: string;
```

- *Type:* string

---

##### `samplingRuleInput`<sup>Optional</sup> <a name="samplingRuleInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleInput"></a>

```typescript
public readonly samplingRuleInput: IResolvable | XraySamplingRuleSamplingRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule">XraySamplingRuleSamplingRule</a>

---

##### `samplingRuleRecordInput`<sup>Optional</sup> <a name="samplingRuleRecordInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleRecordInput"></a>

```typescript
public readonly samplingRuleRecordInput: IResolvable | XraySamplingRuleSamplingRuleRecord;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord">XraySamplingRuleSamplingRuleRecord</a>

---

##### `samplingRuleUpdateInput`<sup>Optional</sup> <a name="samplingRuleUpdateInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleUpdateInput"></a>

```typescript
public readonly samplingRuleUpdateInput: IResolvable | XraySamplingRuleSamplingRuleUpdate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate">XraySamplingRuleSamplingRuleUpdate</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | XraySamplingRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>[]

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### XraySamplingRuleConfig <a name="XraySamplingRuleConfig" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.Initializer"></a>

```typescript
import { xraySamplingRule } from '@cdktn/provider-awscc'

const xraySamplingRuleConfig: xraySamplingRule.XraySamplingRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.ruleName">ruleName</a></code> | <code>string</code> | The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.samplingRule">samplingRule</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule">XraySamplingRuleSamplingRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#sampling_rule XraySamplingRule#sampling_rule}. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.samplingRuleRecord">samplingRuleRecord</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord">XraySamplingRuleSamplingRuleRecord</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#sampling_rule_record XraySamplingRule#sampling_rule_record}. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.samplingRuleUpdate">samplingRuleUpdate</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate">XraySamplingRuleSamplingRuleUpdate</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#sampling_rule_update XraySamplingRule#sampling_rule_update}. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#rule_name XraySamplingRule#rule_name}

---

##### `samplingRule`<sup>Optional</sup> <a name="samplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.samplingRule"></a>

```typescript
public readonly samplingRule: XraySamplingRuleSamplingRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule">XraySamplingRuleSamplingRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#sampling_rule XraySamplingRule#sampling_rule}.

---

##### `samplingRuleRecord`<sup>Optional</sup> <a name="samplingRuleRecord" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.samplingRuleRecord"></a>

```typescript
public readonly samplingRuleRecord: XraySamplingRuleSamplingRuleRecord;
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord">XraySamplingRuleSamplingRuleRecord</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#sampling_rule_record XraySamplingRule#sampling_rule_record}.

---

##### `samplingRuleUpdate`<sup>Optional</sup> <a name="samplingRuleUpdate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.samplingRuleUpdate"></a>

```typescript
public readonly samplingRuleUpdate: XraySamplingRuleSamplingRuleUpdate;
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate">XraySamplingRuleSamplingRuleUpdate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#sampling_rule_update XraySamplingRule#sampling_rule_update}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | XraySamplingRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#tags XraySamplingRule#tags}

---

### XraySamplingRuleSamplingRule <a name="XraySamplingRuleSamplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.Initializer"></a>

```typescript
import { xraySamplingRule } from '@cdktn/provider-awscc'

const xraySamplingRuleSamplingRule: xraySamplingRule.XraySamplingRuleSamplingRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.attributes">attributes</a></code> | <code>{[ key: string ]: string}</code> | Matches attributes derived from the request. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.fixedRate">fixedRate</a></code> | <code>number</code> | The percentage of matching requests to instrument, after the reservoir is exhausted. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.host">host</a></code> | <code>string</code> | Matches the hostname from a request URL. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.httpMethod">httpMethod</a></code> | <code>string</code> | Matches the HTTP method from a request URL. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.priority">priority</a></code> | <code>number</code> | The priority of the sampling rule. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.reservoirSize">reservoirSize</a></code> | <code>number</code> | A fixed number of matching requests to instrument per second, prior to applying the fixed rate. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.resourceArn">resourceArn</a></code> | <code>string</code> | Matches the ARN of the AWS resource on which the service runs. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.ruleArn">ruleArn</a></code> | <code>string</code> | The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.ruleName">ruleName</a></code> | <code>string</code> | The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.samplingRateBoost">samplingRateBoost</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleSamplingRateBoost</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#sampling_rate_boost XraySamplingRule#sampling_rate_boost}. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.serviceName">serviceName</a></code> | <code>string</code> | Matches the name that the service uses to identify itself in segments. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.serviceType">serviceType</a></code> | <code>string</code> | Matches the origin that the service uses to identify its type in segments. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.urlPath">urlPath</a></code> | <code>string</code> | Matches the path from a request URL. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.version">version</a></code> | <code>number</code> | The version of the sampling rule format (1). |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Matches attributes derived from the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#attributes XraySamplingRule#attributes}

---

##### `fixedRate`<sup>Optional</sup> <a name="fixedRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.fixedRate"></a>

```typescript
public readonly fixedRate: number;
```

- *Type:* number

The percentage of matching requests to instrument, after the reservoir is exhausted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#fixed_rate XraySamplingRule#fixed_rate}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Matches the hostname from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#host XraySamplingRule#host}

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

Matches the HTTP method from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#http_method XraySamplingRule#http_method}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

The priority of the sampling rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#priority XraySamplingRule#priority}

---

##### `reservoirSize`<sup>Optional</sup> <a name="reservoirSize" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.reservoirSize"></a>

```typescript
public readonly reservoirSize: number;
```

- *Type:* number

A fixed number of matching requests to instrument per second, prior to applying the fixed rate.

The reservoir is not used directly by services, but applies to all services using the rule collectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#reservoir_size XraySamplingRule#reservoir_size}

---

##### `resourceArn`<sup>Optional</sup> <a name="resourceArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

Matches the ARN of the AWS resource on which the service runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#resource_arn XraySamplingRule#resource_arn}

---

##### `ruleArn`<sup>Optional</sup> <a name="ruleArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#rule_arn XraySamplingRule#rule_arn}

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#rule_name XraySamplingRule#rule_name}

---

##### `samplingRateBoost`<sup>Optional</sup> <a name="samplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.samplingRateBoost"></a>

```typescript
public readonly samplingRateBoost: XraySamplingRuleSamplingRuleSamplingRateBoost;
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleSamplingRateBoost</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#sampling_rate_boost XraySamplingRule#sampling_rate_boost}.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Matches the name that the service uses to identify itself in segments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#service_name XraySamplingRule#service_name}

---

##### `serviceType`<sup>Optional</sup> <a name="serviceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

Matches the origin that the service uses to identify its type in segments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#service_type XraySamplingRule#service_type}

---

##### `urlPath`<sup>Optional</sup> <a name="urlPath" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.urlPath"></a>

```typescript
public readonly urlPath: string;
```

- *Type:* string

Matches the path from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#url_path XraySamplingRule#url_path}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

The version of the sampling rule format (1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#version XraySamplingRule#version}

---

### XraySamplingRuleSamplingRuleRecord <a name="XraySamplingRuleSamplingRuleRecord" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord.Initializer"></a>

```typescript
import { xraySamplingRule } from '@cdktn/provider-awscc'

const xraySamplingRuleSamplingRuleRecord: xraySamplingRule.XraySamplingRuleSamplingRuleRecord = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord.property.createdAt">createdAt</a></code> | <code>string</code> | When the rule was created, in Unix time seconds. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | When the rule was modified, in Unix time seconds. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord.property.samplingRule">samplingRule</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule">XraySamplingRuleSamplingRuleRecordSamplingRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#sampling_rule XraySamplingRule#sampling_rule}. |

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

When the rule was created, in Unix time seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#created_at XraySamplingRule#created_at}

---

##### `modifiedAt`<sup>Optional</sup> <a name="modifiedAt" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

When the rule was modified, in Unix time seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#modified_at XraySamplingRule#modified_at}

---

##### `samplingRule`<sup>Optional</sup> <a name="samplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord.property.samplingRule"></a>

```typescript
public readonly samplingRule: XraySamplingRuleSamplingRuleRecordSamplingRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule">XraySamplingRuleSamplingRuleRecordSamplingRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#sampling_rule XraySamplingRule#sampling_rule}.

---

### XraySamplingRuleSamplingRuleRecordSamplingRule <a name="XraySamplingRuleSamplingRuleRecordSamplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.Initializer"></a>

```typescript
import { xraySamplingRule } from '@cdktn/provider-awscc'

const xraySamplingRuleSamplingRuleRecordSamplingRule: xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.attributes">attributes</a></code> | <code>{[ key: string ]: string}</code> | Matches attributes derived from the request. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.fixedRate">fixedRate</a></code> | <code>number</code> | The percentage of matching requests to instrument, after the reservoir is exhausted. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.host">host</a></code> | <code>string</code> | Matches the hostname from a request URL. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.httpMethod">httpMethod</a></code> | <code>string</code> | Matches the HTTP method from a request URL. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.priority">priority</a></code> | <code>number</code> | The priority of the sampling rule. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.reservoirSize">reservoirSize</a></code> | <code>number</code> | A fixed number of matching requests to instrument per second, prior to applying the fixed rate. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.resourceArn">resourceArn</a></code> | <code>string</code> | Matches the ARN of the AWS resource on which the service runs. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.ruleArn">ruleArn</a></code> | <code>string</code> | The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.ruleName">ruleName</a></code> | <code>string</code> | The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.samplingRateBoost">samplingRateBoost</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#sampling_rate_boost XraySamplingRule#sampling_rate_boost}. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.serviceName">serviceName</a></code> | <code>string</code> | Matches the name that the service uses to identify itself in segments. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.serviceType">serviceType</a></code> | <code>string</code> | Matches the origin that the service uses to identify its type in segments. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.urlPath">urlPath</a></code> | <code>string</code> | Matches the path from a request URL. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.version">version</a></code> | <code>number</code> | The version of the sampling rule format (1). |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Matches attributes derived from the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#attributes XraySamplingRule#attributes}

---

##### `fixedRate`<sup>Optional</sup> <a name="fixedRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.fixedRate"></a>

```typescript
public readonly fixedRate: number;
```

- *Type:* number

The percentage of matching requests to instrument, after the reservoir is exhausted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#fixed_rate XraySamplingRule#fixed_rate}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Matches the hostname from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#host XraySamplingRule#host}

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

Matches the HTTP method from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#http_method XraySamplingRule#http_method}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

The priority of the sampling rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#priority XraySamplingRule#priority}

---

##### `reservoirSize`<sup>Optional</sup> <a name="reservoirSize" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.reservoirSize"></a>

```typescript
public readonly reservoirSize: number;
```

- *Type:* number

A fixed number of matching requests to instrument per second, prior to applying the fixed rate.

The reservoir is not used directly by services, but applies to all services using the rule collectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#reservoir_size XraySamplingRule#reservoir_size}

---

##### `resourceArn`<sup>Optional</sup> <a name="resourceArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

Matches the ARN of the AWS resource on which the service runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#resource_arn XraySamplingRule#resource_arn}

---

##### `ruleArn`<sup>Optional</sup> <a name="ruleArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#rule_arn XraySamplingRule#rule_arn}

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#rule_name XraySamplingRule#rule_name}

---

##### `samplingRateBoost`<sup>Optional</sup> <a name="samplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.samplingRateBoost"></a>

```typescript
public readonly samplingRateBoost: XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost;
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#sampling_rate_boost XraySamplingRule#sampling_rate_boost}.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Matches the name that the service uses to identify itself in segments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#service_name XraySamplingRule#service_name}

---

##### `serviceType`<sup>Optional</sup> <a name="serviceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

Matches the origin that the service uses to identify its type in segments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#service_type XraySamplingRule#service_type}

---

##### `urlPath`<sup>Optional</sup> <a name="urlPath" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.urlPath"></a>

```typescript
public readonly urlPath: string;
```

- *Type:* string

Matches the path from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#url_path XraySamplingRule#url_path}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

The version of the sampling rule format (1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#version XraySamplingRule#version}

---

### XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost <a name="XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost.Initializer"></a>

```typescript
import { xraySamplingRule } from '@cdktn/provider-awscc'

const xraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost: xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost.property.cooldownWindowMinutes">cooldownWindowMinutes</a></code> | <code>number</code> | Time window (in minutes) in which only one sampling rate boost can be triggered. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost.property.maxRate">maxRate</a></code> | <code>number</code> | The maximum sampling rate X-Ray will apply when it detects anomalies. |

---

##### `cooldownWindowMinutes`<sup>Optional</sup> <a name="cooldownWindowMinutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost.property.cooldownWindowMinutes"></a>

```typescript
public readonly cooldownWindowMinutes: number;
```

- *Type:* number

Time window (in minutes) in which only one sampling rate boost can be triggered.

After a boost occurs, no further boosts are allowed until the next window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#cooldown_window_minutes XraySamplingRule#cooldown_window_minutes}

---

##### `maxRate`<sup>Optional</sup> <a name="maxRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost.property.maxRate"></a>

```typescript
public readonly maxRate: number;
```

- *Type:* number

The maximum sampling rate X-Ray will apply when it detects anomalies.

X-Ray determines the appropriate rate between your baseline and the maximum, depending on anomaly activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#max_rate XraySamplingRule#max_rate}

---

### XraySamplingRuleSamplingRuleSamplingRateBoost <a name="XraySamplingRuleSamplingRuleSamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost.Initializer"></a>

```typescript
import { xraySamplingRule } from '@cdktn/provider-awscc'

const xraySamplingRuleSamplingRuleSamplingRateBoost: xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost.property.cooldownWindowMinutes">cooldownWindowMinutes</a></code> | <code>number</code> | Time window (in minutes) in which only one sampling rate boost can be triggered. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost.property.maxRate">maxRate</a></code> | <code>number</code> | The maximum sampling rate X-Ray will apply when it detects anomalies. |

---

##### `cooldownWindowMinutes`<sup>Optional</sup> <a name="cooldownWindowMinutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost.property.cooldownWindowMinutes"></a>

```typescript
public readonly cooldownWindowMinutes: number;
```

- *Type:* number

Time window (in minutes) in which only one sampling rate boost can be triggered.

After a boost occurs, no further boosts are allowed until the next window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#cooldown_window_minutes XraySamplingRule#cooldown_window_minutes}

---

##### `maxRate`<sup>Optional</sup> <a name="maxRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost.property.maxRate"></a>

```typescript
public readonly maxRate: number;
```

- *Type:* number

The maximum sampling rate X-Ray will apply when it detects anomalies.

X-Ray determines the appropriate rate between your baseline and the maximum, depending on anomaly activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#max_rate XraySamplingRule#max_rate}

---

### XraySamplingRuleSamplingRuleUpdate <a name="XraySamplingRuleSamplingRuleUpdate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.Initializer"></a>

```typescript
import { xraySamplingRule } from '@cdktn/provider-awscc'

const xraySamplingRuleSamplingRuleUpdate: xraySamplingRule.XraySamplingRuleSamplingRuleUpdate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.attributes">attributes</a></code> | <code>{[ key: string ]: string}</code> | Matches attributes derived from the request. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.fixedRate">fixedRate</a></code> | <code>number</code> | The percentage of matching requests to instrument, after the reservoir is exhausted. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.host">host</a></code> | <code>string</code> | Matches the hostname from a request URL. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.httpMethod">httpMethod</a></code> | <code>string</code> | Matches the HTTP method from a request URL. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.priority">priority</a></code> | <code>number</code> | The priority of the sampling rule. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.reservoirSize">reservoirSize</a></code> | <code>number</code> | A fixed number of matching requests to instrument per second, prior to applying the fixed rate. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.resourceArn">resourceArn</a></code> | <code>string</code> | Matches the ARN of the AWS resource on which the service runs. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.ruleArn">ruleArn</a></code> | <code>string</code> | The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.ruleName">ruleName</a></code> | <code>string</code> | The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.samplingRateBoost">samplingRateBoost</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost">XraySamplingRuleSamplingRuleUpdateSamplingRateBoost</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#sampling_rate_boost XraySamplingRule#sampling_rate_boost}. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.serviceName">serviceName</a></code> | <code>string</code> | Matches the name that the service uses to identify itself in segments. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.serviceType">serviceType</a></code> | <code>string</code> | Matches the origin that the service uses to identify its type in segments. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.urlPath">urlPath</a></code> | <code>string</code> | Matches the path from a request URL. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Matches attributes derived from the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#attributes XraySamplingRule#attributes}

---

##### `fixedRate`<sup>Optional</sup> <a name="fixedRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.fixedRate"></a>

```typescript
public readonly fixedRate: number;
```

- *Type:* number

The percentage of matching requests to instrument, after the reservoir is exhausted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#fixed_rate XraySamplingRule#fixed_rate}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Matches the hostname from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#host XraySamplingRule#host}

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

Matches the HTTP method from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#http_method XraySamplingRule#http_method}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

The priority of the sampling rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#priority XraySamplingRule#priority}

---

##### `reservoirSize`<sup>Optional</sup> <a name="reservoirSize" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.reservoirSize"></a>

```typescript
public readonly reservoirSize: number;
```

- *Type:* number

A fixed number of matching requests to instrument per second, prior to applying the fixed rate.

The reservoir is not used directly by services, but applies to all services using the rule collectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#reservoir_size XraySamplingRule#reservoir_size}

---

##### `resourceArn`<sup>Optional</sup> <a name="resourceArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

Matches the ARN of the AWS resource on which the service runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#resource_arn XraySamplingRule#resource_arn}

---

##### `ruleArn`<sup>Optional</sup> <a name="ruleArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#rule_arn XraySamplingRule#rule_arn}

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#rule_name XraySamplingRule#rule_name}

---

##### `samplingRateBoost`<sup>Optional</sup> <a name="samplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.samplingRateBoost"></a>

```typescript
public readonly samplingRateBoost: XraySamplingRuleSamplingRuleUpdateSamplingRateBoost;
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost">XraySamplingRuleSamplingRuleUpdateSamplingRateBoost</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#sampling_rate_boost XraySamplingRule#sampling_rate_boost}.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Matches the name that the service uses to identify itself in segments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#service_name XraySamplingRule#service_name}

---

##### `serviceType`<sup>Optional</sup> <a name="serviceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

Matches the origin that the service uses to identify its type in segments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#service_type XraySamplingRule#service_type}

---

##### `urlPath`<sup>Optional</sup> <a name="urlPath" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.urlPath"></a>

```typescript
public readonly urlPath: string;
```

- *Type:* string

Matches the path from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#url_path XraySamplingRule#url_path}

---

### XraySamplingRuleSamplingRuleUpdateSamplingRateBoost <a name="XraySamplingRuleSamplingRuleUpdateSamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost.Initializer"></a>

```typescript
import { xraySamplingRule } from '@cdktn/provider-awscc'

const xraySamplingRuleSamplingRuleUpdateSamplingRateBoost: xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost.property.cooldownWindowMinutes">cooldownWindowMinutes</a></code> | <code>number</code> | Time window (in minutes) in which only one sampling rate boost can be triggered. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost.property.maxRate">maxRate</a></code> | <code>number</code> | The maximum sampling rate X-Ray will apply when it detects anomalies. |

---

##### `cooldownWindowMinutes`<sup>Optional</sup> <a name="cooldownWindowMinutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost.property.cooldownWindowMinutes"></a>

```typescript
public readonly cooldownWindowMinutes: number;
```

- *Type:* number

Time window (in minutes) in which only one sampling rate boost can be triggered.

After a boost occurs, no further boosts are allowed until the next window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#cooldown_window_minutes XraySamplingRule#cooldown_window_minutes}

---

##### `maxRate`<sup>Optional</sup> <a name="maxRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost.property.maxRate"></a>

```typescript
public readonly maxRate: number;
```

- *Type:* number

The maximum sampling rate X-Ray will apply when it detects anomalies.

X-Ray determines the appropriate rate between your baseline and the maximum, depending on anomaly activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#max_rate XraySamplingRule#max_rate}

---

### XraySamplingRuleTags <a name="XraySamplingRuleTags" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags.Initializer"></a>

```typescript
import { xraySamplingRule } from '@cdktn/provider-awscc'

const xraySamplingRuleTags: xraySamplingRule.XraySamplingRuleTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#key XraySamplingRule#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/xray_sampling_rule#value XraySamplingRule#value}

---

## Classes <a name="Classes" id="Classes"></a>

### XraySamplingRuleSamplingRuleOutputReference <a name="XraySamplingRuleSamplingRuleOutputReference" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.Initializer"></a>

```typescript
import { xraySamplingRule } from '@cdktn/provider-awscc'

new xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.putSamplingRateBoost">putSamplingRateBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetFixedRate">resetFixedRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetHttpMethod">resetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetReservoirSize">resetReservoirSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetResourceArn">resetResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetRuleArn">resetRuleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetRuleName">resetRuleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetSamplingRateBoost">resetSamplingRateBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetServiceType">resetServiceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetUrlPath">resetUrlPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSamplingRateBoost` <a name="putSamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.putSamplingRateBoost"></a>

```typescript
public putSamplingRateBoost(value: XraySamplingRuleSamplingRuleSamplingRateBoost): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.putSamplingRateBoost.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleSamplingRateBoost</a>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetFixedRate` <a name="resetFixedRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetFixedRate"></a>

```typescript
public resetFixedRate(): void
```

##### `resetHost` <a name="resetHost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetHttpMethod` <a name="resetHttpMethod" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetHttpMethod"></a>

```typescript
public resetHttpMethod(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetReservoirSize` <a name="resetReservoirSize" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetReservoirSize"></a>

```typescript
public resetReservoirSize(): void
```

##### `resetResourceArn` <a name="resetResourceArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetResourceArn"></a>

```typescript
public resetResourceArn(): void
```

##### `resetRuleArn` <a name="resetRuleArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetRuleArn"></a>

```typescript
public resetRuleArn(): void
```

##### `resetRuleName` <a name="resetRuleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetRuleName"></a>

```typescript
public resetRuleName(): void
```

##### `resetSamplingRateBoost` <a name="resetSamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetSamplingRateBoost"></a>

```typescript
public resetSamplingRateBoost(): void
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetServiceName"></a>

```typescript
public resetServiceName(): void
```

##### `resetServiceType` <a name="resetServiceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetServiceType"></a>

```typescript
public resetServiceType(): void
```

##### `resetUrlPath` <a name="resetUrlPath" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetUrlPath"></a>

```typescript
public resetUrlPath(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.samplingRateBoost">samplingRateBoost</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference">XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.attributesInput">attributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.fixedRateInput">fixedRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.httpMethodInput">httpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.reservoirSizeInput">reservoirSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.resourceArnInput">resourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.ruleArnInput">ruleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.ruleNameInput">ruleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.samplingRateBoostInput">samplingRateBoostInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleSamplingRateBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.serviceTypeInput">serviceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.urlPathInput">urlPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.versionInput">versionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.attributes">attributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.fixedRate">fixedRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.httpMethod">httpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.reservoirSize">reservoirSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.ruleArn">ruleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.serviceType">serviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.urlPath">urlPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule">XraySamplingRuleSamplingRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `samplingRateBoost`<sup>Required</sup> <a name="samplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.samplingRateBoost"></a>

```typescript
public readonly samplingRateBoost: XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference">XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.attributesInput"></a>

```typescript
public readonly attributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `fixedRateInput`<sup>Optional</sup> <a name="fixedRateInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.fixedRateInput"></a>

```typescript
public readonly fixedRateInput: number;
```

- *Type:* number

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.httpMethodInput"></a>

```typescript
public readonly httpMethodInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `reservoirSizeInput`<sup>Optional</sup> <a name="reservoirSizeInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.reservoirSizeInput"></a>

```typescript
public readonly reservoirSizeInput: number;
```

- *Type:* number

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.resourceArnInput"></a>

```typescript
public readonly resourceArnInput: string;
```

- *Type:* string

---

##### `ruleArnInput`<sup>Optional</sup> <a name="ruleArnInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.ruleArnInput"></a>

```typescript
public readonly ruleArnInput: string;
```

- *Type:* string

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.ruleNameInput"></a>

```typescript
public readonly ruleNameInput: string;
```

- *Type:* string

---

##### `samplingRateBoostInput`<sup>Optional</sup> <a name="samplingRateBoostInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.samplingRateBoostInput"></a>

```typescript
public readonly samplingRateBoostInput: IResolvable | XraySamplingRuleSamplingRuleSamplingRateBoost;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleSamplingRateBoost</a>

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `serviceTypeInput`<sup>Optional</sup> <a name="serviceTypeInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.serviceTypeInput"></a>

```typescript
public readonly serviceTypeInput: string;
```

- *Type:* string

---

##### `urlPathInput`<sup>Optional</sup> <a name="urlPathInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.urlPathInput"></a>

```typescript
public readonly urlPathInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: number;
```

- *Type:* number

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `fixedRate`<sup>Required</sup> <a name="fixedRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.fixedRate"></a>

```typescript
public readonly fixedRate: number;
```

- *Type:* number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `reservoirSize`<sup>Required</sup> <a name="reservoirSize" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.reservoirSize"></a>

```typescript
public readonly reservoirSize: number;
```

- *Type:* number

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

---

##### `urlPath`<sup>Required</sup> <a name="urlPath" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.urlPath"></a>

```typescript
public readonly urlPath: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | XraySamplingRuleSamplingRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule">XraySamplingRuleSamplingRule</a>

---


### XraySamplingRuleSamplingRuleRecordOutputReference <a name="XraySamplingRuleSamplingRuleRecordOutputReference" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.Initializer"></a>

```typescript
import { xraySamplingRule } from '@cdktn/provider-awscc'

new xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.putSamplingRule">putSamplingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resetCreatedAt">resetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resetModifiedAt">resetModifiedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resetSamplingRule">resetSamplingRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSamplingRule` <a name="putSamplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.putSamplingRule"></a>

```typescript
public putSamplingRule(value: XraySamplingRuleSamplingRuleRecordSamplingRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.putSamplingRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule">XraySamplingRuleSamplingRuleRecordSamplingRule</a>

---

##### `resetCreatedAt` <a name="resetCreatedAt" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resetCreatedAt"></a>

```typescript
public resetCreatedAt(): void
```

##### `resetModifiedAt` <a name="resetModifiedAt" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resetModifiedAt"></a>

```typescript
public resetModifiedAt(): void
```

##### `resetSamplingRule` <a name="resetSamplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resetSamplingRule"></a>

```typescript
public resetSamplingRule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.samplingRule">samplingRule</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference">XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.createdAtInput">createdAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.modifiedAtInput">modifiedAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.samplingRuleInput">samplingRuleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule">XraySamplingRuleSamplingRuleRecordSamplingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord">XraySamplingRuleSamplingRuleRecord</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `samplingRule`<sup>Required</sup> <a name="samplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.samplingRule"></a>

```typescript
public readonly samplingRule: XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference">XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference</a>

---

##### `createdAtInput`<sup>Optional</sup> <a name="createdAtInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.createdAtInput"></a>

```typescript
public readonly createdAtInput: string;
```

- *Type:* string

---

##### `modifiedAtInput`<sup>Optional</sup> <a name="modifiedAtInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.modifiedAtInput"></a>

```typescript
public readonly modifiedAtInput: string;
```

- *Type:* string

---

##### `samplingRuleInput`<sup>Optional</sup> <a name="samplingRuleInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.samplingRuleInput"></a>

```typescript
public readonly samplingRuleInput: IResolvable | XraySamplingRuleSamplingRuleRecordSamplingRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule">XraySamplingRuleSamplingRuleRecordSamplingRule</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | XraySamplingRuleSamplingRuleRecord;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord">XraySamplingRuleSamplingRuleRecord</a>

---


### XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference <a name="XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.Initializer"></a>

```typescript
import { xraySamplingRule } from '@cdktn/provider-awscc'

new xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.putSamplingRateBoost">putSamplingRateBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetFixedRate">resetFixedRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetHttpMethod">resetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetReservoirSize">resetReservoirSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetResourceArn">resetResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetRuleArn">resetRuleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetRuleName">resetRuleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetSamplingRateBoost">resetSamplingRateBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetServiceType">resetServiceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetUrlPath">resetUrlPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSamplingRateBoost` <a name="putSamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.putSamplingRateBoost"></a>

```typescript
public putSamplingRateBoost(value: XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.putSamplingRateBoost.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost</a>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetFixedRate` <a name="resetFixedRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetFixedRate"></a>

```typescript
public resetFixedRate(): void
```

##### `resetHost` <a name="resetHost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetHttpMethod` <a name="resetHttpMethod" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetHttpMethod"></a>

```typescript
public resetHttpMethod(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetReservoirSize` <a name="resetReservoirSize" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetReservoirSize"></a>

```typescript
public resetReservoirSize(): void
```

##### `resetResourceArn` <a name="resetResourceArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetResourceArn"></a>

```typescript
public resetResourceArn(): void
```

##### `resetRuleArn` <a name="resetRuleArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetRuleArn"></a>

```typescript
public resetRuleArn(): void
```

##### `resetRuleName` <a name="resetRuleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetRuleName"></a>

```typescript
public resetRuleName(): void
```

##### `resetSamplingRateBoost` <a name="resetSamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetSamplingRateBoost"></a>

```typescript
public resetSamplingRateBoost(): void
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetServiceName"></a>

```typescript
public resetServiceName(): void
```

##### `resetServiceType` <a name="resetServiceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetServiceType"></a>

```typescript
public resetServiceType(): void
```

##### `resetUrlPath` <a name="resetUrlPath" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetUrlPath"></a>

```typescript
public resetUrlPath(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.samplingRateBoost">samplingRateBoost</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.attributesInput">attributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.fixedRateInput">fixedRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.httpMethodInput">httpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.reservoirSizeInput">reservoirSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.resourceArnInput">resourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleArnInput">ruleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleNameInput">ruleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.samplingRateBoostInput">samplingRateBoostInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceTypeInput">serviceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.urlPathInput">urlPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.versionInput">versionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.attributes">attributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.fixedRate">fixedRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.httpMethod">httpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.reservoirSize">reservoirSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleArn">ruleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceType">serviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.urlPath">urlPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule">XraySamplingRuleSamplingRuleRecordSamplingRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `samplingRateBoost`<sup>Required</sup> <a name="samplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.samplingRateBoost"></a>

```typescript
public readonly samplingRateBoost: XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.attributesInput"></a>

```typescript
public readonly attributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `fixedRateInput`<sup>Optional</sup> <a name="fixedRateInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.fixedRateInput"></a>

```typescript
public readonly fixedRateInput: number;
```

- *Type:* number

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.httpMethodInput"></a>

```typescript
public readonly httpMethodInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `reservoirSizeInput`<sup>Optional</sup> <a name="reservoirSizeInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.reservoirSizeInput"></a>

```typescript
public readonly reservoirSizeInput: number;
```

- *Type:* number

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.resourceArnInput"></a>

```typescript
public readonly resourceArnInput: string;
```

- *Type:* string

---

##### `ruleArnInput`<sup>Optional</sup> <a name="ruleArnInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleArnInput"></a>

```typescript
public readonly ruleArnInput: string;
```

- *Type:* string

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleNameInput"></a>

```typescript
public readonly ruleNameInput: string;
```

- *Type:* string

---

##### `samplingRateBoostInput`<sup>Optional</sup> <a name="samplingRateBoostInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.samplingRateBoostInput"></a>

```typescript
public readonly samplingRateBoostInput: IResolvable | XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost</a>

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `serviceTypeInput`<sup>Optional</sup> <a name="serviceTypeInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceTypeInput"></a>

```typescript
public readonly serviceTypeInput: string;
```

- *Type:* string

---

##### `urlPathInput`<sup>Optional</sup> <a name="urlPathInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.urlPathInput"></a>

```typescript
public readonly urlPathInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: number;
```

- *Type:* number

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `fixedRate`<sup>Required</sup> <a name="fixedRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.fixedRate"></a>

```typescript
public readonly fixedRate: number;
```

- *Type:* number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `reservoirSize`<sup>Required</sup> <a name="reservoirSize" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.reservoirSize"></a>

```typescript
public readonly reservoirSize: number;
```

- *Type:* number

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

---

##### `urlPath`<sup>Required</sup> <a name="urlPath" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.urlPath"></a>

```typescript
public readonly urlPath: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | XraySamplingRuleSamplingRuleRecordSamplingRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule">XraySamplingRuleSamplingRuleRecordSamplingRule</a>

---


### XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference <a name="XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.Initializer"></a>

```typescript
import { xraySamplingRule } from '@cdktn/provider-awscc'

new xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resetCooldownWindowMinutes">resetCooldownWindowMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resetMaxRate">resetMaxRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCooldownWindowMinutes` <a name="resetCooldownWindowMinutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resetCooldownWindowMinutes"></a>

```typescript
public resetCooldownWindowMinutes(): void
```

##### `resetMaxRate` <a name="resetMaxRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resetMaxRate"></a>

```typescript
public resetMaxRate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutesInput">cooldownWindowMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.maxRateInput">maxRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutes">cooldownWindowMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.maxRate">maxRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cooldownWindowMinutesInput`<sup>Optional</sup> <a name="cooldownWindowMinutesInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutesInput"></a>

```typescript
public readonly cooldownWindowMinutesInput: number;
```

- *Type:* number

---

##### `maxRateInput`<sup>Optional</sup> <a name="maxRateInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.maxRateInput"></a>

```typescript
public readonly maxRateInput: number;
```

- *Type:* number

---

##### `cooldownWindowMinutes`<sup>Required</sup> <a name="cooldownWindowMinutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutes"></a>

```typescript
public readonly cooldownWindowMinutes: number;
```

- *Type:* number

---

##### `maxRate`<sup>Required</sup> <a name="maxRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.maxRate"></a>

```typescript
public readonly maxRate: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost</a>

---


### XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference <a name="XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.Initializer"></a>

```typescript
import { xraySamplingRule } from '@cdktn/provider-awscc'

new xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resetCooldownWindowMinutes">resetCooldownWindowMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resetMaxRate">resetMaxRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCooldownWindowMinutes` <a name="resetCooldownWindowMinutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resetCooldownWindowMinutes"></a>

```typescript
public resetCooldownWindowMinutes(): void
```

##### `resetMaxRate` <a name="resetMaxRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resetMaxRate"></a>

```typescript
public resetMaxRate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutesInput">cooldownWindowMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.maxRateInput">maxRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutes">cooldownWindowMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.maxRate">maxRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleSamplingRateBoost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cooldownWindowMinutesInput`<sup>Optional</sup> <a name="cooldownWindowMinutesInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutesInput"></a>

```typescript
public readonly cooldownWindowMinutesInput: number;
```

- *Type:* number

---

##### `maxRateInput`<sup>Optional</sup> <a name="maxRateInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.maxRateInput"></a>

```typescript
public readonly maxRateInput: number;
```

- *Type:* number

---

##### `cooldownWindowMinutes`<sup>Required</sup> <a name="cooldownWindowMinutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutes"></a>

```typescript
public readonly cooldownWindowMinutes: number;
```

- *Type:* number

---

##### `maxRate`<sup>Required</sup> <a name="maxRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.maxRate"></a>

```typescript
public readonly maxRate: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | XraySamplingRuleSamplingRuleSamplingRateBoost;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleSamplingRateBoost</a>

---


### XraySamplingRuleSamplingRuleUpdateOutputReference <a name="XraySamplingRuleSamplingRuleUpdateOutputReference" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.Initializer"></a>

```typescript
import { xraySamplingRule } from '@cdktn/provider-awscc'

new xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.putSamplingRateBoost">putSamplingRateBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetFixedRate">resetFixedRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetHttpMethod">resetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetReservoirSize">resetReservoirSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetResourceArn">resetResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetRuleArn">resetRuleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetRuleName">resetRuleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetSamplingRateBoost">resetSamplingRateBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetServiceType">resetServiceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetUrlPath">resetUrlPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSamplingRateBoost` <a name="putSamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.putSamplingRateBoost"></a>

```typescript
public putSamplingRateBoost(value: XraySamplingRuleSamplingRuleUpdateSamplingRateBoost): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.putSamplingRateBoost.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost">XraySamplingRuleSamplingRuleUpdateSamplingRateBoost</a>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetFixedRate` <a name="resetFixedRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetFixedRate"></a>

```typescript
public resetFixedRate(): void
```

##### `resetHost` <a name="resetHost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetHttpMethod` <a name="resetHttpMethod" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetHttpMethod"></a>

```typescript
public resetHttpMethod(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetReservoirSize` <a name="resetReservoirSize" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetReservoirSize"></a>

```typescript
public resetReservoirSize(): void
```

##### `resetResourceArn` <a name="resetResourceArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetResourceArn"></a>

```typescript
public resetResourceArn(): void
```

##### `resetRuleArn` <a name="resetRuleArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetRuleArn"></a>

```typescript
public resetRuleArn(): void
```

##### `resetRuleName` <a name="resetRuleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetRuleName"></a>

```typescript
public resetRuleName(): void
```

##### `resetSamplingRateBoost` <a name="resetSamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetSamplingRateBoost"></a>

```typescript
public resetSamplingRateBoost(): void
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetServiceName"></a>

```typescript
public resetServiceName(): void
```

##### `resetServiceType` <a name="resetServiceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetServiceType"></a>

```typescript
public resetServiceType(): void
```

##### `resetUrlPath` <a name="resetUrlPath" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetUrlPath"></a>

```typescript
public resetUrlPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.samplingRateBoost">samplingRateBoost</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference">XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.attributesInput">attributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.fixedRateInput">fixedRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.httpMethodInput">httpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.reservoirSizeInput">reservoirSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.resourceArnInput">resourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleArnInput">ruleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleNameInput">ruleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.samplingRateBoostInput">samplingRateBoostInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost">XraySamplingRuleSamplingRuleUpdateSamplingRateBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceTypeInput">serviceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.urlPathInput">urlPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.attributes">attributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.fixedRate">fixedRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.httpMethod">httpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.reservoirSize">reservoirSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleArn">ruleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceType">serviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.urlPath">urlPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate">XraySamplingRuleSamplingRuleUpdate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `samplingRateBoost`<sup>Required</sup> <a name="samplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.samplingRateBoost"></a>

```typescript
public readonly samplingRateBoost: XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference">XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.attributesInput"></a>

```typescript
public readonly attributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `fixedRateInput`<sup>Optional</sup> <a name="fixedRateInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.fixedRateInput"></a>

```typescript
public readonly fixedRateInput: number;
```

- *Type:* number

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.httpMethodInput"></a>

```typescript
public readonly httpMethodInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `reservoirSizeInput`<sup>Optional</sup> <a name="reservoirSizeInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.reservoirSizeInput"></a>

```typescript
public readonly reservoirSizeInput: number;
```

- *Type:* number

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.resourceArnInput"></a>

```typescript
public readonly resourceArnInput: string;
```

- *Type:* string

---

##### `ruleArnInput`<sup>Optional</sup> <a name="ruleArnInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleArnInput"></a>

```typescript
public readonly ruleArnInput: string;
```

- *Type:* string

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleNameInput"></a>

```typescript
public readonly ruleNameInput: string;
```

- *Type:* string

---

##### `samplingRateBoostInput`<sup>Optional</sup> <a name="samplingRateBoostInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.samplingRateBoostInput"></a>

```typescript
public readonly samplingRateBoostInput: IResolvable | XraySamplingRuleSamplingRuleUpdateSamplingRateBoost;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost">XraySamplingRuleSamplingRuleUpdateSamplingRateBoost</a>

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `serviceTypeInput`<sup>Optional</sup> <a name="serviceTypeInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceTypeInput"></a>

```typescript
public readonly serviceTypeInput: string;
```

- *Type:* string

---

##### `urlPathInput`<sup>Optional</sup> <a name="urlPathInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.urlPathInput"></a>

```typescript
public readonly urlPathInput: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `fixedRate`<sup>Required</sup> <a name="fixedRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.fixedRate"></a>

```typescript
public readonly fixedRate: number;
```

- *Type:* number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `reservoirSize`<sup>Required</sup> <a name="reservoirSize" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.reservoirSize"></a>

```typescript
public readonly reservoirSize: number;
```

- *Type:* number

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

---

##### `urlPath`<sup>Required</sup> <a name="urlPath" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.urlPath"></a>

```typescript
public readonly urlPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | XraySamplingRuleSamplingRuleUpdate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate">XraySamplingRuleSamplingRuleUpdate</a>

---


### XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference <a name="XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.Initializer"></a>

```typescript
import { xraySamplingRule } from '@cdktn/provider-awscc'

new xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resetCooldownWindowMinutes">resetCooldownWindowMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resetMaxRate">resetMaxRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCooldownWindowMinutes` <a name="resetCooldownWindowMinutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resetCooldownWindowMinutes"></a>

```typescript
public resetCooldownWindowMinutes(): void
```

##### `resetMaxRate` <a name="resetMaxRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resetMaxRate"></a>

```typescript
public resetMaxRate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.cooldownWindowMinutesInput">cooldownWindowMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.maxRateInput">maxRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.cooldownWindowMinutes">cooldownWindowMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.maxRate">maxRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost">XraySamplingRuleSamplingRuleUpdateSamplingRateBoost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cooldownWindowMinutesInput`<sup>Optional</sup> <a name="cooldownWindowMinutesInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.cooldownWindowMinutesInput"></a>

```typescript
public readonly cooldownWindowMinutesInput: number;
```

- *Type:* number

---

##### `maxRateInput`<sup>Optional</sup> <a name="maxRateInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.maxRateInput"></a>

```typescript
public readonly maxRateInput: number;
```

- *Type:* number

---

##### `cooldownWindowMinutes`<sup>Required</sup> <a name="cooldownWindowMinutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.cooldownWindowMinutes"></a>

```typescript
public readonly cooldownWindowMinutes: number;
```

- *Type:* number

---

##### `maxRate`<sup>Required</sup> <a name="maxRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.maxRate"></a>

```typescript
public readonly maxRate: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | XraySamplingRuleSamplingRuleUpdateSamplingRateBoost;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost">XraySamplingRuleSamplingRuleUpdateSamplingRateBoost</a>

---


### XraySamplingRuleTagsList <a name="XraySamplingRuleTagsList" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.Initializer"></a>

```typescript
import { xraySamplingRule } from '@cdktn/provider-awscc'

new xraySamplingRule.XraySamplingRuleTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.get"></a>

```typescript
public get(index: number): XraySamplingRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | XraySamplingRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>[]

---


### XraySamplingRuleTagsOutputReference <a name="XraySamplingRuleTagsOutputReference" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer"></a>

```typescript
import { xraySamplingRule } from '@cdktn/provider-awscc'

new xraySamplingRule.XraySamplingRuleTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | XraySamplingRuleTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>

---



