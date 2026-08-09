# `securityhubAutomationRuleV2` Submodule <a name="`securityhubAutomationRuleV2` Submodule" id="@cdktn/provider-awscc.securityhubAutomationRuleV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubAutomationRuleV2 <a name="SecurityhubAutomationRuleV2" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2 awscc_securityhub_automation_rule_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2(scope: Construct, id: string, config: SecurityhubAutomationRuleV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config">SecurityhubAutomationRuleV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config">SecurityhubAutomationRuleV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putCriteria">putCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetRuleStatus">resetRuleStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActions` <a name="putActions" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putActions"></a>

```typescript
public putActions(value: IResolvable | SecurityhubAutomationRuleV2Actions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions">SecurityhubAutomationRuleV2Actions</a>[]

---

##### `putCriteria` <a name="putCriteria" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putCriteria"></a>

```typescript
public putCriteria(value: SecurityhubAutomationRuleV2Criteria): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>

---

##### `resetRuleStatus` <a name="resetRuleStatus" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetRuleStatus"></a>

```typescript
public resetRuleStatus(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityhubAutomationRuleV2 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isConstruct"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformElement"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformResource"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SecurityhubAutomationRuleV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityhubAutomationRuleV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityhubAutomationRuleV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecurityhubAutomationRuleV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList">SecurityhubAutomationRuleV2ActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference">SecurityhubAutomationRuleV2CriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleArn">ruleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.actionsInput">actionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions">SecurityhubAutomationRuleV2Actions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.criteriaInput">criteriaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleNameInput">ruleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleOrderInput">ruleOrderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleStatusInput">ruleStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleOrder">ruleOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleStatus">ruleStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.actions"></a>

```typescript
public readonly actions: SecurityhubAutomationRuleV2ActionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList">SecurityhubAutomationRuleV2ActionsList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.criteria"></a>

```typescript
public readonly criteria: SecurityhubAutomationRuleV2CriteriaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference">SecurityhubAutomationRuleV2CriteriaOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.actionsInput"></a>

```typescript
public readonly actionsInput: IResolvable | SecurityhubAutomationRuleV2Actions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions">SecurityhubAutomationRuleV2Actions</a>[]

---

##### `criteriaInput`<sup>Optional</sup> <a name="criteriaInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.criteriaInput"></a>

```typescript
public readonly criteriaInput: IResolvable | SecurityhubAutomationRuleV2Criteria;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleNameInput"></a>

```typescript
public readonly ruleNameInput: string;
```

- *Type:* string

---

##### `ruleOrderInput`<sup>Optional</sup> <a name="ruleOrderInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleOrderInput"></a>

```typescript
public readonly ruleOrderInput: number;
```

- *Type:* number

---

##### `ruleStatusInput`<sup>Optional</sup> <a name="ruleStatusInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleStatusInput"></a>

```typescript
public readonly ruleStatusInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `ruleOrder`<sup>Required</sup> <a name="ruleOrder" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleOrder"></a>

```typescript
public readonly ruleOrder: number;
```

- *Type:* number

---

##### `ruleStatus`<sup>Required</sup> <a name="ruleStatus" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleStatus"></a>

```typescript
public readonly ruleStatus: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubAutomationRuleV2Actions <a name="SecurityhubAutomationRuleV2Actions" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

const securityhubAutomationRuleV2Actions: securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions.property.type">type</a></code> | <code>string</code> | The category of action to be executed by the automation rule. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions.property.externalIntegrationConfiguration">externalIntegrationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration</a></code> | The settings for integrating automation rule actions with external systems or service. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions.property.findingFieldsUpdate">findingFieldsUpdate</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate</a></code> | The changes to be applied to fields in a security finding when an automation rule is triggered. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The category of action to be executed by the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#type SecurityhubAutomationRuleV2#type}

---

##### `externalIntegrationConfiguration`<sup>Optional</sup> <a name="externalIntegrationConfiguration" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions.property.externalIntegrationConfiguration"></a>

```typescript
public readonly externalIntegrationConfiguration: SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration</a>

The settings for integrating automation rule actions with external systems or service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#external_integration_configuration SecurityhubAutomationRuleV2#external_integration_configuration}

---

##### `findingFieldsUpdate`<sup>Optional</sup> <a name="findingFieldsUpdate" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions.property.findingFieldsUpdate"></a>

