# `eventsRule` Submodule <a name="`eventsRule` Submodule" id="@cdktn/provider-awscc.eventsRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventsRule <a name="EventsRule" id="@cdktn/provider-awscc.eventsRule.EventsRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule awscc_events_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRule.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRule(scope: Construct, id: string, config?: EventsRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig">EventsRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig">EventsRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.putTargets">putTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.resetEventBusName">resetEventBusName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.resetEventPattern">resetEventPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.resetScheduleExpression">resetScheduleExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.resetTargets">resetTargets</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.eventsRule.EventsRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.eventsRule.EventsRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.eventsRule.EventsRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.eventsRule.EventsRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.eventsRule.EventsRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.eventsRule.EventsRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.eventsRule.EventsRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.eventsRule.EventsRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.eventsRule.EventsRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.eventsRule.EventsRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.eventsRule.EventsRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.eventsRule.EventsRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.eventsRule.EventsRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.eventsRule.EventsRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsRule.EventsRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsRule.EventsRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.eventsRule.EventsRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsRule.EventsRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.eventsRule.EventsRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.eventsRule.EventsRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.eventsRule.EventsRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.eventsRule.EventsRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsRule.EventsRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.eventsRule.EventsRule.putTags"></a>

```typescript
public putTags(value: IResolvable | EventsRuleTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRule.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTags">EventsRuleTags</a>[]

---

##### `putTargets` <a name="putTargets" id="@cdktn/provider-awscc.eventsRule.EventsRule.putTargets"></a>

```typescript
public putTargets(value: IResolvable | EventsRuleTargets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRule.putTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets">EventsRuleTargets</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.eventsRule.EventsRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEventBusName` <a name="resetEventBusName" id="@cdktn/provider-awscc.eventsRule.EventsRule.resetEventBusName"></a>

```typescript
public resetEventBusName(): void
```

##### `resetEventPattern` <a name="resetEventPattern" id="@cdktn/provider-awscc.eventsRule.EventsRule.resetEventPattern"></a>

```typescript
public resetEventPattern(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.eventsRule.EventsRule.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.eventsRule.EventsRule.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetScheduleExpression` <a name="resetScheduleExpression" id="@cdktn/provider-awscc.eventsRule.EventsRule.resetScheduleExpression"></a>

```typescript
public resetScheduleExpression(): void
```

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.eventsRule.EventsRule.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.eventsRule.EventsRule.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTargets` <a name="resetTargets" id="@cdktn/provider-awscc.eventsRule.EventsRule.resetTargets"></a>

```typescript
public resetTargets(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EventsRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.eventsRule.EventsRule.isConstruct"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

eventsRule.EventsRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsRule.EventsRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.eventsRule.EventsRule.isTerraformElement"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

eventsRule.EventsRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsRule.EventsRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRule.isTerraformResource"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

eventsRule.EventsRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsRule.EventsRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.eventsRule.EventsRule.generateConfigForImport"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

eventsRule.EventsRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a EventsRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsRule.EventsRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.eventsRule.EventsRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EventsRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.eventsRule.EventsRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EventsRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsRule.EventsRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EventsRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsList">EventsRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList">EventsRuleTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.eventBusNameInput">eventBusNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.eventPatternInput">eventPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.scheduleExpressionInput">scheduleExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTags">EventsRuleTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.targetsInput">targetsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets">EventsRuleTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.eventBusName">eventBusName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.eventPattern">eventPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.tags"></a>

```typescript
public readonly tags: EventsRuleTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsList">EventsRuleTagsList</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.targets"></a>

```typescript
public readonly targets: EventsRuleTargetsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList">EventsRuleTargetsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `eventBusNameInput`<sup>Optional</sup> <a name="eventBusNameInput" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.eventBusNameInput"></a>

```typescript
public readonly eventBusNameInput: string;
```

- *Type:* string

---

##### `eventPatternInput`<sup>Optional</sup> <a name="eventPatternInput" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.eventPatternInput"></a>

```typescript
public readonly eventPatternInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `scheduleExpressionInput`<sup>Optional</sup> <a name="scheduleExpressionInput" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.scheduleExpressionInput"></a>

```typescript
public readonly scheduleExpressionInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | EventsRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTags">EventsRuleTags</a>[]

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.targetsInput"></a>

```typescript
public readonly targetsInput: IResolvable | EventsRuleTargets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets">EventsRuleTargets</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `eventBusName`<sup>Required</sup> <a name="eventBusName" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.eventBusName"></a>

```typescript
public readonly eventBusName: string;
```

- *Type:* string

---

##### `eventPattern`<sup>Required</sup> <a name="eventPattern" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.eventPattern"></a>

```typescript
public readonly eventPattern: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventsRuleConfig <a name="EventsRuleConfig" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

const eventsRuleConfig: eventsRule.EventsRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.description">description</a></code> | <code>string</code> | The description of the rule. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.eventBusName">eventBusName</a></code> | <code>string</code> | The name or ARN of the event bus associated with the rule. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.eventPattern">eventPattern</a></code> | <code>string</code> | The event pattern of the rule. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.name">name</a></code> | <code>string</code> | The name of the rule. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.roleArn">roleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the role that is used for target invocation. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | The scheduling expression. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.state">state</a></code> | <code>string</code> | The state of the rule. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTags">EventsRuleTags</a>[]</code> | Any tags assigned to the event rule. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.targets">targets</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets">EventsRuleTargets</a>[]</code> | Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#description EventsRule#description}

---

##### `eventBusName`<sup>Optional</sup> <a name="eventBusName" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.eventBusName"></a>

```typescript
public readonly eventBusName: string;
```

- *Type:* string

The name or ARN of the event bus associated with the rule.

If you omit this, the default event bus is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#event_bus_name EventsRule#event_bus_name}

---

##### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.eventPattern"></a>

```typescript
public readonly eventPattern: string;
```

- *Type:* string

The event pattern of the rule.

For more information, see Events and Event Patterns in the Amazon EventBridge User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#event_pattern EventsRule#event_pattern}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#name EventsRule#name}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the role that is used for target invocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#role_arn EventsRule#role_arn}

---

##### `scheduleExpression`<sup>Optional</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

The scheduling expression.

For example, "cron(0 20 * * ? *)", "rate(5 minutes)". For more information, see Creating an Amazon EventBridge rule that runs on a schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#schedule_expression EventsRule#schedule_expression}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

The state of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#state EventsRule#state}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | EventsRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTags">EventsRuleTags</a>[]

Any tags assigned to the event rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#tags EventsRule#tags}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.targets"></a>

```typescript
public readonly targets: IResolvable | EventsRuleTargets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets">EventsRuleTargets</a>[]

Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule.

Targets are the resources that are invoked when a rule is triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#targets EventsRule#targets}

---

### EventsRuleTags <a name="EventsRuleTags" id="@cdktn/provider-awscc.eventsRule.EventsRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTags.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

const eventsRuleTags: eventsRule.EventsRuleTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#key EventsRule#key}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#value EventsRule#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eventsRule.EventsRuleTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#key EventsRule#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#value EventsRule#value}.

---

### EventsRuleTargets <a name="EventsRuleTargets" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

const eventsRuleTargets: eventsRule.EventsRuleTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.appSyncParameters">appSyncParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParameters">EventsRuleTargetsAppSyncParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#app_sync_parameters EventsRule#app_sync_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#arn EventsRule#arn}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.batchParameters">batchParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters">EventsRuleTargetsBatchParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#batch_parameters EventsRule#batch_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.deadLetterConfig">deadLetterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfig">EventsRuleTargetsDeadLetterConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#dead_letter_config EventsRule#dead_letter_config}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.ecsParameters">ecsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters">EventsRuleTargetsEcsParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#ecs_parameters EventsRule#ecs_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.httpParameters">httpParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParameters">EventsRuleTargetsHttpParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#http_parameters EventsRule#http_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#id EventsRule#id}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.input">input</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#input EventsRule#input}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.inputPath">inputPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#input_path EventsRule#input_path}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.inputTransformer">inputTransformer</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformer">EventsRuleTargetsInputTransformer</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#input_transformer EventsRule#input_transformer}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.kinesisParameters">kinesisParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParameters">EventsRuleTargetsKinesisParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#kinesis_parameters EventsRule#kinesis_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.redshiftDataParameters">redshiftDataParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters">EventsRuleTargetsRedshiftDataParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#redshift_data_parameters EventsRule#redshift_data_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicy">EventsRuleTargetsRetryPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#retry_policy EventsRule#retry_policy}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#role_arn EventsRule#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.runCommandParameters">runCommandParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParameters">EventsRuleTargetsRunCommandParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#run_command_parameters EventsRule#run_command_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.sageMakerPipelineParameters">sageMakerPipelineParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParameters">EventsRuleTargetsSageMakerPipelineParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#sage_maker_pipeline_parameters EventsRule#sage_maker_pipeline_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.sqsParameters">sqsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParameters">EventsRuleTargetsSqsParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#sqs_parameters EventsRule#sqs_parameters}. |

---

##### `appSyncParameters`<sup>Optional</sup> <a name="appSyncParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.appSyncParameters"></a>

```typescript
public readonly appSyncParameters: EventsRuleTargetsAppSyncParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParameters">EventsRuleTargetsAppSyncParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#app_sync_parameters EventsRule#app_sync_parameters}.

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#arn EventsRule#arn}.

---

##### `batchParameters`<sup>Optional</sup> <a name="batchParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.batchParameters"></a>

```typescript
public readonly batchParameters: EventsRuleTargetsBatchParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters">EventsRuleTargetsBatchParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#batch_parameters EventsRule#batch_parameters}.

---

##### `deadLetterConfig`<sup>Optional</sup> <a name="deadLetterConfig" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.deadLetterConfig"></a>

```typescript
public readonly deadLetterConfig: EventsRuleTargetsDeadLetterConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfig">EventsRuleTargetsDeadLetterConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#dead_letter_config EventsRule#dead_letter_config}.

---

##### `ecsParameters`<sup>Optional</sup> <a name="ecsParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.ecsParameters"></a>

```typescript
public readonly ecsParameters: EventsRuleTargetsEcsParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters">EventsRuleTargetsEcsParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#ecs_parameters EventsRule#ecs_parameters}.

---

##### `httpParameters`<sup>Optional</sup> <a name="httpParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.httpParameters"></a>

```typescript
public readonly httpParameters: EventsRuleTargetsHttpParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParameters">EventsRuleTargetsHttpParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#http_parameters EventsRule#http_parameters}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#id EventsRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#input EventsRule#input}.

---

##### `inputPath`<sup>Optional</sup> <a name="inputPath" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.inputPath"></a>

```typescript
public readonly inputPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#input_path EventsRule#input_path}.

---

##### `inputTransformer`<sup>Optional</sup> <a name="inputTransformer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.inputTransformer"></a>

```typescript
public readonly inputTransformer: EventsRuleTargetsInputTransformer;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformer">EventsRuleTargetsInputTransformer</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#input_transformer EventsRule#input_transformer}.

---

##### `kinesisParameters`<sup>Optional</sup> <a name="kinesisParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.kinesisParameters"></a>

```typescript
public readonly kinesisParameters: EventsRuleTargetsKinesisParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParameters">EventsRuleTargetsKinesisParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#kinesis_parameters EventsRule#kinesis_parameters}.

---

##### `redshiftDataParameters`<sup>Optional</sup> <a name="redshiftDataParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.redshiftDataParameters"></a>

```typescript
public readonly redshiftDataParameters: EventsRuleTargetsRedshiftDataParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters">EventsRuleTargetsRedshiftDataParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#redshift_data_parameters EventsRule#redshift_data_parameters}.

---

##### `retryPolicy`<sup>Optional</sup> <a name="retryPolicy" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.retryPolicy"></a>

```typescript
public readonly retryPolicy: EventsRuleTargetsRetryPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicy">EventsRuleTargetsRetryPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#retry_policy EventsRule#retry_policy}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#role_arn EventsRule#role_arn}.

---

##### `runCommandParameters`<sup>Optional</sup> <a name="runCommandParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.runCommandParameters"></a>

```typescript
public readonly runCommandParameters: EventsRuleTargetsRunCommandParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParameters">EventsRuleTargetsRunCommandParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#run_command_parameters EventsRule#run_command_parameters}.

---

##### `sageMakerPipelineParameters`<sup>Optional</sup> <a name="sageMakerPipelineParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.sageMakerPipelineParameters"></a>

```typescript
public readonly sageMakerPipelineParameters: EventsRuleTargetsSageMakerPipelineParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParameters">EventsRuleTargetsSageMakerPipelineParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#sage_maker_pipeline_parameters EventsRule#sage_maker_pipeline_parameters}.

---

##### `sqsParameters`<sup>Optional</sup> <a name="sqsParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.sqsParameters"></a>

```typescript
public readonly sqsParameters: EventsRuleTargetsSqsParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParameters">EventsRuleTargetsSqsParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#sqs_parameters EventsRule#sqs_parameters}.

---

### EventsRuleTargetsAppSyncParameters <a name="EventsRuleTargetsAppSyncParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParameters.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

const eventsRuleTargetsAppSyncParameters: eventsRule.EventsRuleTargetsAppSyncParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParameters.property.graphQlOperation">graphQlOperation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#graph_ql_operation EventsRule#graph_ql_operation}. |

---

##### `graphQlOperation`<sup>Optional</sup> <a name="graphQlOperation" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParameters.property.graphQlOperation"></a>

```typescript
public readonly graphQlOperation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#graph_ql_operation EventsRule#graph_ql_operation}.

---

### EventsRuleTargetsBatchParameters <a name="EventsRuleTargetsBatchParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

const eventsRuleTargetsBatchParameters: eventsRule.EventsRuleTargetsBatchParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters.property.arrayProperties">arrayProperties</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayProperties">EventsRuleTargetsBatchParametersArrayProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#array_properties EventsRule#array_properties}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters.property.jobDefinition">jobDefinition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#job_definition EventsRule#job_definition}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters.property.jobName">jobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#job_name EventsRule#job_name}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters.property.retryStrategy">retryStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategy">EventsRuleTargetsBatchParametersRetryStrategy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#retry_strategy EventsRule#retry_strategy}. |

---

##### `arrayProperties`<sup>Optional</sup> <a name="arrayProperties" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters.property.arrayProperties"></a>

```typescript
public readonly arrayProperties: EventsRuleTargetsBatchParametersArrayProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayProperties">EventsRuleTargetsBatchParametersArrayProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#array_properties EventsRule#array_properties}.

---

##### `jobDefinition`<sup>Optional</sup> <a name="jobDefinition" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters.property.jobDefinition"></a>

```typescript
public readonly jobDefinition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#job_definition EventsRule#job_definition}.

---

##### `jobName`<sup>Optional</sup> <a name="jobName" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#job_name EventsRule#job_name}.

---

##### `retryStrategy`<sup>Optional</sup> <a name="retryStrategy" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters.property.retryStrategy"></a>

```typescript
public readonly retryStrategy: EventsRuleTargetsBatchParametersRetryStrategy;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategy">EventsRuleTargetsBatchParametersRetryStrategy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#retry_strategy EventsRule#retry_strategy}.

---

### EventsRuleTargetsBatchParametersArrayProperties <a name="EventsRuleTargetsBatchParametersArrayProperties" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayProperties.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

const eventsRuleTargetsBatchParametersArrayProperties: eventsRule.EventsRuleTargetsBatchParametersArrayProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayProperties.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#size EventsRule#size}. |

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayProperties.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#size EventsRule#size}.

---

### EventsRuleTargetsBatchParametersRetryStrategy <a name="EventsRuleTargetsBatchParametersRetryStrategy" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategy.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

const eventsRuleTargetsBatchParametersRetryStrategy: eventsRule.EventsRuleTargetsBatchParametersRetryStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategy.property.attempts">attempts</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#attempts EventsRule#attempts}. |

---

##### `attempts`<sup>Optional</sup> <a name="attempts" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategy.property.attempts"></a>

```typescript
public readonly attempts: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#attempts EventsRule#attempts}.

---

### EventsRuleTargetsDeadLetterConfig <a name="EventsRuleTargetsDeadLetterConfig" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfig.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

const eventsRuleTargetsDeadLetterConfig: eventsRule.EventsRuleTargetsDeadLetterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfig.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#arn EventsRule#arn}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#arn EventsRule#arn}.

---

### EventsRuleTargetsEcsParameters <a name="EventsRuleTargetsEcsParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

const eventsRuleTargetsEcsParameters: eventsRule.EventsRuleTargetsEcsParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy">EventsRuleTargetsEcsParametersCapacityProviderStrategy</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#capacity_provider_strategy EventsRule#capacity_provider_strategy}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.enableEcsManagedTags">enableEcsManagedTags</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#enable_ecs_managed_tags EventsRule#enable_ecs_managed_tags}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#enable_execute_command EventsRule#enable_execute_command}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.group">group</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#group EventsRule#group}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.launchType">launchType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#launch_type EventsRule#launch_type}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfiguration">EventsRuleTargetsEcsParametersNetworkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#network_configuration EventsRule#network_configuration}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.placementConstraints">placementConstraints</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints">EventsRuleTargetsEcsParametersPlacementConstraints</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#placement_constraints EventsRule#placement_constraints}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.placementStrategies">placementStrategies</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies">EventsRuleTargetsEcsParametersPlacementStrategies</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#placement_strategies EventsRule#placement_strategies}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.platformVersion">platformVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#platform_version EventsRule#platform_version}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.propagateTags">propagateTags</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#propagate_tags EventsRule#propagate_tags}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.referenceId">referenceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#reference_id EventsRule#reference_id}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.tagList">tagList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStruct">EventsRuleTargetsEcsParametersTagListStruct</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#tag_list EventsRule#tag_list}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.taskCount">taskCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#task_count EventsRule#task_count}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.taskDefinitionArn">taskDefinitionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#task_definition_arn EventsRule#task_definition_arn}. |

---

##### `capacityProviderStrategy`<sup>Optional</sup> <a name="capacityProviderStrategy" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.capacityProviderStrategy"></a>

```typescript
public readonly capacityProviderStrategy: IResolvable | EventsRuleTargetsEcsParametersCapacityProviderStrategy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy">EventsRuleTargetsEcsParametersCapacityProviderStrategy</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#capacity_provider_strategy EventsRule#capacity_provider_strategy}.

---

##### `enableEcsManagedTags`<sup>Optional</sup> <a name="enableEcsManagedTags" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.enableEcsManagedTags"></a>

```typescript
public readonly enableEcsManagedTags: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#enable_ecs_managed_tags EventsRule#enable_ecs_managed_tags}.

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="enableExecuteCommand" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.enableExecuteCommand"></a>

```typescript
public readonly enableExecuteCommand: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#enable_execute_command EventsRule#enable_execute_command}.

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#group EventsRule#group}.

---

##### `launchType`<sup>Optional</sup> <a name="launchType" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.launchType"></a>

```typescript
public readonly launchType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#launch_type EventsRule#launch_type}.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: EventsRuleTargetsEcsParametersNetworkConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfiguration">EventsRuleTargetsEcsParametersNetworkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#network_configuration EventsRule#network_configuration}.

---

##### `placementConstraints`<sup>Optional</sup> <a name="placementConstraints" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.placementConstraints"></a>

```typescript
public readonly placementConstraints: IResolvable | EventsRuleTargetsEcsParametersPlacementConstraints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints">EventsRuleTargetsEcsParametersPlacementConstraints</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#placement_constraints EventsRule#placement_constraints}.

---

##### `placementStrategies`<sup>Optional</sup> <a name="placementStrategies" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.placementStrategies"></a>

```typescript
public readonly placementStrategies: IResolvable | EventsRuleTargetsEcsParametersPlacementStrategies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies">EventsRuleTargetsEcsParametersPlacementStrategies</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#placement_strategies EventsRule#placement_strategies}.

---

##### `platformVersion`<sup>Optional</sup> <a name="platformVersion" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.platformVersion"></a>

```typescript
public readonly platformVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#platform_version EventsRule#platform_version}.

---

##### `propagateTags`<sup>Optional</sup> <a name="propagateTags" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.propagateTags"></a>

```typescript
public readonly propagateTags: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#propagate_tags EventsRule#propagate_tags}.

---

##### `referenceId`<sup>Optional</sup> <a name="referenceId" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.referenceId"></a>

```typescript
public readonly referenceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#reference_id EventsRule#reference_id}.

---

##### `tagList`<sup>Optional</sup> <a name="tagList" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.tagList"></a>

```typescript
public readonly tagList: IResolvable | EventsRuleTargetsEcsParametersTagListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStruct">EventsRuleTargetsEcsParametersTagListStruct</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#tag_list EventsRule#tag_list}.

---

##### `taskCount`<sup>Optional</sup> <a name="taskCount" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.taskCount"></a>

```typescript
public readonly taskCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#task_count EventsRule#task_count}.

---

##### `taskDefinitionArn`<sup>Optional</sup> <a name="taskDefinitionArn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.taskDefinitionArn"></a>

```typescript
public readonly taskDefinitionArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#task_definition_arn EventsRule#task_definition_arn}.

---

### EventsRuleTargetsEcsParametersCapacityProviderStrategy <a name="EventsRuleTargetsEcsParametersCapacityProviderStrategy" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

const eventsRuleTargetsEcsParametersCapacityProviderStrategy: eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy.property.base">base</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#base EventsRule#base}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy.property.capacityProvider">capacityProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#capacity_provider EventsRule#capacity_provider}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#weight EventsRule#weight}. |

---

##### `base`<sup>Optional</sup> <a name="base" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy.property.base"></a>

```typescript
public readonly base: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#base EventsRule#base}.

---

##### `capacityProvider`<sup>Optional</sup> <a name="capacityProvider" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy.property.capacityProvider"></a>

```typescript
public readonly capacityProvider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#capacity_provider EventsRule#capacity_provider}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#weight EventsRule#weight}.

---

### EventsRuleTargetsEcsParametersNetworkConfiguration <a name="EventsRuleTargetsEcsParametersNetworkConfiguration" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfiguration.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

const eventsRuleTargetsEcsParametersNetworkConfiguration: eventsRule.EventsRuleTargetsEcsParametersNetworkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfiguration.property.awsVpcConfiguration">awsVpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration">EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#aws_vpc_configuration EventsRule#aws_vpc_configuration}. |

---

##### `awsVpcConfiguration`<sup>Optional</sup> <a name="awsVpcConfiguration" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfiguration.property.awsVpcConfiguration"></a>

```typescript
public readonly awsVpcConfiguration: EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration">EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#aws_vpc_configuration EventsRule#aws_vpc_configuration}.

---

### EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration <a name="EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

const eventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration: eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration.property.assignPublicIp">assignPublicIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#assign_public_ip EventsRule#assign_public_ip}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#security_groups EventsRule#security_groups}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration.property.subnets">subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#subnets EventsRule#subnets}. |

---

##### `assignPublicIp`<sup>Optional</sup> <a name="assignPublicIp" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration.property.assignPublicIp"></a>

```typescript
public readonly assignPublicIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#assign_public_ip EventsRule#assign_public_ip}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#security_groups EventsRule#security_groups}.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#subnets EventsRule#subnets}.

---

### EventsRuleTargetsEcsParametersPlacementConstraints <a name="EventsRuleTargetsEcsParametersPlacementConstraints" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

const eventsRuleTargetsEcsParametersPlacementConstraints: eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#expression EventsRule#expression}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#type EventsRule#type}. |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#expression EventsRule#expression}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#type EventsRule#type}.

---

### EventsRuleTargetsEcsParametersPlacementStrategies <a name="EventsRuleTargetsEcsParametersPlacementStrategies" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

const eventsRuleTargetsEcsParametersPlacementStrategies: eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies.property.field">field</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#field EventsRule#field}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#type EventsRule#type}. |

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#field EventsRule#field}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#type EventsRule#type}.

---

### EventsRuleTargetsEcsParametersTagListStruct <a name="EventsRuleTargetsEcsParametersTagListStruct" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStruct.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

const eventsRuleTargetsEcsParametersTagListStruct: eventsRule.EventsRuleTargetsEcsParametersTagListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStruct.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#key EventsRule#key}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStruct.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#value EventsRule#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStruct.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#key EventsRule#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStruct.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#value EventsRule#value}.

---

### EventsRuleTargetsHttpParameters <a name="EventsRuleTargetsHttpParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParameters.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

const eventsRuleTargetsHttpParameters: eventsRule.EventsRuleTargetsHttpParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParameters.property.headerParameters">headerParameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#header_parameters EventsRule#header_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParameters.property.pathParameterValues">pathParameterValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#path_parameter_values EventsRule#path_parameter_values}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParameters.property.queryStringParameters">queryStringParameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#query_string_parameters EventsRule#query_string_parameters}. |

---

##### `headerParameters`<sup>Optional</sup> <a name="headerParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParameters.property.headerParameters"></a>

```typescript
public readonly headerParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#header_parameters EventsRule#header_parameters}.

---

##### `pathParameterValues`<sup>Optional</sup> <a name="pathParameterValues" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParameters.property.pathParameterValues"></a>

```typescript
public readonly pathParameterValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#path_parameter_values EventsRule#path_parameter_values}.

---

##### `queryStringParameters`<sup>Optional</sup> <a name="queryStringParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParameters.property.queryStringParameters"></a>

```typescript
public readonly queryStringParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#query_string_parameters EventsRule#query_string_parameters}.

---

### EventsRuleTargetsInputTransformer <a name="EventsRuleTargetsInputTransformer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformer.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

const eventsRuleTargetsInputTransformer: eventsRule.EventsRuleTargetsInputTransformer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformer.property.inputPathsMap">inputPathsMap</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#input_paths_map EventsRule#input_paths_map}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformer.property.inputTemplate">inputTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#input_template EventsRule#input_template}. |

---

##### `inputPathsMap`<sup>Optional</sup> <a name="inputPathsMap" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformer.property.inputPathsMap"></a>

```typescript
public readonly inputPathsMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#input_paths_map EventsRule#input_paths_map}.

---

##### `inputTemplate`<sup>Optional</sup> <a name="inputTemplate" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformer.property.inputTemplate"></a>

```typescript
public readonly inputTemplate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#input_template EventsRule#input_template}.

---

### EventsRuleTargetsKinesisParameters <a name="EventsRuleTargetsKinesisParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParameters.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

const eventsRuleTargetsKinesisParameters: eventsRule.EventsRuleTargetsKinesisParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParameters.property.partitionKeyPath">partitionKeyPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#partition_key_path EventsRule#partition_key_path}. |

---

##### `partitionKeyPath`<sup>Optional</sup> <a name="partitionKeyPath" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParameters.property.partitionKeyPath"></a>

```typescript
public readonly partitionKeyPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#partition_key_path EventsRule#partition_key_path}.

---

### EventsRuleTargetsRedshiftDataParameters <a name="EventsRuleTargetsRedshiftDataParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

const eventsRuleTargetsRedshiftDataParameters: eventsRule.EventsRuleTargetsRedshiftDataParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters.property.database">database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#database EventsRule#database}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters.property.dbUser">dbUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#db_user EventsRule#db_user}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters.property.secretManagerArn">secretManagerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#secret_manager_arn EventsRule#secret_manager_arn}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters.property.sql">sql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#sql EventsRule#sql}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters.property.sqls">sqls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#sqls EventsRule#sqls}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters.property.statementName">statementName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#statement_name EventsRule#statement_name}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters.property.withEvent">withEvent</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#with_event EventsRule#with_event}. |

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#database EventsRule#database}.

---

##### `dbUser`<sup>Optional</sup> <a name="dbUser" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters.property.dbUser"></a>

```typescript
public readonly dbUser: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#db_user EventsRule#db_user}.

---

##### `secretManagerArn`<sup>Optional</sup> <a name="secretManagerArn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters.property.secretManagerArn"></a>

```typescript
public readonly secretManagerArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#secret_manager_arn EventsRule#secret_manager_arn}.

---

##### `sql`<sup>Optional</sup> <a name="sql" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#sql EventsRule#sql}.

---

##### `sqls`<sup>Optional</sup> <a name="sqls" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters.property.sqls"></a>

```typescript
public readonly sqls: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#sqls EventsRule#sqls}.

---

##### `statementName`<sup>Optional</sup> <a name="statementName" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters.property.statementName"></a>

```typescript
public readonly statementName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#statement_name EventsRule#statement_name}.

---

##### `withEvent`<sup>Optional</sup> <a name="withEvent" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters.property.withEvent"></a>

```typescript
public readonly withEvent: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#with_event EventsRule#with_event}.

---

### EventsRuleTargetsRetryPolicy <a name="EventsRuleTargetsRetryPolicy" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicy.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

const eventsRuleTargetsRetryPolicy: eventsRule.EventsRuleTargetsRetryPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicy.property.maximumEventAgeInSeconds">maximumEventAgeInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#maximum_event_age_in_seconds EventsRule#maximum_event_age_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicy.property.maximumRetryAttempts">maximumRetryAttempts</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#maximum_retry_attempts EventsRule#maximum_retry_attempts}. |

---

##### `maximumEventAgeInSeconds`<sup>Optional</sup> <a name="maximumEventAgeInSeconds" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicy.property.maximumEventAgeInSeconds"></a>

```typescript
public readonly maximumEventAgeInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#maximum_event_age_in_seconds EventsRule#maximum_event_age_in_seconds}.

---

##### `maximumRetryAttempts`<sup>Optional</sup> <a name="maximumRetryAttempts" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicy.property.maximumRetryAttempts"></a>

```typescript
public readonly maximumRetryAttempts: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#maximum_retry_attempts EventsRule#maximum_retry_attempts}.

---

### EventsRuleTargetsRunCommandParameters <a name="EventsRuleTargetsRunCommandParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParameters.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

const eventsRuleTargetsRunCommandParameters: eventsRule.EventsRuleTargetsRunCommandParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParameters.property.runCommandTargets">runCommandTargets</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets">EventsRuleTargetsRunCommandParametersRunCommandTargets</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#run_command_targets EventsRule#run_command_targets}. |

---

##### `runCommandTargets`<sup>Optional</sup> <a name="runCommandTargets" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParameters.property.runCommandTargets"></a>

```typescript
public readonly runCommandTargets: IResolvable | EventsRuleTargetsRunCommandParametersRunCommandTargets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets">EventsRuleTargetsRunCommandParametersRunCommandTargets</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#run_command_targets EventsRule#run_command_targets}.

---

### EventsRuleTargetsRunCommandParametersRunCommandTargets <a name="EventsRuleTargetsRunCommandParametersRunCommandTargets" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

const eventsRuleTargetsRunCommandParametersRunCommandTargets: eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#key EventsRule#key}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#values EventsRule#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#key EventsRule#key}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#values EventsRule#values}.

---

### EventsRuleTargetsSageMakerPipelineParameters <a name="EventsRuleTargetsSageMakerPipelineParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParameters.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

const eventsRuleTargetsSageMakerPipelineParameters: eventsRule.EventsRuleTargetsSageMakerPipelineParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParameters.property.pipelineParameterList">pipelineParameterList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct">EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#pipeline_parameter_list EventsRule#pipeline_parameter_list}. |

---

##### `pipelineParameterList`<sup>Optional</sup> <a name="pipelineParameterList" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParameters.property.pipelineParameterList"></a>

```typescript
public readonly pipelineParameterList: IResolvable | EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct">EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#pipeline_parameter_list EventsRule#pipeline_parameter_list}.

---

### EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct <a name="EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

const eventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct: eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#name EventsRule#name}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#value EventsRule#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#name EventsRule#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#value EventsRule#value}.

---

### EventsRuleTargetsSqsParameters <a name="EventsRuleTargetsSqsParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParameters.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

const eventsRuleTargetsSqsParameters: eventsRule.EventsRuleTargetsSqsParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParameters.property.messageGroupId">messageGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#message_group_id EventsRule#message_group_id}. |

---

##### `messageGroupId`<sup>Optional</sup> <a name="messageGroupId" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParameters.property.messageGroupId"></a>

```typescript
public readonly messageGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#message_group_id EventsRule#message_group_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventsRuleTagsList <a name="EventsRuleTagsList" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRuleTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.get"></a>

```typescript
public get(index: number): EventsRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTags">EventsRuleTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTags">EventsRuleTags</a>[]

---


### EventsRuleTagsOutputReference <a name="EventsRuleTagsOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRuleTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTags">EventsRuleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsRuleTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTags">EventsRuleTags</a>

---


### EventsRuleTargetsAppSyncParametersOutputReference <a name="EventsRuleTargetsAppSyncParametersOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRuleTargetsAppSyncParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.resetGraphQlOperation">resetGraphQlOperation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGraphQlOperation` <a name="resetGraphQlOperation" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.resetGraphQlOperation"></a>

```typescript
public resetGraphQlOperation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.property.graphQlOperationInput">graphQlOperationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.property.graphQlOperation">graphQlOperation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParameters">EventsRuleTargetsAppSyncParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `graphQlOperationInput`<sup>Optional</sup> <a name="graphQlOperationInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.property.graphQlOperationInput"></a>

```typescript
public readonly graphQlOperationInput: string;
```

- *Type:* string

---

##### `graphQlOperation`<sup>Required</sup> <a name="graphQlOperation" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.property.graphQlOperation"></a>

```typescript
public readonly graphQlOperation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsRuleTargetsAppSyncParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParameters">EventsRuleTargetsAppSyncParameters</a>

---


### EventsRuleTargetsBatchParametersArrayPropertiesOutputReference <a name="EventsRuleTargetsBatchParametersArrayPropertiesOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.resetSize">resetSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSize` <a name="resetSize" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.resetSize"></a>

```typescript
public resetSize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayProperties">EventsRuleTargetsBatchParametersArrayProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsRuleTargetsBatchParametersArrayProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayProperties">EventsRuleTargetsBatchParametersArrayProperties</a>

---


### EventsRuleTargetsBatchParametersOutputReference <a name="EventsRuleTargetsBatchParametersOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRuleTargetsBatchParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.putArrayProperties">putArrayProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.putRetryStrategy">putRetryStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.resetArrayProperties">resetArrayProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.resetJobDefinition">resetJobDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.resetJobName">resetJobName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.resetRetryStrategy">resetRetryStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putArrayProperties` <a name="putArrayProperties" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.putArrayProperties"></a>

```typescript
public putArrayProperties(value: EventsRuleTargetsBatchParametersArrayProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.putArrayProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayProperties">EventsRuleTargetsBatchParametersArrayProperties</a>

---

##### `putRetryStrategy` <a name="putRetryStrategy" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.putRetryStrategy"></a>

```typescript
public putRetryStrategy(value: EventsRuleTargetsBatchParametersRetryStrategy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.putRetryStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategy">EventsRuleTargetsBatchParametersRetryStrategy</a>

---

##### `resetArrayProperties` <a name="resetArrayProperties" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.resetArrayProperties"></a>

```typescript
public resetArrayProperties(): void
```

##### `resetJobDefinition` <a name="resetJobDefinition" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.resetJobDefinition"></a>

```typescript
public resetJobDefinition(): void
```

##### `resetJobName` <a name="resetJobName" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.resetJobName"></a>

```typescript
public resetJobName(): void
```

##### `resetRetryStrategy` <a name="resetRetryStrategy" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.resetRetryStrategy"></a>

```typescript
public resetRetryStrategy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.arrayProperties">arrayProperties</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference">EventsRuleTargetsBatchParametersArrayPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.retryStrategy">retryStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference">EventsRuleTargetsBatchParametersRetryStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.arrayPropertiesInput">arrayPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayProperties">EventsRuleTargetsBatchParametersArrayProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.jobDefinitionInput">jobDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.jobNameInput">jobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.retryStrategyInput">retryStrategyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategy">EventsRuleTargetsBatchParametersRetryStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.jobDefinition">jobDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.jobName">jobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters">EventsRuleTargetsBatchParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arrayProperties`<sup>Required</sup> <a name="arrayProperties" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.arrayProperties"></a>

```typescript
public readonly arrayProperties: EventsRuleTargetsBatchParametersArrayPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference">EventsRuleTargetsBatchParametersArrayPropertiesOutputReference</a>

---

##### `retryStrategy`<sup>Required</sup> <a name="retryStrategy" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.retryStrategy"></a>

```typescript
public readonly retryStrategy: EventsRuleTargetsBatchParametersRetryStrategyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference">EventsRuleTargetsBatchParametersRetryStrategyOutputReference</a>

---

##### `arrayPropertiesInput`<sup>Optional</sup> <a name="arrayPropertiesInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.arrayPropertiesInput"></a>

```typescript
public readonly arrayPropertiesInput: IResolvable | EventsRuleTargetsBatchParametersArrayProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayProperties">EventsRuleTargetsBatchParametersArrayProperties</a>

---

##### `jobDefinitionInput`<sup>Optional</sup> <a name="jobDefinitionInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.jobDefinitionInput"></a>

```typescript
public readonly jobDefinitionInput: string;
```

- *Type:* string

---

##### `jobNameInput`<sup>Optional</sup> <a name="jobNameInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.jobNameInput"></a>

```typescript
public readonly jobNameInput: string;
```

- *Type:* string

---

##### `retryStrategyInput`<sup>Optional</sup> <a name="retryStrategyInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.retryStrategyInput"></a>

```typescript
public readonly retryStrategyInput: IResolvable | EventsRuleTargetsBatchParametersRetryStrategy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategy">EventsRuleTargetsBatchParametersRetryStrategy</a>

---

##### `jobDefinition`<sup>Required</sup> <a name="jobDefinition" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.jobDefinition"></a>

```typescript
public readonly jobDefinition: string;
```

- *Type:* string

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsRuleTargetsBatchParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters">EventsRuleTargetsBatchParameters</a>

---


### EventsRuleTargetsBatchParametersRetryStrategyOutputReference <a name="EventsRuleTargetsBatchParametersRetryStrategyOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.resetAttempts">resetAttempts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttempts` <a name="resetAttempts" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.resetAttempts"></a>

```typescript
public resetAttempts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.attemptsInput">attemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.attempts">attempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategy">EventsRuleTargetsBatchParametersRetryStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attemptsInput`<sup>Optional</sup> <a name="attemptsInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.attemptsInput"></a>

```typescript
public readonly attemptsInput: number;
```

- *Type:* number

---

##### `attempts`<sup>Required</sup> <a name="attempts" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.attempts"></a>

```typescript
public readonly attempts: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsRuleTargetsBatchParametersRetryStrategy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategy">EventsRuleTargetsBatchParametersRetryStrategy</a>

---


### EventsRuleTargetsDeadLetterConfigOutputReference <a name="EventsRuleTargetsDeadLetterConfigOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.resetArn">resetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.resetArn"></a>

```typescript
public resetArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfig">EventsRuleTargetsDeadLetterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsRuleTargetsDeadLetterConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfig">EventsRuleTargetsDeadLetterConfig</a>

---


### EventsRuleTargetsEcsParametersCapacityProviderStrategyList <a name="EventsRuleTargetsEcsParametersCapacityProviderStrategyList" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.get"></a>

```typescript
public get(index: number): EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy">EventsRuleTargetsEcsParametersCapacityProviderStrategy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsRuleTargetsEcsParametersCapacityProviderStrategy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy">EventsRuleTargetsEcsParametersCapacityProviderStrategy</a>[]

---


### EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference <a name="EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.resetBase">resetBase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.resetCapacityProvider">resetCapacityProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBase` <a name="resetBase" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.resetBase"></a>

```typescript
public resetBase(): void
```

##### `resetCapacityProvider` <a name="resetCapacityProvider" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.resetCapacityProvider"></a>

```typescript
public resetCapacityProvider(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.baseInput">baseInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.capacityProviderInput">capacityProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.base">base</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.capacityProvider">capacityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy">EventsRuleTargetsEcsParametersCapacityProviderStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseInput`<sup>Optional</sup> <a name="baseInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.baseInput"></a>

```typescript
public readonly baseInput: number;
```

- *Type:* number

---

##### `capacityProviderInput`<sup>Optional</sup> <a name="capacityProviderInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.capacityProviderInput"></a>

```typescript
public readonly capacityProviderInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.base"></a>

```typescript
public readonly base: number;
```

- *Type:* number

---

##### `capacityProvider`<sup>Required</sup> <a name="capacityProvider" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```typescript
public readonly capacityProvider: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsRuleTargetsEcsParametersCapacityProviderStrategy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy">EventsRuleTargetsEcsParametersCapacityProviderStrategy</a>

---


### EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference <a name="EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.resetAssignPublicIp">resetAssignPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssignPublicIp` <a name="resetAssignPublicIp" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.resetAssignPublicIp"></a>

```typescript
public resetAssignPublicIp(): void
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.resetSubnets"></a>

```typescript
public resetSubnets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.assignPublicIpInput">assignPublicIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.assignPublicIp">assignPublicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration">EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assignPublicIpInput`<sup>Optional</sup> <a name="assignPublicIpInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.assignPublicIpInput"></a>

```typescript
public readonly assignPublicIpInput: string;
```

- *Type:* string

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.subnetsInput"></a>

```typescript
public readonly subnetsInput: string[];
```

- *Type:* string[]

---

##### `assignPublicIp`<sup>Required</sup> <a name="assignPublicIp" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.assignPublicIp"></a>

```typescript
public readonly assignPublicIp: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration">EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration</a>

---


### EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference <a name="EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.putAwsVpcConfiguration">putAwsVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.resetAwsVpcConfiguration">resetAwsVpcConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsVpcConfiguration` <a name="putAwsVpcConfiguration" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.putAwsVpcConfiguration"></a>

```typescript
public putAwsVpcConfiguration(value: EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.putAwsVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration">EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration</a>

---

##### `resetAwsVpcConfiguration` <a name="resetAwsVpcConfiguration" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.resetAwsVpcConfiguration"></a>

```typescript
public resetAwsVpcConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.awsVpcConfiguration">awsVpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference">EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.awsVpcConfigurationInput">awsVpcConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration">EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfiguration">EventsRuleTargetsEcsParametersNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsVpcConfiguration`<sup>Required</sup> <a name="awsVpcConfiguration" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.awsVpcConfiguration"></a>

```typescript
public readonly awsVpcConfiguration: EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference">EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference</a>

---

##### `awsVpcConfigurationInput`<sup>Optional</sup> <a name="awsVpcConfigurationInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.awsVpcConfigurationInput"></a>

```typescript
public readonly awsVpcConfigurationInput: IResolvable | EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration">EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsRuleTargetsEcsParametersNetworkConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfiguration">EventsRuleTargetsEcsParametersNetworkConfiguration</a>

---


### EventsRuleTargetsEcsParametersOutputReference <a name="EventsRuleTargetsEcsParametersOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRuleTargetsEcsParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.putCapacityProviderStrategy">putCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.putPlacementConstraints">putPlacementConstraints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.putPlacementStrategies">putPlacementStrategies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.putTagList">putTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetCapacityProviderStrategy">resetCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetEnableEcsManagedTags">resetEnableEcsManagedTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetEnableExecuteCommand">resetEnableExecuteCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetLaunchType">resetLaunchType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetPlacementConstraints">resetPlacementConstraints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetPlacementStrategies">resetPlacementStrategies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetPlatformVersion">resetPlatformVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetPropagateTags">resetPropagateTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetReferenceId">resetReferenceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetTagList">resetTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetTaskCount">resetTaskCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetTaskDefinitionArn">resetTaskDefinitionArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCapacityProviderStrategy` <a name="putCapacityProviderStrategy" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.putCapacityProviderStrategy"></a>

```typescript
public putCapacityProviderStrategy(value: IResolvable | EventsRuleTargetsEcsParametersCapacityProviderStrategy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.putCapacityProviderStrategy.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy">EventsRuleTargetsEcsParametersCapacityProviderStrategy</a>[]

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.putNetworkConfiguration"></a>

```typescript
public putNetworkConfiguration(value: EventsRuleTargetsEcsParametersNetworkConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfiguration">EventsRuleTargetsEcsParametersNetworkConfiguration</a>

---

##### `putPlacementConstraints` <a name="putPlacementConstraints" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.putPlacementConstraints"></a>

```typescript
public putPlacementConstraints(value: IResolvable | EventsRuleTargetsEcsParametersPlacementConstraints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.putPlacementConstraints.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints">EventsRuleTargetsEcsParametersPlacementConstraints</a>[]

---

##### `putPlacementStrategies` <a name="putPlacementStrategies" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.putPlacementStrategies"></a>

```typescript
public putPlacementStrategies(value: IResolvable | EventsRuleTargetsEcsParametersPlacementStrategies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.putPlacementStrategies.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies">EventsRuleTargetsEcsParametersPlacementStrategies</a>[]

---

##### `putTagList` <a name="putTagList" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.putTagList"></a>

```typescript
public putTagList(value: IResolvable | EventsRuleTargetsEcsParametersTagListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.putTagList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStruct">EventsRuleTargetsEcsParametersTagListStruct</a>[]

---

##### `resetCapacityProviderStrategy` <a name="resetCapacityProviderStrategy" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetCapacityProviderStrategy"></a>

```typescript
public resetCapacityProviderStrategy(): void
```

##### `resetEnableEcsManagedTags` <a name="resetEnableEcsManagedTags" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetEnableEcsManagedTags"></a>

```typescript
public resetEnableEcsManagedTags(): void
```

##### `resetEnableExecuteCommand` <a name="resetEnableExecuteCommand" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetEnableExecuteCommand"></a>

```typescript
public resetEnableExecuteCommand(): void
```

##### `resetGroup` <a name="resetGroup" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetGroup"></a>

```typescript
public resetGroup(): void
```

##### `resetLaunchType` <a name="resetLaunchType" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetLaunchType"></a>

```typescript
public resetLaunchType(): void
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetNetworkConfiguration"></a>

```typescript
public resetNetworkConfiguration(): void
```

##### `resetPlacementConstraints` <a name="resetPlacementConstraints" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetPlacementConstraints"></a>

```typescript
public resetPlacementConstraints(): void
```

##### `resetPlacementStrategies` <a name="resetPlacementStrategies" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetPlacementStrategies"></a>

```typescript
public resetPlacementStrategies(): void
```

##### `resetPlatformVersion` <a name="resetPlatformVersion" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetPlatformVersion"></a>

```typescript
public resetPlatformVersion(): void
```

##### `resetPropagateTags` <a name="resetPropagateTags" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetPropagateTags"></a>

```typescript
public resetPropagateTags(): void
```

##### `resetReferenceId` <a name="resetReferenceId" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetReferenceId"></a>

```typescript
public resetReferenceId(): void
```

##### `resetTagList` <a name="resetTagList" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetTagList"></a>

```typescript
public resetTagList(): void
```

##### `resetTaskCount` <a name="resetTaskCount" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetTaskCount"></a>

```typescript
public resetTaskCount(): void
```

##### `resetTaskDefinitionArn` <a name="resetTaskDefinitionArn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetTaskDefinitionArn"></a>

```typescript
public resetTaskDefinitionArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList">EventsRuleTargetsEcsParametersCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference">EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.placementConstraints">placementConstraints</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList">EventsRuleTargetsEcsParametersPlacementConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.placementStrategies">placementStrategies</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList">EventsRuleTargetsEcsParametersPlacementStrategiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.tagList">tagList</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList">EventsRuleTargetsEcsParametersTagListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.capacityProviderStrategyInput">capacityProviderStrategyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy">EventsRuleTargetsEcsParametersCapacityProviderStrategy</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.enableEcsManagedTagsInput">enableEcsManagedTagsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.enableExecuteCommandInput">enableExecuteCommandInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.launchTypeInput">launchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfiguration">EventsRuleTargetsEcsParametersNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.placementConstraintsInput">placementConstraintsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints">EventsRuleTargetsEcsParametersPlacementConstraints</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.placementStrategiesInput">placementStrategiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies">EventsRuleTargetsEcsParametersPlacementStrategies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.platformVersionInput">platformVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.propagateTagsInput">propagateTagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.referenceIdInput">referenceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.tagListInput">tagListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStruct">EventsRuleTargetsEcsParametersTagListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.taskCountInput">taskCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.taskDefinitionArnInput">taskDefinitionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.enableEcsManagedTags">enableEcsManagedTags</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.launchType">launchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.platformVersion">platformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.propagateTags">propagateTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.referenceId">referenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.taskCount">taskCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.taskDefinitionArn">taskDefinitionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters">EventsRuleTargetsEcsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityProviderStrategy`<sup>Required</sup> <a name="capacityProviderStrategy" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.capacityProviderStrategy"></a>

```typescript
public readonly capacityProviderStrategy: EventsRuleTargetsEcsParametersCapacityProviderStrategyList;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList">EventsRuleTargetsEcsParametersCapacityProviderStrategyList</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference">EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference</a>

---

##### `placementConstraints`<sup>Required</sup> <a name="placementConstraints" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.placementConstraints"></a>

```typescript
public readonly placementConstraints: EventsRuleTargetsEcsParametersPlacementConstraintsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList">EventsRuleTargetsEcsParametersPlacementConstraintsList</a>

---

##### `placementStrategies`<sup>Required</sup> <a name="placementStrategies" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.placementStrategies"></a>

```typescript
public readonly placementStrategies: EventsRuleTargetsEcsParametersPlacementStrategiesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList">EventsRuleTargetsEcsParametersPlacementStrategiesList</a>

---

##### `tagList`<sup>Required</sup> <a name="tagList" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.tagList"></a>

```typescript
public readonly tagList: EventsRuleTargetsEcsParametersTagListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList">EventsRuleTargetsEcsParametersTagListStructList</a>

---

##### `capacityProviderStrategyInput`<sup>Optional</sup> <a name="capacityProviderStrategyInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.capacityProviderStrategyInput"></a>

```typescript
public readonly capacityProviderStrategyInput: IResolvable | EventsRuleTargetsEcsParametersCapacityProviderStrategy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy">EventsRuleTargetsEcsParametersCapacityProviderStrategy</a>[]

---

##### `enableEcsManagedTagsInput`<sup>Optional</sup> <a name="enableEcsManagedTagsInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.enableEcsManagedTagsInput"></a>

```typescript
public readonly enableEcsManagedTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableExecuteCommandInput`<sup>Optional</sup> <a name="enableExecuteCommandInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.enableExecuteCommandInput"></a>

```typescript
public readonly enableExecuteCommandInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `launchTypeInput`<sup>Optional</sup> <a name="launchTypeInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.launchTypeInput"></a>

```typescript
public readonly launchTypeInput: string;
```

- *Type:* string

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.networkConfigurationInput"></a>

```typescript
public readonly networkConfigurationInput: IResolvable | EventsRuleTargetsEcsParametersNetworkConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfiguration">EventsRuleTargetsEcsParametersNetworkConfiguration</a>

---

##### `placementConstraintsInput`<sup>Optional</sup> <a name="placementConstraintsInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.placementConstraintsInput"></a>

```typescript
public readonly placementConstraintsInput: IResolvable | EventsRuleTargetsEcsParametersPlacementConstraints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints">EventsRuleTargetsEcsParametersPlacementConstraints</a>[]

---

##### `placementStrategiesInput`<sup>Optional</sup> <a name="placementStrategiesInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.placementStrategiesInput"></a>

```typescript
public readonly placementStrategiesInput: IResolvable | EventsRuleTargetsEcsParametersPlacementStrategies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies">EventsRuleTargetsEcsParametersPlacementStrategies</a>[]

---

##### `platformVersionInput`<sup>Optional</sup> <a name="platformVersionInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.platformVersionInput"></a>

```typescript
public readonly platformVersionInput: string;
```

- *Type:* string

---

##### `propagateTagsInput`<sup>Optional</sup> <a name="propagateTagsInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.propagateTagsInput"></a>

```typescript
public readonly propagateTagsInput: string;
```

- *Type:* string

---

##### `referenceIdInput`<sup>Optional</sup> <a name="referenceIdInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.referenceIdInput"></a>

```typescript
public readonly referenceIdInput: string;
```

- *Type:* string

---

##### `tagListInput`<sup>Optional</sup> <a name="tagListInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.tagListInput"></a>

```typescript
public readonly tagListInput: IResolvable | EventsRuleTargetsEcsParametersTagListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStruct">EventsRuleTargetsEcsParametersTagListStruct</a>[]

---

##### `taskCountInput`<sup>Optional</sup> <a name="taskCountInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.taskCountInput"></a>

```typescript
public readonly taskCountInput: number;
```

- *Type:* number

---

##### `taskDefinitionArnInput`<sup>Optional</sup> <a name="taskDefinitionArnInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.taskDefinitionArnInput"></a>

```typescript
public readonly taskDefinitionArnInput: string;
```

- *Type:* string

---

##### `enableEcsManagedTags`<sup>Required</sup> <a name="enableEcsManagedTags" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.enableEcsManagedTags"></a>

```typescript
public readonly enableEcsManagedTags: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableExecuteCommand`<sup>Required</sup> <a name="enableExecuteCommand" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.enableExecuteCommand"></a>

```typescript
public readonly enableExecuteCommand: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `launchType`<sup>Required</sup> <a name="launchType" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.launchType"></a>

```typescript
public readonly launchType: string;
```

- *Type:* string

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.platformVersion"></a>

```typescript
public readonly platformVersion: string;
```

- *Type:* string

---

##### `propagateTags`<sup>Required</sup> <a name="propagateTags" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.propagateTags"></a>

```typescript
public readonly propagateTags: string;
```

- *Type:* string

---

##### `referenceId`<sup>Required</sup> <a name="referenceId" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.referenceId"></a>

```typescript
public readonly referenceId: string;
```

- *Type:* string

---

##### `taskCount`<sup>Required</sup> <a name="taskCount" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.taskCount"></a>

```typescript
public readonly taskCount: number;
```

- *Type:* number

---

##### `taskDefinitionArn`<sup>Required</sup> <a name="taskDefinitionArn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.taskDefinitionArn"></a>

```typescript
public readonly taskDefinitionArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsRuleTargetsEcsParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters">EventsRuleTargetsEcsParameters</a>

---


### EventsRuleTargetsEcsParametersPlacementConstraintsList <a name="EventsRuleTargetsEcsParametersPlacementConstraintsList" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.get"></a>

```typescript
public get(index: number): EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints">EventsRuleTargetsEcsParametersPlacementConstraints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsRuleTargetsEcsParametersPlacementConstraints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints">EventsRuleTargetsEcsParametersPlacementConstraints</a>[]

---


### EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference <a name="EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpression` <a name="resetExpression" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints">EventsRuleTargetsEcsParametersPlacementConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsRuleTargetsEcsParametersPlacementConstraints;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints">EventsRuleTargetsEcsParametersPlacementConstraints</a>

---


### EventsRuleTargetsEcsParametersPlacementStrategiesList <a name="EventsRuleTargetsEcsParametersPlacementStrategiesList" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.get"></a>

```typescript
public get(index: number): EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies">EventsRuleTargetsEcsParametersPlacementStrategies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsRuleTargetsEcsParametersPlacementStrategies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies">EventsRuleTargetsEcsParametersPlacementStrategies</a>[]

---


### EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference <a name="EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.resetField">resetField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetField` <a name="resetField" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.resetField"></a>

```typescript
public resetField(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies">EventsRuleTargetsEcsParametersPlacementStrategies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsRuleTargetsEcsParametersPlacementStrategies;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies">EventsRuleTargetsEcsParametersPlacementStrategies</a>

---


### EventsRuleTargetsEcsParametersTagListStructList <a name="EventsRuleTargetsEcsParametersTagListStructList" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRuleTargetsEcsParametersTagListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.get"></a>

```typescript
public get(index: number): EventsRuleTargetsEcsParametersTagListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStruct">EventsRuleTargetsEcsParametersTagListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsRuleTargetsEcsParametersTagListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStruct">EventsRuleTargetsEcsParametersTagListStruct</a>[]

---


### EventsRuleTargetsEcsParametersTagListStructOutputReference <a name="EventsRuleTargetsEcsParametersTagListStructOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStruct">EventsRuleTargetsEcsParametersTagListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsRuleTargetsEcsParametersTagListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStruct">EventsRuleTargetsEcsParametersTagListStruct</a>

---


### EventsRuleTargetsHttpParametersOutputReference <a name="EventsRuleTargetsHttpParametersOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRuleTargetsHttpParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.resetHeaderParameters">resetHeaderParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.resetPathParameterValues">resetPathParameterValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.resetQueryStringParameters">resetQueryStringParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaderParameters` <a name="resetHeaderParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.resetHeaderParameters"></a>

```typescript
public resetHeaderParameters(): void
```

##### `resetPathParameterValues` <a name="resetPathParameterValues" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.resetPathParameterValues"></a>

```typescript
public resetPathParameterValues(): void
```

##### `resetQueryStringParameters` <a name="resetQueryStringParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.resetQueryStringParameters"></a>

```typescript
public resetQueryStringParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.headerParametersInput">headerParametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.pathParameterValuesInput">pathParameterValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.queryStringParametersInput">queryStringParametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.headerParameters">headerParameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.pathParameterValues">pathParameterValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.queryStringParameters">queryStringParameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParameters">EventsRuleTargetsHttpParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerParametersInput`<sup>Optional</sup> <a name="headerParametersInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.headerParametersInput"></a>

```typescript
public readonly headerParametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pathParameterValuesInput`<sup>Optional</sup> <a name="pathParameterValuesInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.pathParameterValuesInput"></a>

```typescript
public readonly pathParameterValuesInput: string[];
```

- *Type:* string[]

---

##### `queryStringParametersInput`<sup>Optional</sup> <a name="queryStringParametersInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.queryStringParametersInput"></a>

```typescript
public readonly queryStringParametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `headerParameters`<sup>Required</sup> <a name="headerParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.headerParameters"></a>

```typescript
public readonly headerParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pathParameterValues`<sup>Required</sup> <a name="pathParameterValues" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.pathParameterValues"></a>

```typescript
public readonly pathParameterValues: string[];
```

- *Type:* string[]

---

##### `queryStringParameters`<sup>Required</sup> <a name="queryStringParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.queryStringParameters"></a>

```typescript
public readonly queryStringParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsRuleTargetsHttpParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParameters">EventsRuleTargetsHttpParameters</a>

---


### EventsRuleTargetsInputTransformerOutputReference <a name="EventsRuleTargetsInputTransformerOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRuleTargetsInputTransformerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.resetInputPathsMap">resetInputPathsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.resetInputTemplate">resetInputTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInputPathsMap` <a name="resetInputPathsMap" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.resetInputPathsMap"></a>

```typescript
public resetInputPathsMap(): void
```

##### `resetInputTemplate` <a name="resetInputTemplate" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.resetInputTemplate"></a>

```typescript
public resetInputTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.property.inputPathsMapInput">inputPathsMapInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.property.inputTemplateInput">inputTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.property.inputPathsMap">inputPathsMap</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.property.inputTemplate">inputTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformer">EventsRuleTargetsInputTransformer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputPathsMapInput`<sup>Optional</sup> <a name="inputPathsMapInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.property.inputPathsMapInput"></a>

```typescript
public readonly inputPathsMapInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `inputTemplateInput`<sup>Optional</sup> <a name="inputTemplateInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.property.inputTemplateInput"></a>

```typescript
public readonly inputTemplateInput: string;
```

- *Type:* string

---

##### `inputPathsMap`<sup>Required</sup> <a name="inputPathsMap" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.property.inputPathsMap"></a>

```typescript
public readonly inputPathsMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `inputTemplate`<sup>Required</sup> <a name="inputTemplate" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.property.inputTemplate"></a>

```typescript
public readonly inputTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsRuleTargetsInputTransformer;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformer">EventsRuleTargetsInputTransformer</a>

---


### EventsRuleTargetsKinesisParametersOutputReference <a name="EventsRuleTargetsKinesisParametersOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRuleTargetsKinesisParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.resetPartitionKeyPath">resetPartitionKeyPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPartitionKeyPath` <a name="resetPartitionKeyPath" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.resetPartitionKeyPath"></a>

```typescript
public resetPartitionKeyPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.property.partitionKeyPathInput">partitionKeyPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.property.partitionKeyPath">partitionKeyPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParameters">EventsRuleTargetsKinesisParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `partitionKeyPathInput`<sup>Optional</sup> <a name="partitionKeyPathInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.property.partitionKeyPathInput"></a>

```typescript
public readonly partitionKeyPathInput: string;
```

- *Type:* string

---

##### `partitionKeyPath`<sup>Required</sup> <a name="partitionKeyPath" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.property.partitionKeyPath"></a>

```typescript
public readonly partitionKeyPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsRuleTargetsKinesisParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParameters">EventsRuleTargetsKinesisParameters</a>

---


### EventsRuleTargetsList <a name="EventsRuleTargetsList" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRuleTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.get"></a>

```typescript
public get(index: number): EventsRuleTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets">EventsRuleTargets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsRuleTargets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets">EventsRuleTargets</a>[]

---


### EventsRuleTargetsOutputReference <a name="EventsRuleTargetsOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRuleTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putAppSyncParameters">putAppSyncParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putBatchParameters">putBatchParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putDeadLetterConfig">putDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putEcsParameters">putEcsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putHttpParameters">putHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putInputTransformer">putInputTransformer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putKinesisParameters">putKinesisParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putRedshiftDataParameters">putRedshiftDataParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putRetryPolicy">putRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putRunCommandParameters">putRunCommandParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putSageMakerPipelineParameters">putSageMakerPipelineParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putSqsParameters">putSqsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetAppSyncParameters">resetAppSyncParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetBatchParameters">resetBatchParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetDeadLetterConfig">resetDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetEcsParameters">resetEcsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetHttpParameters">resetHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetInputPath">resetInputPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetInputTransformer">resetInputTransformer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetKinesisParameters">resetKinesisParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetRedshiftDataParameters">resetRedshiftDataParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetRetryPolicy">resetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetRunCommandParameters">resetRunCommandParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetSageMakerPipelineParameters">resetSageMakerPipelineParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetSqsParameters">resetSqsParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAppSyncParameters` <a name="putAppSyncParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putAppSyncParameters"></a>

```typescript
public putAppSyncParameters(value: EventsRuleTargetsAppSyncParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putAppSyncParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParameters">EventsRuleTargetsAppSyncParameters</a>

---

##### `putBatchParameters` <a name="putBatchParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putBatchParameters"></a>

```typescript
public putBatchParameters(value: EventsRuleTargetsBatchParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putBatchParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters">EventsRuleTargetsBatchParameters</a>

---

##### `putDeadLetterConfig` <a name="putDeadLetterConfig" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putDeadLetterConfig"></a>

```typescript
public putDeadLetterConfig(value: EventsRuleTargetsDeadLetterConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putDeadLetterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfig">EventsRuleTargetsDeadLetterConfig</a>

---

##### `putEcsParameters` <a name="putEcsParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putEcsParameters"></a>

```typescript
public putEcsParameters(value: EventsRuleTargetsEcsParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putEcsParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters">EventsRuleTargetsEcsParameters</a>

---

##### `putHttpParameters` <a name="putHttpParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putHttpParameters"></a>

```typescript
public putHttpParameters(value: EventsRuleTargetsHttpParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putHttpParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParameters">EventsRuleTargetsHttpParameters</a>

---

##### `putInputTransformer` <a name="putInputTransformer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putInputTransformer"></a>

```typescript
public putInputTransformer(value: EventsRuleTargetsInputTransformer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putInputTransformer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformer">EventsRuleTargetsInputTransformer</a>

---

##### `putKinesisParameters` <a name="putKinesisParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putKinesisParameters"></a>

```typescript
public putKinesisParameters(value: EventsRuleTargetsKinesisParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putKinesisParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParameters">EventsRuleTargetsKinesisParameters</a>

---

##### `putRedshiftDataParameters` <a name="putRedshiftDataParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putRedshiftDataParameters"></a>

```typescript
public putRedshiftDataParameters(value: EventsRuleTargetsRedshiftDataParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putRedshiftDataParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters">EventsRuleTargetsRedshiftDataParameters</a>

---

##### `putRetryPolicy` <a name="putRetryPolicy" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putRetryPolicy"></a>

```typescript
public putRetryPolicy(value: EventsRuleTargetsRetryPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicy">EventsRuleTargetsRetryPolicy</a>

---

##### `putRunCommandParameters` <a name="putRunCommandParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putRunCommandParameters"></a>

```typescript
public putRunCommandParameters(value: EventsRuleTargetsRunCommandParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putRunCommandParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParameters">EventsRuleTargetsRunCommandParameters</a>

---

##### `putSageMakerPipelineParameters` <a name="putSageMakerPipelineParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putSageMakerPipelineParameters"></a>

```typescript
public putSageMakerPipelineParameters(value: EventsRuleTargetsSageMakerPipelineParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putSageMakerPipelineParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParameters">EventsRuleTargetsSageMakerPipelineParameters</a>

---

##### `putSqsParameters` <a name="putSqsParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putSqsParameters"></a>

```typescript
public putSqsParameters(value: EventsRuleTargetsSqsParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putSqsParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParameters">EventsRuleTargetsSqsParameters</a>

---

##### `resetAppSyncParameters` <a name="resetAppSyncParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetAppSyncParameters"></a>

```typescript
public resetAppSyncParameters(): void
```

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetBatchParameters` <a name="resetBatchParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetBatchParameters"></a>

```typescript
public resetBatchParameters(): void
```

##### `resetDeadLetterConfig` <a name="resetDeadLetterConfig" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetDeadLetterConfig"></a>

```typescript
public resetDeadLetterConfig(): void
```

##### `resetEcsParameters` <a name="resetEcsParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetEcsParameters"></a>

```typescript
public resetEcsParameters(): void
```

##### `resetHttpParameters` <a name="resetHttpParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetHttpParameters"></a>

```typescript
public resetHttpParameters(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInput` <a name="resetInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetInput"></a>

```typescript
public resetInput(): void
```

##### `resetInputPath` <a name="resetInputPath" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetInputPath"></a>

```typescript
public resetInputPath(): void
```

##### `resetInputTransformer` <a name="resetInputTransformer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetInputTransformer"></a>

```typescript
public resetInputTransformer(): void
```

##### `resetKinesisParameters` <a name="resetKinesisParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetKinesisParameters"></a>

```typescript
public resetKinesisParameters(): void
```

##### `resetRedshiftDataParameters` <a name="resetRedshiftDataParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetRedshiftDataParameters"></a>

```typescript
public resetRedshiftDataParameters(): void
```

##### `resetRetryPolicy` <a name="resetRetryPolicy" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetRetryPolicy"></a>

```typescript
public resetRetryPolicy(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetRunCommandParameters` <a name="resetRunCommandParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetRunCommandParameters"></a>

```typescript
public resetRunCommandParameters(): void
```

##### `resetSageMakerPipelineParameters` <a name="resetSageMakerPipelineParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetSageMakerPipelineParameters"></a>

```typescript
public resetSageMakerPipelineParameters(): void
```

##### `resetSqsParameters` <a name="resetSqsParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetSqsParameters"></a>

```typescript
public resetSqsParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.appSyncParameters">appSyncParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference">EventsRuleTargetsAppSyncParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.batchParameters">batchParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference">EventsRuleTargetsBatchParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.deadLetterConfig">deadLetterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference">EventsRuleTargetsDeadLetterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.ecsParameters">ecsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference">EventsRuleTargetsEcsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.httpParameters">httpParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference">EventsRuleTargetsHttpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.inputTransformer">inputTransformer</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference">EventsRuleTargetsInputTransformerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.kinesisParameters">kinesisParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference">EventsRuleTargetsKinesisParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.redshiftDataParameters">redshiftDataParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference">EventsRuleTargetsRedshiftDataParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference">EventsRuleTargetsRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.runCommandParameters">runCommandParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference">EventsRuleTargetsRunCommandParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.sageMakerPipelineParameters">sageMakerPipelineParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference">EventsRuleTargetsSageMakerPipelineParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.sqsParameters">sqsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference">EventsRuleTargetsSqsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.appSyncParametersInput">appSyncParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParameters">EventsRuleTargetsAppSyncParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.batchParametersInput">batchParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters">EventsRuleTargetsBatchParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.deadLetterConfigInput">deadLetterConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfig">EventsRuleTargetsDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.ecsParametersInput">ecsParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters">EventsRuleTargetsEcsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.httpParametersInput">httpParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParameters">EventsRuleTargetsHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.inputInput">inputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.inputPathInput">inputPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.inputTransformerInput">inputTransformerInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformer">EventsRuleTargetsInputTransformer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.kinesisParametersInput">kinesisParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParameters">EventsRuleTargetsKinesisParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.redshiftDataParametersInput">redshiftDataParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters">EventsRuleTargetsRedshiftDataParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.retryPolicyInput">retryPolicyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicy">EventsRuleTargetsRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.runCommandParametersInput">runCommandParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParameters">EventsRuleTargetsRunCommandParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.sageMakerPipelineParametersInput">sageMakerPipelineParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParameters">EventsRuleTargetsSageMakerPipelineParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.sqsParametersInput">sqsParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParameters">EventsRuleTargetsSqsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.input">input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.inputPath">inputPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets">EventsRuleTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appSyncParameters`<sup>Required</sup> <a name="appSyncParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.appSyncParameters"></a>

```typescript
public readonly appSyncParameters: EventsRuleTargetsAppSyncParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference">EventsRuleTargetsAppSyncParametersOutputReference</a>

---

##### `batchParameters`<sup>Required</sup> <a name="batchParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.batchParameters"></a>

```typescript
public readonly batchParameters: EventsRuleTargetsBatchParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference">EventsRuleTargetsBatchParametersOutputReference</a>

---

##### `deadLetterConfig`<sup>Required</sup> <a name="deadLetterConfig" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.deadLetterConfig"></a>

```typescript
public readonly deadLetterConfig: EventsRuleTargetsDeadLetterConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference">EventsRuleTargetsDeadLetterConfigOutputReference</a>

---

##### `ecsParameters`<sup>Required</sup> <a name="ecsParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.ecsParameters"></a>

```typescript
public readonly ecsParameters: EventsRuleTargetsEcsParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference">EventsRuleTargetsEcsParametersOutputReference</a>

---

##### `httpParameters`<sup>Required</sup> <a name="httpParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.httpParameters"></a>

```typescript
public readonly httpParameters: EventsRuleTargetsHttpParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference">EventsRuleTargetsHttpParametersOutputReference</a>

---

##### `inputTransformer`<sup>Required</sup> <a name="inputTransformer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.inputTransformer"></a>

```typescript
public readonly inputTransformer: EventsRuleTargetsInputTransformerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference">EventsRuleTargetsInputTransformerOutputReference</a>

---

##### `kinesisParameters`<sup>Required</sup> <a name="kinesisParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.kinesisParameters"></a>

```typescript
public readonly kinesisParameters: EventsRuleTargetsKinesisParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference">EventsRuleTargetsKinesisParametersOutputReference</a>

---

##### `redshiftDataParameters`<sup>Required</sup> <a name="redshiftDataParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.redshiftDataParameters"></a>

```typescript
public readonly redshiftDataParameters: EventsRuleTargetsRedshiftDataParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference">EventsRuleTargetsRedshiftDataParametersOutputReference</a>

---

##### `retryPolicy`<sup>Required</sup> <a name="retryPolicy" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.retryPolicy"></a>

```typescript
public readonly retryPolicy: EventsRuleTargetsRetryPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference">EventsRuleTargetsRetryPolicyOutputReference</a>

---

##### `runCommandParameters`<sup>Required</sup> <a name="runCommandParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.runCommandParameters"></a>

```typescript
public readonly runCommandParameters: EventsRuleTargetsRunCommandParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference">EventsRuleTargetsRunCommandParametersOutputReference</a>

---

##### `sageMakerPipelineParameters`<sup>Required</sup> <a name="sageMakerPipelineParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.sageMakerPipelineParameters"></a>

```typescript
public readonly sageMakerPipelineParameters: EventsRuleTargetsSageMakerPipelineParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference">EventsRuleTargetsSageMakerPipelineParametersOutputReference</a>

---

##### `sqsParameters`<sup>Required</sup> <a name="sqsParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.sqsParameters"></a>

```typescript
public readonly sqsParameters: EventsRuleTargetsSqsParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference">EventsRuleTargetsSqsParametersOutputReference</a>

---

##### `appSyncParametersInput`<sup>Optional</sup> <a name="appSyncParametersInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.appSyncParametersInput"></a>

```typescript
public readonly appSyncParametersInput: IResolvable | EventsRuleTargetsAppSyncParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParameters">EventsRuleTargetsAppSyncParameters</a>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `batchParametersInput`<sup>Optional</sup> <a name="batchParametersInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.batchParametersInput"></a>

```typescript
public readonly batchParametersInput: IResolvable | EventsRuleTargetsBatchParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters">EventsRuleTargetsBatchParameters</a>

---

##### `deadLetterConfigInput`<sup>Optional</sup> <a name="deadLetterConfigInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.deadLetterConfigInput"></a>

```typescript
public readonly deadLetterConfigInput: IResolvable | EventsRuleTargetsDeadLetterConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfig">EventsRuleTargetsDeadLetterConfig</a>

---

##### `ecsParametersInput`<sup>Optional</sup> <a name="ecsParametersInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.ecsParametersInput"></a>

```typescript
public readonly ecsParametersInput: IResolvable | EventsRuleTargetsEcsParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters">EventsRuleTargetsEcsParameters</a>

---

##### `httpParametersInput`<sup>Optional</sup> <a name="httpParametersInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.httpParametersInput"></a>

```typescript
public readonly httpParametersInput: IResolvable | EventsRuleTargetsHttpParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParameters">EventsRuleTargetsHttpParameters</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.inputInput"></a>

```typescript
public readonly inputInput: string;
```

- *Type:* string

---

##### `inputPathInput`<sup>Optional</sup> <a name="inputPathInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.inputPathInput"></a>

```typescript
public readonly inputPathInput: string;
```

- *Type:* string

---

##### `inputTransformerInput`<sup>Optional</sup> <a name="inputTransformerInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.inputTransformerInput"></a>

```typescript
public readonly inputTransformerInput: IResolvable | EventsRuleTargetsInputTransformer;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformer">EventsRuleTargetsInputTransformer</a>

---

##### `kinesisParametersInput`<sup>Optional</sup> <a name="kinesisParametersInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.kinesisParametersInput"></a>

```typescript
public readonly kinesisParametersInput: IResolvable | EventsRuleTargetsKinesisParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParameters">EventsRuleTargetsKinesisParameters</a>

---

##### `redshiftDataParametersInput`<sup>Optional</sup> <a name="redshiftDataParametersInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.redshiftDataParametersInput"></a>

```typescript
public readonly redshiftDataParametersInput: IResolvable | EventsRuleTargetsRedshiftDataParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters">EventsRuleTargetsRedshiftDataParameters</a>

---

##### `retryPolicyInput`<sup>Optional</sup> <a name="retryPolicyInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.retryPolicyInput"></a>

```typescript
public readonly retryPolicyInput: IResolvable | EventsRuleTargetsRetryPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicy">EventsRuleTargetsRetryPolicy</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `runCommandParametersInput`<sup>Optional</sup> <a name="runCommandParametersInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.runCommandParametersInput"></a>

```typescript
public readonly runCommandParametersInput: IResolvable | EventsRuleTargetsRunCommandParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParameters">EventsRuleTargetsRunCommandParameters</a>

---

##### `sageMakerPipelineParametersInput`<sup>Optional</sup> <a name="sageMakerPipelineParametersInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.sageMakerPipelineParametersInput"></a>

```typescript
public readonly sageMakerPipelineParametersInput: IResolvable | EventsRuleTargetsSageMakerPipelineParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParameters">EventsRuleTargetsSageMakerPipelineParameters</a>

---

##### `sqsParametersInput`<sup>Optional</sup> <a name="sqsParametersInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.sqsParametersInput"></a>

```typescript
public readonly sqsParametersInput: IResolvable | EventsRuleTargetsSqsParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParameters">EventsRuleTargetsSqsParameters</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

---

##### `inputPath`<sup>Required</sup> <a name="inputPath" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.inputPath"></a>

```typescript
public readonly inputPath: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsRuleTargets;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets">EventsRuleTargets</a>

---


### EventsRuleTargetsRedshiftDataParametersOutputReference <a name="EventsRuleTargetsRedshiftDataParametersOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resetDbUser">resetDbUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resetSecretManagerArn">resetSecretManagerArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resetSql">resetSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resetSqls">resetSqls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resetStatementName">resetStatementName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resetWithEvent">resetWithEvent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetDbUser` <a name="resetDbUser" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resetDbUser"></a>

```typescript
public resetDbUser(): void
```

##### `resetSecretManagerArn` <a name="resetSecretManagerArn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resetSecretManagerArn"></a>

```typescript
public resetSecretManagerArn(): void
```

##### `resetSql` <a name="resetSql" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resetSql"></a>

```typescript
public resetSql(): void
```

##### `resetSqls` <a name="resetSqls" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resetSqls"></a>

```typescript
public resetSqls(): void
```

##### `resetStatementName` <a name="resetStatementName" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resetStatementName"></a>

```typescript
public resetStatementName(): void
```

##### `resetWithEvent` <a name="resetWithEvent" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resetWithEvent"></a>

```typescript
public resetWithEvent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.dbUserInput">dbUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.secretManagerArnInput">secretManagerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.sqlInput">sqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.sqlsInput">sqlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.statementNameInput">statementNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.withEventInput">withEventInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.dbUser">dbUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.secretManagerArn">secretManagerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.sql">sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.sqls">sqls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.statementName">statementName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.withEvent">withEvent</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters">EventsRuleTargetsRedshiftDataParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `dbUserInput`<sup>Optional</sup> <a name="dbUserInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.dbUserInput"></a>

```typescript
public readonly dbUserInput: string;
```

- *Type:* string

---

##### `secretManagerArnInput`<sup>Optional</sup> <a name="secretManagerArnInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.secretManagerArnInput"></a>

```typescript
public readonly secretManagerArnInput: string;
```

- *Type:* string

---

##### `sqlInput`<sup>Optional</sup> <a name="sqlInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.sqlInput"></a>

```typescript
public readonly sqlInput: string;
```

- *Type:* string

---

##### `sqlsInput`<sup>Optional</sup> <a name="sqlsInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.sqlsInput"></a>

```typescript
public readonly sqlsInput: string[];
```

- *Type:* string[]

---

##### `statementNameInput`<sup>Optional</sup> <a name="statementNameInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.statementNameInput"></a>

```typescript
public readonly statementNameInput: string;
```

- *Type:* string

---

##### `withEventInput`<sup>Optional</sup> <a name="withEventInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.withEventInput"></a>

```typescript
public readonly withEventInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `dbUser`<sup>Required</sup> <a name="dbUser" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.dbUser"></a>

```typescript
public readonly dbUser: string;
```

- *Type:* string

---

##### `secretManagerArn`<sup>Required</sup> <a name="secretManagerArn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.secretManagerArn"></a>

```typescript
public readonly secretManagerArn: string;
```

- *Type:* string

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

---

##### `sqls`<sup>Required</sup> <a name="sqls" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.sqls"></a>

```typescript
public readonly sqls: string[];
```

- *Type:* string[]

---

##### `statementName`<sup>Required</sup> <a name="statementName" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.statementName"></a>

```typescript
public readonly statementName: string;
```

- *Type:* string

---

##### `withEvent`<sup>Required</sup> <a name="withEvent" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.withEvent"></a>

```typescript
public readonly withEvent: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsRuleTargetsRedshiftDataParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters">EventsRuleTargetsRedshiftDataParameters</a>

---


### EventsRuleTargetsRetryPolicyOutputReference <a name="EventsRuleTargetsRetryPolicyOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRuleTargetsRetryPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.resetMaximumEventAgeInSeconds">resetMaximumEventAgeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.resetMaximumRetryAttempts">resetMaximumRetryAttempts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumEventAgeInSeconds` <a name="resetMaximumEventAgeInSeconds" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.resetMaximumEventAgeInSeconds"></a>

```typescript
public resetMaximumEventAgeInSeconds(): void
```

##### `resetMaximumRetryAttempts` <a name="resetMaximumRetryAttempts" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.resetMaximumRetryAttempts"></a>

```typescript
public resetMaximumRetryAttempts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.property.maximumEventAgeInSecondsInput">maximumEventAgeInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.property.maximumRetryAttemptsInput">maximumRetryAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.property.maximumEventAgeInSeconds">maximumEventAgeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.property.maximumRetryAttempts">maximumRetryAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicy">EventsRuleTargetsRetryPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumEventAgeInSecondsInput`<sup>Optional</sup> <a name="maximumEventAgeInSecondsInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.property.maximumEventAgeInSecondsInput"></a>

```typescript
public readonly maximumEventAgeInSecondsInput: number;
```

- *Type:* number

---

##### `maximumRetryAttemptsInput`<sup>Optional</sup> <a name="maximumRetryAttemptsInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.property.maximumRetryAttemptsInput"></a>

```typescript
public readonly maximumRetryAttemptsInput: number;
```

- *Type:* number

---

##### `maximumEventAgeInSeconds`<sup>Required</sup> <a name="maximumEventAgeInSeconds" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.property.maximumEventAgeInSeconds"></a>

```typescript
public readonly maximumEventAgeInSeconds: number;
```

- *Type:* number

---

##### `maximumRetryAttempts`<sup>Required</sup> <a name="maximumRetryAttempts" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.property.maximumRetryAttempts"></a>

```typescript
public readonly maximumRetryAttempts: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsRuleTargetsRetryPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicy">EventsRuleTargetsRetryPolicy</a>

---


### EventsRuleTargetsRunCommandParametersOutputReference <a name="EventsRuleTargetsRunCommandParametersOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRuleTargetsRunCommandParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.putRunCommandTargets">putRunCommandTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.resetRunCommandTargets">resetRunCommandTargets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRunCommandTargets` <a name="putRunCommandTargets" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.putRunCommandTargets"></a>

```typescript
public putRunCommandTargets(value: IResolvable | EventsRuleTargetsRunCommandParametersRunCommandTargets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.putRunCommandTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets">EventsRuleTargetsRunCommandParametersRunCommandTargets</a>[]

---

##### `resetRunCommandTargets` <a name="resetRunCommandTargets" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.resetRunCommandTargets"></a>

```typescript
public resetRunCommandTargets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.property.runCommandTargets">runCommandTargets</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList">EventsRuleTargetsRunCommandParametersRunCommandTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.property.runCommandTargetsInput">runCommandTargetsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets">EventsRuleTargetsRunCommandParametersRunCommandTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParameters">EventsRuleTargetsRunCommandParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `runCommandTargets`<sup>Required</sup> <a name="runCommandTargets" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.property.runCommandTargets"></a>

```typescript
public readonly runCommandTargets: EventsRuleTargetsRunCommandParametersRunCommandTargetsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList">EventsRuleTargetsRunCommandParametersRunCommandTargetsList</a>

---

##### `runCommandTargetsInput`<sup>Optional</sup> <a name="runCommandTargetsInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.property.runCommandTargetsInput"></a>

```typescript
public readonly runCommandTargetsInput: IResolvable | EventsRuleTargetsRunCommandParametersRunCommandTargets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets">EventsRuleTargetsRunCommandParametersRunCommandTargets</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsRuleTargetsRunCommandParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParameters">EventsRuleTargetsRunCommandParameters</a>

---


### EventsRuleTargetsRunCommandParametersRunCommandTargetsList <a name="EventsRuleTargetsRunCommandParametersRunCommandTargetsList" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.get"></a>

```typescript
public get(index: number): EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets">EventsRuleTargetsRunCommandParametersRunCommandTargets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsRuleTargetsRunCommandParametersRunCommandTargets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets">EventsRuleTargetsRunCommandParametersRunCommandTargets</a>[]

---


### EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference <a name="EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets">EventsRuleTargetsRunCommandParametersRunCommandTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsRuleTargetsRunCommandParametersRunCommandTargets;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets">EventsRuleTargetsRunCommandParametersRunCommandTargets</a>

---


### EventsRuleTargetsSageMakerPipelineParametersOutputReference <a name="EventsRuleTargetsSageMakerPipelineParametersOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.putPipelineParameterList">putPipelineParameterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.resetPipelineParameterList">resetPipelineParameterList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPipelineParameterList` <a name="putPipelineParameterList" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.putPipelineParameterList"></a>

```typescript
public putPipelineParameterList(value: IResolvable | EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.putPipelineParameterList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct">EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct</a>[]

---

##### `resetPipelineParameterList` <a name="resetPipelineParameterList" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.resetPipelineParameterList"></a>

```typescript
public resetPipelineParameterList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.property.pipelineParameterList">pipelineParameterList</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList">EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.property.pipelineParameterListInput">pipelineParameterListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct">EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParameters">EventsRuleTargetsSageMakerPipelineParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pipelineParameterList`<sup>Required</sup> <a name="pipelineParameterList" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.property.pipelineParameterList"></a>

```typescript
public readonly pipelineParameterList: EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList">EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList</a>

---

##### `pipelineParameterListInput`<sup>Optional</sup> <a name="pipelineParameterListInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.property.pipelineParameterListInput"></a>

```typescript
public readonly pipelineParameterListInput: IResolvable | EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct">EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsRuleTargetsSageMakerPipelineParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParameters">EventsRuleTargetsSageMakerPipelineParameters</a>

---


### EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList <a name="EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.get"></a>

```typescript
public get(index: number): EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct">EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct">EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct</a>[]

---


### EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference <a name="EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct">EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct">EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct</a>

---


### EventsRuleTargetsSqsParametersOutputReference <a name="EventsRuleTargetsSqsParametersOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.Initializer"></a>

```typescript
import { eventsRule } from '@cdktn/provider-awscc'

new eventsRule.EventsRuleTargetsSqsParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.resetMessageGroupId">resetMessageGroupId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessageGroupId` <a name="resetMessageGroupId" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.resetMessageGroupId"></a>

```typescript
public resetMessageGroupId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.property.messageGroupIdInput">messageGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.property.messageGroupId">messageGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParameters">EventsRuleTargetsSqsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messageGroupIdInput`<sup>Optional</sup> <a name="messageGroupIdInput" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.property.messageGroupIdInput"></a>

```typescript
public readonly messageGroupIdInput: string;
```

- *Type:* string

---

##### `messageGroupId`<sup>Required</sup> <a name="messageGroupId" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.property.messageGroupId"></a>

```typescript
public readonly messageGroupId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsRuleTargetsSqsParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParameters">EventsRuleTargetsSqsParameters</a>

---



