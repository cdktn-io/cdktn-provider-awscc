# `wellarchitectedWorkload` Submodule <a name="`wellarchitectedWorkload` Submodule" id="@cdktn/provider-awscc.wellarchitectedWorkload"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WellarchitectedWorkload <a name="WellarchitectedWorkload" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload awscc_wellarchitected_workload}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer"></a>

```typescript
import { wellarchitectedWorkload } from '@cdktn/provider-awscc'

new wellarchitectedWorkload.WellarchitectedWorkload(scope: Construct, id: string, config: WellarchitectedWorkloadConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig">WellarchitectedWorkloadConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig">WellarchitectedWorkloadConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.putDiscoveryConfig">putDiscoveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetAccountIds">resetAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetArchitecturalDesign">resetArchitecturalDesign</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetDiscoveryConfig">resetDiscoveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetIndustry">resetIndustry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetIndustryType">resetIndustryType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetNonAwsRegions">resetNonAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetNotes">resetNotes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetReviewOwner">resetReviewOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDiscoveryConfig` <a name="putDiscoveryConfig" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.putDiscoveryConfig"></a>

```typescript
public putDiscoveryConfig(value: WellarchitectedWorkloadDiscoveryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.putDiscoveryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.putTags"></a>

```typescript
public putTags(value: IResolvable | WellarchitectedWorkloadTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>[]

---

##### `resetAccountIds` <a name="resetAccountIds" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetAccountIds"></a>

```typescript
public resetAccountIds(): void
```

##### `resetArchitecturalDesign` <a name="resetArchitecturalDesign" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetArchitecturalDesign"></a>

```typescript
public resetArchitecturalDesign(): void
```

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetDiscoveryConfig` <a name="resetDiscoveryConfig" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetDiscoveryConfig"></a>

```typescript
public resetDiscoveryConfig(): void
```

##### `resetIndustry` <a name="resetIndustry" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetIndustry"></a>

```typescript
public resetIndustry(): void
```

##### `resetIndustryType` <a name="resetIndustryType" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetIndustryType"></a>

```typescript
public resetIndustryType(): void
```

##### `resetNonAwsRegions` <a name="resetNonAwsRegions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetNonAwsRegions"></a>

```typescript
public resetNonAwsRegions(): void
```

##### `resetNotes` <a name="resetNotes" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetNotes"></a>

```typescript
public resetNotes(): void
```

##### `resetReviewOwner` <a name="resetReviewOwner" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetReviewOwner"></a>

```typescript
public resetReviewOwner(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WellarchitectedWorkload resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isConstruct"></a>

```typescript
import { wellarchitectedWorkload } from '@cdktn/provider-awscc'

wellarchitectedWorkload.WellarchitectedWorkload.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isTerraformElement"></a>

```typescript
import { wellarchitectedWorkload } from '@cdktn/provider-awscc'

wellarchitectedWorkload.WellarchitectedWorkload.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isTerraformResource"></a>

```typescript
import { wellarchitectedWorkload } from '@cdktn/provider-awscc'

wellarchitectedWorkload.WellarchitectedWorkload.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.generateConfigForImport"></a>

```typescript
import { wellarchitectedWorkload } from '@cdktn/provider-awscc'

wellarchitectedWorkload.WellarchitectedWorkload.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a WellarchitectedWorkload resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WellarchitectedWorkload to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WellarchitectedWorkload that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WellarchitectedWorkload to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.discoveryConfig">discoveryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference">WellarchitectedWorkloadDiscoveryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.improvementStatus">improvementStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList">WellarchitectedWorkloadTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadArn">workloadArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadId">workloadId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.accountIdsInput">accountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.architecturalDesignInput">architecturalDesignInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.discoveryConfigInput">discoveryConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industryInput">industryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industryTypeInput">industryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.lensesInput">lensesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.nonAwsRegionsInput">nonAwsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.notesInput">notesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.reviewOwnerInput">reviewOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadNameInput">workloadNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.accountIds">accountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.architecturalDesign">architecturalDesign</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industry">industry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industryType">industryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.lenses">lenses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.nonAwsRegions">nonAwsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.notes">notes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.reviewOwner">reviewOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadName">workloadName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `discoveryConfig`<sup>Required</sup> <a name="discoveryConfig" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.discoveryConfig"></a>

```typescript
public readonly discoveryConfig: WellarchitectedWorkloadDiscoveryConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference">WellarchitectedWorkloadDiscoveryConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `improvementStatus`<sup>Required</sup> <a name="improvementStatus" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.improvementStatus"></a>

```typescript
public readonly improvementStatus: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.tags"></a>

```typescript
public readonly tags: WellarchitectedWorkloadTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList">WellarchitectedWorkloadTagsList</a>

---

##### `workloadArn`<sup>Required</sup> <a name="workloadArn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadArn"></a>

```typescript
public readonly workloadArn: string;
```

- *Type:* string

---

##### `workloadId`<sup>Required</sup> <a name="workloadId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadId"></a>

```typescript
public readonly workloadId: string;
```

- *Type:* string

---

##### `accountIdsInput`<sup>Optional</sup> <a name="accountIdsInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.accountIdsInput"></a>

```typescript
public readonly accountIdsInput: string[];
```

- *Type:* string[]

---

##### `architecturalDesignInput`<sup>Optional</sup> <a name="architecturalDesignInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.architecturalDesignInput"></a>

```typescript
public readonly architecturalDesignInput: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `discoveryConfigInput`<sup>Optional</sup> <a name="discoveryConfigInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.discoveryConfigInput"></a>

```typescript
public readonly discoveryConfigInput: IResolvable | WellarchitectedWorkloadDiscoveryConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a>

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `industryInput`<sup>Optional</sup> <a name="industryInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industryInput"></a>

```typescript
public readonly industryInput: string;
```

- *Type:* string

---

##### `industryTypeInput`<sup>Optional</sup> <a name="industryTypeInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industryTypeInput"></a>

```typescript
public readonly industryTypeInput: string;
```

- *Type:* string

---

##### `lensesInput`<sup>Optional</sup> <a name="lensesInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.lensesInput"></a>

```typescript
public readonly lensesInput: string[];
```

- *Type:* string[]

---

##### `nonAwsRegionsInput`<sup>Optional</sup> <a name="nonAwsRegionsInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.nonAwsRegionsInput"></a>

```typescript
public readonly nonAwsRegionsInput: string[];
```

- *Type:* string[]

---

##### `notesInput`<sup>Optional</sup> <a name="notesInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.notesInput"></a>

```typescript
public readonly notesInput: string;
```

- *Type:* string

---

##### `reviewOwnerInput`<sup>Optional</sup> <a name="reviewOwnerInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.reviewOwnerInput"></a>

```typescript
public readonly reviewOwnerInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | WellarchitectedWorkloadTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>[]

---

##### `workloadNameInput`<sup>Optional</sup> <a name="workloadNameInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadNameInput"></a>

```typescript
public readonly workloadNameInput: string;
```

- *Type:* string

---

##### `accountIds`<sup>Required</sup> <a name="accountIds" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.accountIds"></a>

```typescript
public readonly accountIds: string[];
```

- *Type:* string[]

---

##### `architecturalDesign`<sup>Required</sup> <a name="architecturalDesign" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.architecturalDesign"></a>

```typescript
public readonly architecturalDesign: string;
```

- *Type:* string

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `industry`<sup>Required</sup> <a name="industry" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industry"></a>

```typescript
public readonly industry: string;
```

- *Type:* string

---

##### `industryType`<sup>Required</sup> <a name="industryType" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industryType"></a>

```typescript
public readonly industryType: string;
```

- *Type:* string

---

##### `lenses`<sup>Required</sup> <a name="lenses" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.lenses"></a>

```typescript
public readonly lenses: string[];
```

- *Type:* string[]

---

##### `nonAwsRegions`<sup>Required</sup> <a name="nonAwsRegions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.nonAwsRegions"></a>

```typescript
public readonly nonAwsRegions: string[];
```

- *Type:* string[]

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

---

##### `reviewOwner`<sup>Required</sup> <a name="reviewOwner" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.reviewOwner"></a>

```typescript
public readonly reviewOwner: string;
```

- *Type:* string

---

##### `workloadName`<sup>Required</sup> <a name="workloadName" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadName"></a>

```typescript
public readonly workloadName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WellarchitectedWorkloadConfig <a name="WellarchitectedWorkloadConfig" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.Initializer"></a>

```typescript
import { wellarchitectedWorkload } from '@cdktn/provider-awscc'

const wellarchitectedWorkloadConfig: wellarchitectedWorkload.WellarchitectedWorkloadConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.description">description</a></code> | <code>string</code> | The description for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.environment">environment</a></code> | <code>string</code> | The environment for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.lenses">lenses</a></code> | <code>string[]</code> | The list of lenses associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.workloadName">workloadName</a></code> | <code>string</code> | The name of the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.accountIds">accountIds</a></code> | <code>string[]</code> | The list of Amazon Web Services account IDs associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.architecturalDesign">architecturalDesign</a></code> | <code>string</code> | The URL of the architectural design for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | The list of Amazon Web Services Regions associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.discoveryConfig">discoveryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a></code> | Discovery configuration associated to the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.industry">industry</a></code> | <code>string</code> | The industry for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.industryType">industryType</a></code> | <code>string</code> | The industry type for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.nonAwsRegions">nonAwsRegions</a></code> | <code>string[]</code> | The list of non-Amazon Web Services Regions associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.notes">notes</a></code> | <code>string</code> | The notes associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.reviewOwner">reviewOwner</a></code> | <code>string</code> | The review owner of the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>[]</code> | The tags associated with the workload. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#description WellarchitectedWorkload#description}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#environment WellarchitectedWorkload#environment}

---

##### `lenses`<sup>Required</sup> <a name="lenses" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.lenses"></a>

```typescript
public readonly lenses: string[];
```

- *Type:* string[]

The list of lenses associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#lenses WellarchitectedWorkload#lenses}

---

##### `workloadName`<sup>Required</sup> <a name="workloadName" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.workloadName"></a>

```typescript
public readonly workloadName: string;
```

- *Type:* string

The name of the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#workload_name WellarchitectedWorkload#workload_name}

---

##### `accountIds`<sup>Optional</sup> <a name="accountIds" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.accountIds"></a>

```typescript
public readonly accountIds: string[];
```

- *Type:* string[]

The list of Amazon Web Services account IDs associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#account_ids WellarchitectedWorkload#account_ids}

---

##### `architecturalDesign`<sup>Optional</sup> <a name="architecturalDesign" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.architecturalDesign"></a>

```typescript
public readonly architecturalDesign: string;
```

- *Type:* string

The URL of the architectural design for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#architectural_design WellarchitectedWorkload#architectural_design}

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

The list of Amazon Web Services Regions associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#aws_regions WellarchitectedWorkload#aws_regions}

---

##### `discoveryConfig`<sup>Optional</sup> <a name="discoveryConfig" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.discoveryConfig"></a>

```typescript
public readonly discoveryConfig: WellarchitectedWorkloadDiscoveryConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a>

Discovery configuration associated to the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#discovery_config WellarchitectedWorkload#discovery_config}

---

##### `industry`<sup>Optional</sup> <a name="industry" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.industry"></a>

```typescript
public readonly industry: string;
```

- *Type:* string

The industry for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#industry WellarchitectedWorkload#industry}

---

##### `industryType`<sup>Optional</sup> <a name="industryType" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.industryType"></a>

```typescript
public readonly industryType: string;
```

- *Type:* string

The industry type for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#industry_type WellarchitectedWorkload#industry_type}

---

##### `nonAwsRegions`<sup>Optional</sup> <a name="nonAwsRegions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.nonAwsRegions"></a>

```typescript
public readonly nonAwsRegions: string[];
```

- *Type:* string[]

The list of non-Amazon Web Services Regions associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#non_aws_regions WellarchitectedWorkload#non_aws_regions}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

The notes associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#notes WellarchitectedWorkload#notes}

---

##### `reviewOwner`<sup>Optional</sup> <a name="reviewOwner" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.reviewOwner"></a>

```typescript
public readonly reviewOwner: string;
```

- *Type:* string

The review owner of the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#review_owner WellarchitectedWorkload#review_owner}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | WellarchitectedWorkloadTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>[]

The tags associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#tags WellarchitectedWorkload#tags}

---

### WellarchitectedWorkloadDiscoveryConfig <a name="WellarchitectedWorkloadDiscoveryConfig" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig.Initializer"></a>

```typescript
import { wellarchitectedWorkload } from '@cdktn/provider-awscc'

const wellarchitectedWorkloadDiscoveryConfig: wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig.property.trustedAdvisorIntegrationStatus">trustedAdvisorIntegrationStatus</a></code> | <code>string</code> | Discovery integration status in respect to Trusted Advisor for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig.property.workloadResourceDefinition">workloadResourceDefinition</a></code> | <code>string[]</code> | The mode to use for identifying resources associated with the workload. |

---

##### `trustedAdvisorIntegrationStatus`<sup>Optional</sup> <a name="trustedAdvisorIntegrationStatus" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig.property.trustedAdvisorIntegrationStatus"></a>

```typescript
public readonly trustedAdvisorIntegrationStatus: string;
```

- *Type:* string

Discovery integration status in respect to Trusted Advisor for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#trusted_advisor_integration_status WellarchitectedWorkload#trusted_advisor_integration_status}

---

##### `workloadResourceDefinition`<sup>Optional</sup> <a name="workloadResourceDefinition" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig.property.workloadResourceDefinition"></a>

```typescript
public readonly workloadResourceDefinition: string[];
```

- *Type:* string[]

The mode to use for identifying resources associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#workload_resource_definition WellarchitectedWorkload#workload_resource_definition}

---

### WellarchitectedWorkloadTags <a name="WellarchitectedWorkloadTags" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags.Initializer"></a>

```typescript
import { wellarchitectedWorkload } from '@cdktn/provider-awscc'

const wellarchitectedWorkloadTags: wellarchitectedWorkload.WellarchitectedWorkloadTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#key WellarchitectedWorkload#key}. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#value WellarchitectedWorkload#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#key WellarchitectedWorkload#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#value WellarchitectedWorkload#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### WellarchitectedWorkloadDiscoveryConfigOutputReference <a name="WellarchitectedWorkloadDiscoveryConfigOutputReference" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.Initializer"></a>

```typescript
import { wellarchitectedWorkload } from '@cdktn/provider-awscc'

new wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resetTrustedAdvisorIntegrationStatus">resetTrustedAdvisorIntegrationStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resetWorkloadResourceDefinition">resetWorkloadResourceDefinition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTrustedAdvisorIntegrationStatus` <a name="resetTrustedAdvisorIntegrationStatus" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resetTrustedAdvisorIntegrationStatus"></a>

```typescript
public resetTrustedAdvisorIntegrationStatus(): void
```

##### `resetWorkloadResourceDefinition` <a name="resetWorkloadResourceDefinition" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resetWorkloadResourceDefinition"></a>

```typescript
public resetWorkloadResourceDefinition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.trustedAdvisorIntegrationStatusInput">trustedAdvisorIntegrationStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.workloadResourceDefinitionInput">workloadResourceDefinitionInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.trustedAdvisorIntegrationStatus">trustedAdvisorIntegrationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.workloadResourceDefinition">workloadResourceDefinition</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `trustedAdvisorIntegrationStatusInput`<sup>Optional</sup> <a name="trustedAdvisorIntegrationStatusInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.trustedAdvisorIntegrationStatusInput"></a>

```typescript
public readonly trustedAdvisorIntegrationStatusInput: string;
```

- *Type:* string

---

##### `workloadResourceDefinitionInput`<sup>Optional</sup> <a name="workloadResourceDefinitionInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.workloadResourceDefinitionInput"></a>

```typescript
public readonly workloadResourceDefinitionInput: string[];
```

- *Type:* string[]

---

##### `trustedAdvisorIntegrationStatus`<sup>Required</sup> <a name="trustedAdvisorIntegrationStatus" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.trustedAdvisorIntegrationStatus"></a>

```typescript
public readonly trustedAdvisorIntegrationStatus: string;
```

- *Type:* string

---

##### `workloadResourceDefinition`<sup>Required</sup> <a name="workloadResourceDefinition" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.workloadResourceDefinition"></a>

```typescript
public readonly workloadResourceDefinition: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WellarchitectedWorkloadDiscoveryConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a>

---


### WellarchitectedWorkloadTagsList <a name="WellarchitectedWorkloadTagsList" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer"></a>

```typescript
import { wellarchitectedWorkload } from '@cdktn/provider-awscc'

new wellarchitectedWorkload.WellarchitectedWorkloadTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.get"></a>

```typescript
public get(index: number): WellarchitectedWorkloadTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WellarchitectedWorkloadTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>[]

---


### WellarchitectedWorkloadTagsOutputReference <a name="WellarchitectedWorkloadTagsOutputReference" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer"></a>

```typescript
import { wellarchitectedWorkload } from '@cdktn/provider-awscc'

new wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WellarchitectedWorkloadTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>

---