```typescript
public readonly findingFieldsUpdate: SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate</a>

The changes to be applied to fields in a security finding when an automation rule is triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#finding_fields_update SecurityhubAutomationRuleV2#finding_fields_update}

---

### SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration <a name="SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

const securityhubAutomationRuleV2ActionsExternalIntegrationConfiguration: securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration.property.connectorArn">connectorArn</a></code> | <code>string</code> | The ARN of the connector that establishes the integration. |

---

##### `connectorArn`<sup>Optional</sup> <a name="connectorArn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration.property.connectorArn"></a>

```typescript
public readonly connectorArn: string;
```

- *Type:* string

The ARN of the connector that establishes the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#connector_arn SecurityhubAutomationRuleV2#connector_arn}

---

### SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate <a name="SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

const securityhubAutomationRuleV2ActionsFindingFieldsUpdate: securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate.property.comment">comment</a></code> | <code>string</code> | Notes or contextual information for findings that are modified by the automation rule. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate.property.severityId">severityId</a></code> | <code>number</code> | The severity level to be assigned to findings that match the automation rule criteria. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate.property.statusId">statusId</a></code> | <code>number</code> | The status to be applied to findings that match automation rule criteria. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Notes or contextual information for findings that are modified by the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#comment SecurityhubAutomationRuleV2#comment}

---

##### `severityId`<sup>Optional</sup> <a name="severityId" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate.property.severityId"></a>

```typescript
public readonly severityId: number;
```

- *Type:* number

The severity level to be assigned to findings that match the automation rule criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#severity_id SecurityhubAutomationRuleV2#severity_id}

---

##### `statusId`<sup>Optional</sup> <a name="statusId" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate.property.statusId"></a>

```typescript
public readonly statusId: number;
```

- *Type:* number

The status to be applied to findings that match automation rule criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#status_id SecurityhubAutomationRuleV2#status_id}

---

### SecurityhubAutomationRuleV2Config <a name="SecurityhubAutomationRuleV2Config" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

const securityhubAutomationRuleV2Config: securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.actions">actions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions">SecurityhubAutomationRuleV2Actions</a>[]</code> | A list of actions to be performed when the rule criteria is met. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a></code> | Defines the parameters and conditions used to evaluate and filter security findings. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.description">description</a></code> | <code>string</code> | A description of the automation rule. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleName">ruleName</a></code> | <code>string</code> | The name of the automation rule. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleOrder">ruleOrder</a></code> | <code>number</code> | The value for the rule priority. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleStatus">ruleStatus</a></code> | <code>string</code> | The status of the automation rule. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | A key-value pair to associate with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.actions"></a>

```typescript
public readonly actions: IResolvable | SecurityhubAutomationRuleV2Actions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions">SecurityhubAutomationRuleV2Actions</a>[]

A list of actions to be performed when the rule criteria is met.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#actions SecurityhubAutomationRuleV2#actions}

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.criteria"></a>

```typescript
public readonly criteria: SecurityhubAutomationRuleV2Criteria;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>

Defines the parameters and conditions used to evaluate and filter security findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#criteria SecurityhubAutomationRuleV2#criteria}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#description SecurityhubAutomationRuleV2#description}

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#rule_name SecurityhubAutomationRuleV2#rule_name}

---

##### `ruleOrder`<sup>Required</sup> <a name="ruleOrder" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleOrder"></a>

```typescript
public readonly ruleOrder: number;
```

- *Type:* number

The value for the rule priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#rule_order SecurityhubAutomationRuleV2#rule_order}

---

##### `ruleStatus`<sup>Optional</sup> <a name="ruleStatus" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleStatus"></a>

```typescript
public readonly ruleStatus: string;
```

- *Type:* string

The status of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#rule_status SecurityhubAutomationRuleV2#rule_status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#tags SecurityhubAutomationRuleV2#tags}

---

### SecurityhubAutomationRuleV2Criteria <a name="SecurityhubAutomationRuleV2Criteria" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

const securityhubAutomationRuleV2Criteria: securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria.property.ocsfFindingCriteria">ocsfFindingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria</a></code> | The filtering conditions that align with OCSF standards. |

---

##### `ocsfFindingCriteria`<sup>Optional</sup> <a name="ocsfFindingCriteria" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria.property.ocsfFindingCriteria"></a>

```typescript
public readonly ocsfFindingCriteria: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria</a>

The filtering conditions that align with OCSF standards.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#ocsf_finding_criteria SecurityhubAutomationRuleV2#ocsf_finding_criteria}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

const securityhubAutomationRuleV2CriteriaOcsfFindingCriteria: securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria.property.compositeFilters">compositeFilters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters</a>[]</code> | Enables the creation of complex filtering conditions by combining filter. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria.property.compositeOperator">compositeOperator</a></code> | <code>string</code> | The logical operator used to combine multiple conditions. |

---

##### `compositeFilters`<sup>Optional</sup> <a name="compositeFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria.property.compositeFilters"></a>

```typescript
public readonly compositeFilters: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters</a>[]

Enables the creation of complex filtering conditions by combining filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#composite_filters SecurityhubAutomationRuleV2#composite_filters}

---

##### `compositeOperator`<sup>Optional</sup> <a name="compositeOperator" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria.property.compositeOperator"></a>

```typescript
public readonly compositeOperator: string;
```

- *Type:* string

The logical operator used to combine multiple conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#composite_operator SecurityhubAutomationRuleV2#composite_operator}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

const securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters: securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.booleanFilters">booleanFilters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters</a>[]</code> | Enables filtering based on boolean field values. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.dateFilters">dateFilters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters</a>[]</code> | Enables filtering based on date and timestamp fields. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.mapFilters">mapFilters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters</a>[]</code> | Enables filtering based on map field value. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.numberFilters">numberFilters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters</a>[]</code> | Enables filtering based on numerical field values. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.operator">operator</a></code> | <code>string</code> | The logical operator used to combine multiple conditions. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.stringFilters">stringFilters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters</a>[]</code> | Enables filtering based on string field values. |

---

##### `booleanFilters`<sup>Optional</sup> <a name="booleanFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.booleanFilters"></a>

```typescript
public readonly booleanFilters: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters</a>[]

Enables filtering based on boolean field values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#boolean_filters SecurityhubAutomationRuleV2#boolean_filters}

---

##### `dateFilters`<sup>Optional</sup> <a name="dateFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.dateFilters"></a>

```typescript
public readonly dateFilters: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters</a>[]

Enables filtering based on date and timestamp fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#date_filters SecurityhubAutomationRuleV2#date_filters}

---

##### `mapFilters`<sup>Optional</sup> <a name="mapFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.mapFilters"></a>

```typescript
public readonly mapFilters: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters</a>[]

Enables filtering based on map field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#map_filters SecurityhubAutomationRuleV2#map_filters}

---

##### `numberFilters`<sup>Optional</sup> <a name="numberFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.numberFilters"></a>

```typescript
public readonly numberFilters: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters</a>[]

Enables filtering based on numerical field values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#number_filters SecurityhubAutomationRuleV2#number_filters}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

The logical operator used to combine multiple conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#operator SecurityhubAutomationRuleV2#operator}

---

##### `stringFilters`<sup>Optional</sup> <a name="stringFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.stringFilters"></a>

```typescript
public readonly stringFilters: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters</a>[]

Enables filtering based on string field values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#string_filters SecurityhubAutomationRuleV2#string_filters}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

const securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters: securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters.property.fieldName">fieldName</a></code> | <code>string</code> | The name of the field. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter</a></code> | Boolean filter for querying findings. |

---

##### `fieldName`<sup>Optional</sup> <a name="fieldName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#field_name SecurityhubAutomationRuleV2#field_name}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters.property.filter"></a>

```typescript
public readonly filter: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter</a>

Boolean filter for querying findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#filter SecurityhubAutomationRuleV2#filter}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

const securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter: securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter.property.value">value</a></code> | <code>boolean \| cdktn.IResolvable</code> | The value of the boolean. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter.property.value"></a>

```typescript
public readonly value: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

The value of the boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#value SecurityhubAutomationRuleV2#value}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

const securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters: securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters.property.fieldName">fieldName</a></code> | <code>string</code> | The name of the field. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter</a></code> | A date filter for querying findings. |

---

##### `fieldName`<sup>Optional</sup> <a name="fieldName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#field_name SecurityhubAutomationRuleV2#field_name}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters.property.filter"></a>

```typescript
public readonly filter: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter</a>

A date filter for querying findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#filter SecurityhubAutomationRuleV2#filter}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

const securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter: securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter.property.dateRange">dateRange</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange</a></code> | A date range for the date filter. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter.property.end">end</a></code> | <code>string</code> | The timestamp formatted in ISO8601. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter.property.start">start</a></code> | <code>string</code> | The timestamp formatted in ISO8601. |

---

##### `dateRange`<sup>Optional</sup> <a name="dateRange" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter.property.dateRange"></a>

```typescript
public readonly dateRange: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange</a>

A date range for the date filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#date_range SecurityhubAutomationRuleV2#date_range}

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

The timestamp formatted in ISO8601.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#end SecurityhubAutomationRuleV2#end}

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

The timestamp formatted in ISO8601.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#start SecurityhubAutomationRuleV2#start}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

const securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange: securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange.property.unit">unit</a></code> | <code>string</code> | A date range unit for the date filter. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange.property.value">value</a></code> | <code>number</code> | A date range value for the date filter. |

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

A date range unit for the date filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#unit SecurityhubAutomationRuleV2#unit}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

A date range value for the date filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#value SecurityhubAutomationRuleV2#value}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

const securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters: securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters.property.fieldName">fieldName</a></code> | <code>string</code> | The name of the field. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter</a></code> | A map filter for filtering findings. |

---

##### `fieldName`<sup>Optional</sup> <a name="fieldName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#field_name SecurityhubAutomationRuleV2#field_name}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters.property.filter"></a>

```typescript
public readonly filter: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter</a>

A map filter for filtering findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#filter SecurityhubAutomationRuleV2#filter}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

const securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter: securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter.property.comparison">comparison</a></code> | <code>string</code> | The condition to apply to the key value when filtering findings with a map filter. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter.property.key">key</a></code> | <code>string</code> | The key of the map filter. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter.property.value">value</a></code> | <code>string</code> | The value for the key in the map filter. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

The condition to apply to the key value when filtering findings with a map filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#comparison SecurityhubAutomationRuleV2#comparison}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the map filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#key SecurityhubAutomationRuleV2#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the key in the map filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#value SecurityhubAutomationRuleV2#value}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

const securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters: securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters.property.fieldName">fieldName</a></code> | <code>string</code> | The name of the field. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter</a></code> | A number filter for querying findings. |

---

##### `fieldName`<sup>Optional</sup> <a name="fieldName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#field_name SecurityhubAutomationRuleV2#field_name}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters.property.filter"></a>

```typescript
public readonly filter: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter</a>

A number filter for querying findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#filter SecurityhubAutomationRuleV2#filter}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

const securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter: securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter.property.eq">eq</a></code> | <code>number</code> | The equal-to condition to be applied to a single field when querying for findings. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter.property.gte">gte</a></code> | <code>number</code> | The greater-than-equal condition to be applied to a single field when querying for findings. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter.property.lte">lte</a></code> | <code>number</code> | The less-than-equal condition to be applied to a single field when querying for findings. |

---

##### `eq`<sup>Optional</sup> <a name="eq" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter.property.eq"></a>

```typescript
public readonly eq: number;
```

- *Type:* number

The equal-to condition to be applied to a single field when querying for findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#eq SecurityhubAutomationRuleV2#eq}

---

##### `gte`<sup>Optional</sup> <a name="gte" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter.property.gte"></a>

```typescript
public readonly gte: number;
```

- *Type:* number

The greater-than-equal condition to be applied to a single field when querying for findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#gte SecurityhubAutomationRuleV2#gte}

---

##### `lte`<sup>Optional</sup> <a name="lte" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter.property.lte"></a>

```typescript
public readonly lte: number;
```

- *Type:* number

The less-than-equal condition to be applied to a single field when querying for findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#lte SecurityhubAutomationRuleV2#lte}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

const securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters: securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters.property.fieldName">fieldName</a></code> | <code>string</code> | The name of the field. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter</a></code> | A string filter for filtering findings. |

---

##### `fieldName`<sup>Optional</sup> <a name="fieldName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#field_name SecurityhubAutomationRuleV2#field_name}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters.property.filter"></a>

```typescript
public readonly filter: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter</a>

A string filter for filtering findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#filter SecurityhubAutomationRuleV2#filter}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

const securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter: securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter.property.comparison">comparison</a></code> | <code>string</code> | The condition to apply to a string value when filtering findings. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter.property.value">value</a></code> | <code>string</code> | The string filter value. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

The condition to apply to a string value when filtering findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#comparison SecurityhubAutomationRuleV2#comparison}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The string filter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_automation_rule_v2#value SecurityhubAutomationRuleV2#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference <a name="SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.resetConnectorArn">resetConnectorArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectorArn` <a name="resetConnectorArn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.resetConnectorArn"></a>

```typescript
public resetConnectorArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.connectorArnInput">connectorArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.connectorArn">connectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectorArnInput`<sup>Optional</sup> <a name="connectorArnInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.connectorArnInput"></a>

```typescript
public readonly connectorArnInput: string;
```

- *Type:* string

---

##### `connectorArn`<sup>Required</sup> <a name="connectorArn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.connectorArn"></a>

```typescript
public readonly connectorArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration</a>

---


### SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference <a name="SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.resetSeverityId">resetSeverityId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.resetStatusId">resetStatusId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetSeverityId` <a name="resetSeverityId" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.resetSeverityId"></a>

```typescript
public resetSeverityId(): void
```

##### `resetStatusId` <a name="resetStatusId" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.resetStatusId"></a>

```typescript
public resetStatusId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.severityIdInput">severityIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.statusIdInput">statusIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.severityId">severityId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.statusId">statusId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `severityIdInput`<sup>Optional</sup> <a name="severityIdInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.severityIdInput"></a>

```typescript
public readonly severityIdInput: number;
```

- *Type:* number

---

##### `statusIdInput`<sup>Optional</sup> <a name="statusIdInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.statusIdInput"></a>

```typescript
public readonly statusIdInput: number;
```

- *Type:* number

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `severityId`<sup>Required</sup> <a name="severityId" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.severityId"></a>

```typescript
public readonly severityId: number;
```

- *Type:* number

---

##### `statusId`<sup>Required</sup> <a name="statusId" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.statusId"></a>

```typescript
public readonly statusId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate</a>

---


### SecurityhubAutomationRuleV2ActionsList <a name="SecurityhubAutomationRuleV2ActionsList" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.get"></a>

```typescript
public get(index: number): SecurityhubAutomationRuleV2ActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions">SecurityhubAutomationRuleV2Actions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubAutomationRuleV2Actions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions">SecurityhubAutomationRuleV2Actions</a>[]

---


### SecurityhubAutomationRuleV2ActionsOutputReference <a name="SecurityhubAutomationRuleV2ActionsOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.putExternalIntegrationConfiguration">putExternalIntegrationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.putFindingFieldsUpdate">putFindingFieldsUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.resetExternalIntegrationConfiguration">resetExternalIntegrationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.resetFindingFieldsUpdate">resetFindingFieldsUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExternalIntegrationConfiguration` <a name="putExternalIntegrationConfiguration" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.putExternalIntegrationConfiguration"></a>

```typescript
public putExternalIntegrationConfiguration(value: SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.putExternalIntegrationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration</a>

---

##### `putFindingFieldsUpdate` <a name="putFindingFieldsUpdate" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.putFindingFieldsUpdate"></a>

```typescript
public putFindingFieldsUpdate(value: SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.putFindingFieldsUpdate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate</a>

---

##### `resetExternalIntegrationConfiguration` <a name="resetExternalIntegrationConfiguration" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.resetExternalIntegrationConfiguration"></a>

```typescript
public resetExternalIntegrationConfiguration(): void
```

##### `resetFindingFieldsUpdate` <a name="resetFindingFieldsUpdate" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.resetFindingFieldsUpdate"></a>

```typescript
public resetFindingFieldsUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.externalIntegrationConfiguration">externalIntegrationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference">SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.findingFieldsUpdate">findingFieldsUpdate</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference">SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.externalIntegrationConfigurationInput">externalIntegrationConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.findingFieldsUpdateInput">findingFieldsUpdateInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions">SecurityhubAutomationRuleV2Actions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalIntegrationConfiguration`<sup>Required</sup> <a name="externalIntegrationConfiguration" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.externalIntegrationConfiguration"></a>

```typescript
public readonly externalIntegrationConfiguration: SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference">SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference</a>

---

##### `findingFieldsUpdate`<sup>Required</sup> <a name="findingFieldsUpdate" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.findingFieldsUpdate"></a>

```typescript
public readonly findingFieldsUpdate: SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference">SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference</a>

---

##### `externalIntegrationConfigurationInput`<sup>Optional</sup> <a name="externalIntegrationConfigurationInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.externalIntegrationConfigurationInput"></a>

```typescript
public readonly externalIntegrationConfigurationInput: IResolvable | SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration</a>

---

##### `findingFieldsUpdateInput`<sup>Optional</sup> <a name="findingFieldsUpdateInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.findingFieldsUpdateInput"></a>

```typescript
public readonly findingFieldsUpdateInput: IResolvable | SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubAutomationRuleV2Actions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions">SecurityhubAutomationRuleV2Actions</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.valueInput">valueInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.value">value</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.value"></a>

```typescript
public readonly value: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.get"></a>

```typescript
public get(index: number): SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters</a>[]

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.resetFieldName">resetFieldName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilter` <a name="putFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.putFilter"></a>

```typescript
public putFilter(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter</a>

---

##### `resetFieldName` <a name="resetFieldName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.resetFieldName"></a>

```typescript
public resetFieldName(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.fieldNameInput">fieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.fieldName">fieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.filter"></a>

```typescript
public readonly filter: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference</a>

---

##### `fieldNameInput`<sup>Optional</sup> <a name="fieldNameInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.fieldNameInput"></a>

```typescript
public readonly fieldNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter</a>

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.resetUnit">resetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.putDateRange">putDateRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.resetDateRange">resetDateRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.resetEnd">resetEnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.resetStart">resetStart</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDateRange` <a name="putDateRange" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.putDateRange"></a>

```typescript
public putDateRange(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.putDateRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange</a>

---

##### `resetDateRange` <a name="resetDateRange" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.resetDateRange"></a>

```typescript
public resetDateRange(): void
```

##### `resetEnd` <a name="resetEnd" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.resetEnd"></a>

```typescript
public resetEnd(): void
```

##### `resetStart` <a name="resetStart" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.resetStart"></a>

```typescript
public resetStart(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.dateRange">dateRange</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.dateRangeInput">dateRangeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.endInput">endInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.startInput">startInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.end">end</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dateRange`<sup>Required</sup> <a name="dateRange" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.dateRange"></a>

```typescript
public readonly dateRange: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference</a>

---

##### `dateRangeInput`<sup>Optional</sup> <a name="dateRangeInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.dateRangeInput"></a>

```typescript
public readonly dateRangeInput: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange</a>

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.endInput"></a>

```typescript
public readonly endInput: string;
```

- *Type:* string

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.startInput"></a>

```typescript
public readonly startInput: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.get"></a>

```typescript
public get(index: number): SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters</a>[]

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.resetFieldName">resetFieldName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilter` <a name="putFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.putFilter"></a>

```typescript
public putFilter(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter</a>

---

##### `resetFieldName` <a name="resetFieldName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.resetFieldName"></a>

```typescript
public resetFieldName(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.fieldNameInput">fieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.fieldName">fieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.filter"></a>

```typescript
public readonly filter: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference</a>

---

##### `fieldNameInput`<sup>Optional</sup> <a name="fieldNameInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.fieldNameInput"></a>

```typescript
public readonly fieldNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter</a>

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.get"></a>

```typescript
public get(index: number): SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters</a>[]

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.resetComparison">resetComparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComparison` <a name="resetComparison" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.resetComparison"></a>

```typescript
public resetComparison(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.comparisonInput">comparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.comparison">comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonInput`<sup>Optional</sup> <a name="comparisonInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.comparisonInput"></a>

```typescript
public readonly comparisonInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.get"></a>

```typescript
public get(index: number): SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters</a>[]

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.resetFieldName">resetFieldName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilter` <a name="putFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.putFilter"></a>

```typescript
public putFilter(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter</a>

---

##### `resetFieldName` <a name="resetFieldName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.resetFieldName"></a>

```typescript
public resetFieldName(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.fieldNameInput">fieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.fieldName">fieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.filter"></a>

```typescript
public readonly filter: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference</a>

---

##### `fieldNameInput`<sup>Optional</sup> <a name="fieldNameInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.fieldNameInput"></a>

```typescript
public readonly fieldNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter</a>

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.resetEq">resetEq</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.resetGte">resetGte</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.resetLte">resetLte</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEq` <a name="resetEq" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.resetEq"></a>

```typescript
public resetEq(): void
```

##### `resetGte` <a name="resetGte" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.resetGte"></a>

```typescript
public resetGte(): void
```

##### `resetLte` <a name="resetLte" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.resetLte"></a>

```typescript
public resetLte(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.eqInput">eqInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.gteInput">gteInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.lteInput">lteInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.eq">eq</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.gte">gte</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.lte">lte</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eqInput`<sup>Optional</sup> <a name="eqInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.eqInput"></a>

```typescript
public readonly eqInput: number;
```

- *Type:* number

---

##### `gteInput`<sup>Optional</sup> <a name="gteInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.gteInput"></a>

```typescript
public readonly gteInput: number;
```

- *Type:* number

---

##### `lteInput`<sup>Optional</sup> <a name="lteInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.lteInput"></a>

```typescript
public readonly lteInput: number;
```

- *Type:* number

---

##### `eq`<sup>Required</sup> <a name="eq" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.eq"></a>

```typescript
public readonly eq: number;
```

- *Type:* number

---

##### `gte`<sup>Required</sup> <a name="gte" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.gte"></a>

```typescript
public readonly gte: number;
```

- *Type:* number

---

##### `lte`<sup>Required</sup> <a name="lte" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.lte"></a>

```typescript
public readonly lte: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.get"></a>

```typescript
public get(index: number): SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters</a>[]

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.resetFieldName">resetFieldName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilter` <a name="putFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.putFilter"></a>

```typescript
public putFilter(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter</a>

---

##### `resetFieldName` <a name="resetFieldName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.resetFieldName"></a>

```typescript
public resetFieldName(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.fieldNameInput">fieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.fieldName">fieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.filter"></a>

```typescript
public readonly filter: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference</a>

---

##### `fieldNameInput`<sup>Optional</sup> <a name="fieldNameInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.fieldNameInput"></a>

```typescript
public readonly fieldNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter</a>

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putBooleanFilters">putBooleanFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putDateFilters">putDateFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putMapFilters">putMapFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putNumberFilters">putNumberFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putStringFilters">putStringFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetBooleanFilters">resetBooleanFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetDateFilters">resetDateFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetMapFilters">resetMapFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetNumberFilters">resetNumberFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetStringFilters">resetStringFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBooleanFilters` <a name="putBooleanFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putBooleanFilters"></a>

```typescript
public putBooleanFilters(value: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putBooleanFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters</a>[]

---

##### `putDateFilters` <a name="putDateFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putDateFilters"></a>

```typescript
public putDateFilters(value: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putDateFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters</a>[]

---

##### `putMapFilters` <a name="putMapFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putMapFilters"></a>

```typescript
public putMapFilters(value: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putMapFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters</a>[]

---

##### `putNumberFilters` <a name="putNumberFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putNumberFilters"></a>

```typescript
public putNumberFilters(value: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putNumberFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters</a>[]

---

##### `putStringFilters` <a name="putStringFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putStringFilters"></a>

```typescript
public putStringFilters(value: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putStringFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters</a>[]

---

##### `resetBooleanFilters` <a name="resetBooleanFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetBooleanFilters"></a>

```typescript
public resetBooleanFilters(): void
```

##### `resetDateFilters` <a name="resetDateFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetDateFilters"></a>

```typescript
public resetDateFilters(): void
```

##### `resetMapFilters` <a name="resetMapFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetMapFilters"></a>

```typescript
public resetMapFilters(): void
```

##### `resetNumberFilters` <a name="resetNumberFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetNumberFilters"></a>

```typescript
public resetNumberFilters(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetStringFilters` <a name="resetStringFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetStringFilters"></a>

```typescript
public resetStringFilters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.booleanFilters">booleanFilters</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.dateFilters">dateFilters</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.mapFilters">mapFilters</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.numberFilters">numberFilters</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.stringFilters">stringFilters</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.booleanFiltersInput">booleanFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.dateFiltersInput">dateFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.mapFiltersInput">mapFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.numberFiltersInput">numberFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.stringFiltersInput">stringFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `booleanFilters`<sup>Required</sup> <a name="booleanFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.booleanFilters"></a>

```typescript
public readonly booleanFilters: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList</a>

---

##### `dateFilters`<sup>Required</sup> <a name="dateFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.dateFilters"></a>

```typescript
public readonly dateFilters: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList</a>

---

##### `mapFilters`<sup>Required</sup> <a name="mapFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.mapFilters"></a>

```typescript
public readonly mapFilters: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList</a>

---

##### `numberFilters`<sup>Required</sup> <a name="numberFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.numberFilters"></a>

```typescript
public readonly numberFilters: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList</a>

---

##### `stringFilters`<sup>Required</sup> <a name="stringFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.stringFilters"></a>

```typescript
public readonly stringFilters: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList</a>

---

##### `booleanFiltersInput`<sup>Optional</sup> <a name="booleanFiltersInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.booleanFiltersInput"></a>

```typescript
public readonly booleanFiltersInput: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters</a>[]

---

##### `dateFiltersInput`<sup>Optional</sup> <a name="dateFiltersInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.dateFiltersInput"></a>

```typescript
public readonly dateFiltersInput: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters</a>[]

---

##### `mapFiltersInput`<sup>Optional</sup> <a name="mapFiltersInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.mapFiltersInput"></a>

```typescript
public readonly mapFiltersInput: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters</a>[]

---

##### `numberFiltersInput`<sup>Optional</sup> <a name="numberFiltersInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.numberFiltersInput"></a>

```typescript
public readonly numberFiltersInput: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters</a>[]

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `stringFiltersInput`<sup>Optional</sup> <a name="stringFiltersInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.stringFiltersInput"></a>

```typescript
public readonly stringFiltersInput: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters</a>[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.resetComparison">resetComparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComparison` <a name="resetComparison" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.resetComparison"></a>

```typescript
public resetComparison(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.comparisonInput">comparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.comparison">comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonInput`<sup>Optional</sup> <a name="comparisonInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.comparisonInput"></a>

```typescript
public readonly comparisonInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.get"></a>

```typescript
public get(index: number): SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters</a>[]

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.resetFieldName">resetFieldName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilter` <a name="putFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.putFilter"></a>

```typescript
public putFilter(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter</a>

---

##### `resetFieldName` <a name="resetFieldName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.resetFieldName"></a>

```typescript
public resetFieldName(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.fieldNameInput">fieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.fieldName">fieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.filter"></a>

```typescript
public readonly filter: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference</a>

---

##### `fieldNameInput`<sup>Optional</sup> <a name="fieldNameInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.fieldNameInput"></a>

```typescript
public readonly fieldNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter</a>

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.putCompositeFilters">putCompositeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.resetCompositeFilters">resetCompositeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.resetCompositeOperator">resetCompositeOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCompositeFilters` <a name="putCompositeFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.putCompositeFilters"></a>

```typescript
public putCompositeFilters(value: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.putCompositeFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters</a>[]

---

##### `resetCompositeFilters` <a name="resetCompositeFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.resetCompositeFilters"></a>

```typescript
public resetCompositeFilters(): void
```

##### `resetCompositeOperator` <a name="resetCompositeOperator" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.resetCompositeOperator"></a>

```typescript
public resetCompositeOperator(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.compositeFilters">compositeFilters</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.compositeFiltersInput">compositeFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.compositeOperatorInput">compositeOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.compositeOperator">compositeOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compositeFilters`<sup>Required</sup> <a name="compositeFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.compositeFilters"></a>

```typescript
public readonly compositeFilters: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList</a>

---

##### `compositeFiltersInput`<sup>Optional</sup> <a name="compositeFiltersInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.compositeFiltersInput"></a>

```typescript
public readonly compositeFiltersInput: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters</a>[]

---

##### `compositeOperatorInput`<sup>Optional</sup> <a name="compositeOperatorInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.compositeOperatorInput"></a>

```typescript
public readonly compositeOperatorInput: string;
```

- *Type:* string

---

##### `compositeOperator`<sup>Required</sup> <a name="compositeOperator" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.compositeOperator"></a>

```typescript
public readonly compositeOperator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria</a>

---


### SecurityhubAutomationRuleV2CriteriaOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-awscc'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.putOcsfFindingCriteria">putOcsfFindingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.resetOcsfFindingCriteria">resetOcsfFindingCriteria</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOcsfFindingCriteria` <a name="putOcsfFindingCriteria" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.putOcsfFindingCriteria"></a>

```typescript
public putOcsfFindingCriteria(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.putOcsfFindingCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria</a>

---

##### `resetOcsfFindingCriteria` <a name="resetOcsfFindingCriteria" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.resetOcsfFindingCriteria"></a>

```typescript
public resetOcsfFindingCriteria(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.ocsfFindingCriteria">ocsfFindingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.ocsfFindingCriteriaInput">ocsfFindingCriteriaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ocsfFindingCriteria`<sup>Required</sup> <a name="ocsfFindingCriteria" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.ocsfFindingCriteria"></a>

```typescript
public readonly ocsfFindingCriteria: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference</a>

---

##### `ocsfFindingCriteriaInput`<sup>Optional</sup> <a name="ocsfFindingCriteriaInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.ocsfFindingCriteriaInput"></a>

```typescript
public readonly ocsfFindingCriteriaInput: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubAutomationRuleV2Criteria;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>

---



